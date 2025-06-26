interface User {
  id: number;
  githubId: number;
  username: string;
}

interface CartItem {
  id: number;
  name: string;
  total: number;
  price: number;
}

interface ShoppingCart {
  items: Array<CartItem>[];
}
