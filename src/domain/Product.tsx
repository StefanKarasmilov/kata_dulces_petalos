import React from "react";
import apiClient from "../api/apiClient";
import { ProductModel } from "../model/ProductModel";

const Product = {
  getAllProducts: async (): Promise<ProductModel[]> => {
    const response = await apiClient.get<ProductModel[]>("/product");
    return response.data;
  },
  getProductDetail: async (productId: string): Promise<ProductModel> => {
    const response = await apiClient.get<ProductModel>(`/product/${productId}`);
    return response.data;
  }
};

export default Product;
