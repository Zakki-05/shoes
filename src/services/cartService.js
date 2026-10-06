/**
 * Cart Service Layer
 * Manages shopping cart state persistence and subtotal calculations.
 */
export const cartService = {
  getCart() {
    try {
      const saved = localStorage.getItem('aurelius_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  },

  saveCart(cartItems) {
    try {
      localStorage.setItem('aurelius_cart', JSON.stringify(cartItems));
    } catch (err) {
      console.warn("Failed to persist cart to storage", err);
    }
  },

  calculateSubtotal(cartItems) {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },

  calculateTotalCount(cartItems) {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
};
