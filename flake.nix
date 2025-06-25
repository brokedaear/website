{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    da-flake = {
      url = "github:brokedaear/da-flake";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      da-flake,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            allowUnfree = true;
          };
        };

        ciPackages =
          with pkgs;
          [
            nodejs_22
            corepack
            typescript
          ]
          ++ da-flake.lib.${system}.ciPackages;

        devPackages =
          with pkgs;
          [
            typescript-language-server
            stripe-cli
          ]
          ++ da-flake.lib.${system}.devPackages;
      in
      {
        devShells = {
          default = pkgs.mkShellNoCC {
            buildInputs = ciPackages ++ devPackages;
            shellHook = ''
              export PS1='$(printf "\033[01;34m(nix) \033[00m\033[01;32m[%s] \033[01;33m(node $(node -v))\033[00m$\033[00m " "\W")'
            '';
          };

          ci = pkgs.mkShellNoCC {
            buildInputs = ciPackages;
            shellHook = ''
              echo "Entering CI shell. Only essential CI tools available."
            '';
          };
        };
      }
    );
}
