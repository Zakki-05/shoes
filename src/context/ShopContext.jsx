import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';
import { authService } from '../services/authService';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [user, setUser] = useState(() => authService.getCurrentUser());
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    try {
      const local = localStorage.getItem('aurelius_cart');
      return local ? JSON.parse(local) : [];
    } catch {
      return [];
    }
  });


  const [wishlist, setWishlist] = useState(() => {
    try {
      const local = localStorage.getItem('aurelius_wishlist');
      return local ? JSON.parse(local) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [inspect3DProduct, setInspect3DProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('aurelius_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aurelius_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product, size = 9, color = null) => {
    const selectedColor = color || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
    const cartItemId = `${product.id}-${size}-${selectedColor}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.images[0],
          size,
          color: selectedColor,
          quantity: 1,
          productRef: product
        }
      ];
    });

    showNotification(`Added ${product.name} (Size ${size}) to Cart`);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateCartQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showNotification(`Removed ${product.name} from Wishlist`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showNotification(`Saved ${product.name} to Wishlist`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((p) => p.id === productId);
  };

  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const logoutUser = () => {
    authService.logout();
    setUser(null);
    showNotification("Logged out successfully");
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        user,
        setUser,
        isLoginModalOpen,
        setIsLoginModalOpen,
        logoutUser,
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        inspect3DProduct,
        setInspect3DProduct,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleWishlist,
        isInWishlist,
        cartSubtotal,
        cartTotalItems,
        toastMessage,
        showNotification
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
