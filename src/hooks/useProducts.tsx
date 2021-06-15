import React, { useEffect, useState } from "react";
import { ProductModel } from "../model/ProductModel";
import Product from "../domain/Product";

const useProducts = () => {

  const [allProducts, setAllProducts] = useState<ProductModel[]>([]);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await Product.getAllProducts();
    setAllProducts(response);
    setProducts(response);
    setIsLoading(false);
  };

  const filterByName = (name: string) => {
    const filteredProducts = allProducts.filter(value => value.name.includes(name));
    setProducts(filteredProducts);
  };

  return {
    products,
    isLoading,
    filterByName
  };

};

export default useProducts;
