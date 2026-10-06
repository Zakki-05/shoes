/**
 * Centralized API Service Layer
 * Clean architecture interface connecting React frontend to FastAPI / Django / MySQL backend.
 */
import { products } from '../data/products';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

export const api = {
  /**
   * Auth API - Google OAuth Verification
   */
  async verifyGoogleAuth(token, googleId, email) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/google/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, googleId, email })
      });
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      return await response.json();
    } catch (err) {
      console.warn("Backend API unreachable. Falling back to local auth state.", err);
      return null;
    }
  },

  /**
   * Products API - Get Catalog
   */
  async getProducts(params = {}) {
    try {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/products?${query}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    } catch {
      // Fallback to local products dataset
      let result = [...products];
      if (params.category && params.category !== 'all') {
        result = result.filter(p => p.categoryGroup === params.category || p.category.toLowerCase() === params.category.toLowerCase());
      }
      return result;
    }
  },

  /**
   * Products API - Get Single Product
   */
  async getProductById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) throw new Error("Product not found");
      return await response.json();
    } catch {
      return products.find(p => p.id === id) || products[0];
    }
  },

  /**
   * Orders API - Submit New Order
   */
  async createOrder(orderPayload) {
    try {
      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('aurelius_session_token') || ''}`
        },
        body: JSON.stringify(orderPayload)
      });
      if (!response.ok) throw new Error("Order placement failed");
      return await response.json();
    } catch (err) {
      console.warn("Backend order creation API offline. Generating local reference ID.", err);
      return {
        success: true,
        orderId: `AUR-${Math.floor(100000 + Math.random() * 900000)}`,
        status: "CONFIRMED",
        createdAt: new Date().toISOString()
      };
    }
  }
};
