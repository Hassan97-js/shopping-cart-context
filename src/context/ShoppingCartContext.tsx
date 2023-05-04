import { createContext, useState } from 'react';

import {useLocalStorage} from '../hooks';

import { items as storeItems } from '../data';

type CartItem = {
  id: number;
  quantity: number;
};

type StoreItems = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

type CartContext = {
  cartItems: CartItem[];
  storeItems: StoreItems[];
  isOpen: boolean;
  computeCartQuantity: () => string;
  computeCartTotal: () => number;
  toggleCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

type Props = {
  children: React.ReactNode;
};

export const ShoppingCartContext = createContext({} as CartContext);

const ShoppingCartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);
  const closeCart = () => setIsOpen(false);

  const computeCartQuantity = () => {
    return String(cartItems.reduce((quantity, item) => item.quantity + quantity, 0));
  };

  const computeCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const storeItem = storeItems.find((storeItem) => storeItem.id === item.id);

      if (!storeItem) {
        return total;
      }

      return total + storeItem.price * item.quantity;
    }, 0);
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity ?? 0;
  };

  const increaseCartQuantity = (id: number) => {
    if (cartItems.find((item) => item.id === id) === undefined) {
      setCartItems([...cartItems, { id, quantity: 1 }]);

      return;
    }

    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCartItems(newCartItems);
  };

  const decreaseCartQuantity = (id: number) => {
    const cartItem = cartItems.find((item) => item.id === id);

    if (cartItem?.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== id));
      return;
    }

    if (cartItem) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const value = {
    computeCartQuantity,
    computeCartTotal,
    toggleCart,
    closeCart,
    storeItems,
    cartItems,
    isOpen,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
