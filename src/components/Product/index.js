import React from "react";
import { ProductContainer, ProductHeader } from "./Product.style";
import Feature from "../Feature";

const Product = ({productData}) => {
  return (
    <><ProductContainer>
      <ProductHeader>Choose Your Favorite</ProductHeader>
      
        {productData.map((product) => (
          <Feature product={product} key={product.name}/>
          
        ))}

      </ProductContainer>
    </>
  );
};

export default Product;
