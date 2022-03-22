import  styled from "styled-components";
import {Link} from "react-router-dom"

export const FooterContainer=styled.footer`
    color:#551A8B;
    background-color:black ;
    height:80px ;
    width:100vw ;
    width:100% ;
    padding:0rem calc((100vw - 1300px)/2) ;
    display:flex ;
    justify-content:space-between ;
    @media (max-width:${({theme})=>theme.mobile} ) {
        flex-direction:column ;
        height:100px ;
        align-items:center ;
    }
`
export const FooterTıtle=styled.h1`
    text-align:center ;
    cursor:pointer ;
    margin-left:3rem;
    @media (max-width:${({theme})=>theme.mobile} ) {
        margin:0 auto;
    }
`

export const FooterIconWrap=styled.div`
 
 display:flex ;
 margin:0 3rem ;

`

export const FooterLink=styled(Link)`
    padding:0 0.5rem ;
`

