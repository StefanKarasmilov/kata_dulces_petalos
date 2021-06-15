import React, { useEffect, useState } from "react";
import { ProductModel } from "../model/ProductModel";
import Product from "../domain/Product";

interface Props {
  productId: string
}

const useProductDetail = ({ productId }: Props) => {

  const [productDetail, setProductDetail] = useState<ProductModel>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductDetail();
  }, []);


  const getProductDetail = async () => {
    const response = await Product.getProductDetail(productId);
    setProductDetail(response);
    setIsLoading(false);
  };

  return {
    productDetail,
    isLoading
  };

};

export default useProductDetail;
