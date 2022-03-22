import React from "react";
import { FeatureContainer,FeatureImg,FeatureH1,FeatureP,FeaturePrice ,FeatureBtn} from "./Feature.style";


const Feature = ({product}) => {
  return (
    <FeatureContainer>
      <FeatureImg src={product.img}/>
      <FeatureH1>{product.name}</FeatureH1>
      <FeatureP>{product.desc}</FeatureP>
        <FeaturePrice>{product.price}</FeaturePrice>
        
        <FeatureBtn >{product.button}</FeatureBtn>
      
    </FeatureContainer>
  );
};

export default Feature;
