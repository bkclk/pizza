import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {GiFullPizza} from "react-icons/gi"

export const Nav = styled.nav`
  background:transparent;
  height: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:700 ;
`;
export const NavLink = styled(Link)`
  position:fixed ;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  @media (max-width:${({theme})=>theme.ipad} ){
    
  
}
@media (max-width:${({theme})=>theme.mobile} ){
  
  font-size: 1.5rem;
}
`;

export const NavItems=styled.div`
    position:fixed ;
    top:0;
    right:0;
    display:flex ;
    height:80px ;
    align-items:center ;
    width:6rem ;
    cursor:pointer;
   

span{
    font-size: 1rem;
}
@media (max-width:${({theme})=>theme.ipad} ){
  width:5rem ;
  
}

`
export const NavIcon=styled(GiFullPizza)`
    width:50% ;
    height:50% ;
    

`