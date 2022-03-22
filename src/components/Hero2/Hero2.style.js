import styled from "styled-components";
import ImgPg2 from "../../images/featured3.jpg"
export const Hero2Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgPg2});
  background-position: center;
  height: 100vh;
  width: 100vw;
  width:100% ;
  background-size: cover;
  padding:0rem calc((100vw- 1300px)/2) ;
`;

export const Hero2Items=styled.div`
display:flex ;
flex-direction:column ;
height:100vh ;
color:white;
text-align:center ;
justify-content:center ;
align-items:center ;
@media (max-width:${({theme})=>theme.mobile} ) {
        width: 100vw;
      }

`
export const Hero2H1=styled.h1`
font-size:4rem ;
@media (max-width:${({theme})=>theme.ipad} ) {
  font-size:3rem;
      }

`
export const Hero2P=styled.p`
font-weight:400 ;

font-size:1rem ;

`
export const Hero2Btn=styled.button`
    margin-top:1.5rem;
    padding:0.2rem 2rem;
    border-radius:2rem ;
  padding:0.5rem 3rem ;
  color:#fff;
  background: #e31837;
  border: none;
  font-weight: none;
  &:hover{
      background:#ffc500 ;
      cursor:pointer;
      color:#000;
  }
  @media (max-width:${({theme})=>theme.mobile} ) {
        margin: 1.5rem auto;
      }
`
