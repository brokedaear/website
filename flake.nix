# modified from https://github.com/akirak/flake-templates/blob/master/node-typescript/flake.nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
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

        commonPackages = with pkgs; [
          # Development related
          nodejs_22
          yarn-berry
          typescript
          typescript-language-server
          stripe-cli
        ];

      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [ commonPackages ];
          shellHook = ''
               # Customize the prompt to show we're in a Nix environment
            export PS1='$(printf "\033[01;34m(nix) \033[00m\033[01;32m[%s] \033[01;33m(node $(node -v))\033[00m$\033[00m " "\W")'
          '';
        };
      }
    );
}
