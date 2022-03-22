import styled from "styled-components";
import ImgPg from "../../images/pizza-3.jpg"
export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgPg});
  background-position: center;
  height: 100vh;
  width: 100vw;
  width:100% ;
  height:100% ;
 
  background-size: cover; 
`;
export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  padding: 0rem calc((100vw - 1300px) / 2);
  
  
`;
export const HeroItems=styled.div`
    color:#fff;
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:flex-start ;
    height:100vh ;
    max-height:100% ;
    padding-left:2rem ;
    width:650px ;
    line-height:1 ;
    margin-right:0rem ;
    @media (max-width: ${({ theme }) => theme.ipad}) {
    width:90%;
  }
`
export const HeroH1 = styled.h1`
  font-size: 4rem;
  margin-bottom:1rem ;
  
  border-right: solid #e9ba23 5px;
  border-bottom: solid #e9ba23 3px;
  letter-spacing:3px ;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 2rem;
  }
`;
export const HeroP = styled.p`
font-size: clamp( 2rem,0.5vw,3rem);
    margin-bottom: 2rem;
  
`;
export const HeroBtn = styled.button`
  
  font-size: clamp( 1rem,0.5vw,1.5rem);
  border-radius:2rem ;
  padding:1rem 4rem ;
  color:#fff;
  background: #e31837;
  border: none;
  font-weight: none;
  &:hover{
      background:#ffc500 ;
      cursor:pointer;
      color:#000;
  }
  
`;
