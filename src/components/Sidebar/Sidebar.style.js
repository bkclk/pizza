import styled from "styled-components";
import {FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"
export const SidebarContainer=styled.aside`
    position:fixed;
    top:0 ;
    height:100% ;
    right:${({isOpen})=>(isOpen?"0":"-1000px")} ;
    width:400px ;
    background-color:#ffc500 ;
    z-index:99 ;
    transition:0.2s ease-in-out ;
    display:grid ;
    grid-template-rows:1fr 4fr 5fr ;
    @media  (max-width:${({theme})=>theme.mobile}) {
        width:100% ;
    }
`

export const SideIconItem=styled.div`
    display:flex ;
    justify-content:flex-end ;
    align-items:center ;
    padding:1rem ;
`


export const SideIcon=styled(FaTimes)`
 font-size:2rem ;
 &:hover{
     color:#e31837;
     cursor:pointer;
 }

`
export const SideMenu=styled.div`
    display:grid;
    text-align:center ;
    padding:1rem ;
    align-items:center ;
    justify-items:center;
`
export const SideLink=styled(Link)`
  text-decoration:none ;
    color: black;
    width:70% ;
    &:hover{
        background-color:#e31837 ;
        color:#fff;
        border-radius:2rem ;
    }
`
export const SideButtonWrap=styled.div`
    display:flex ;
    justify-content:center;
    align-items:center ;
`
export const SideButton=styled.button`
    width:60% ;
    padding:0.5rem ;
    font-size:1rem ;
    border:none ;
    background-color:#e31837;
    color:white;
    font-weight:normal ;
    &:hover{
        cursor:pointer ;
    }
`