import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import {productData,productDataTwo} from "./components/Product/data"
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          
          <Hero/>
          <Product productData={productData} />
          <Hero2/>
          <Product productData={productDataTwo} />
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
