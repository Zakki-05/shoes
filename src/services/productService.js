/**
 * Product Service Layer
 * Encapsulates all product query logic, category filtering, search, and details retrieval.
 */
import { products, PRODUCT_CATEGORIES, ALL_CATEGORIES_LIST } from '../data/products';
import { api } from './api';

export const productService = {
  /**
   * Fetch product catalog with filter params
   */
  async getProducts(params = {}) {
    return await api.getProducts(params);
  },

  /**
   * Fetch single product by ID
   */
  async getProductById(id) {
    return await api.getProductById(id);
  },

  /**
   * Get related footwear recommendations
   */
  getRelatedProducts(productId, categoryGroup, limit = 3) {
    return products
      .filter((p) => p.id !== productId && p.categoryGroup === categoryGroup)
      .slice(0, limit);
  },

  /**
   * Get product categories list
   */
  getCategories() {
    return PRODUCT_CATEGORIES;
  },

  /**
   * Get all individual category labels
   */
  getAllCategoryLabels() {
    return ALL_CATEGORIES_LIST;
  }
};
