/**
 * Wishlist Service Layer
 * Manages wishlist state persistence and bookmark checking.
 */
export const wishlistService = {
  getWishlist() {
    try {
      const saved = localStorage.getItem('aurelius_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  },

  saveWishlist(items) {
    try {
      localStorage.setItem('aurelius_wishlist', JSON.stringify(items));
    } catch (err) {
      console.warn("Failed to persist wishlist to storage", err);
    }
  }
};
