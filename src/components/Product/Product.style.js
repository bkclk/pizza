import styled from "styled-components";

export const ProductContainer=styled.div`
  min-height:100vh ;
    
    width:100vw ;
    width:100% ;
    color:#fff;
    background-color:black ;
    display:flex ;
  padding: 0rem calc((100vw - 1300px) / 2);
    justify-content:space-around ;
    flex-wrap:wrap;
    
    
`


export const ProductHeader=styled.div`
    background-color:black;
    
    color:white;
    text-align:center;
    height:160px ;
    width:100vw ;
    width:100% ;
    display:flex ;
    padding-top:80px ;
    justify-content:center ;
    @media (max-width:${({theme})=>theme.mobile} ) {
        width:90vw ;
    }
    
`
