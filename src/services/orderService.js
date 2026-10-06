/**
 * Order Service Layer
 * Manages order submission, reference ID generation, and order history fetching.
 */
import { api } from './api';

export const orderService = {
  async submitOrder(orderData) {
    return await api.createOrder(orderData);
  }
};
