import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productscreen from "./Screens/Productscreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import CartScreen from "./Screens/CartScreen";
import ProductHome from "./Screens/ProductHome";
import { SignIn } from "./Screens/SignIn";
import Home from "./Screens/Home";
// need mag kakasunod amp

function App() {
  return (
    <Router>
      <Header />
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path= '/cart' element={<CartScreen/>}/>
            <Route path='/register' element={<RegisterScreen />} />
            <Route path = "/products" element={<ProductHome />} exact />
            <Route path = "/product/:id" element= {<Productscreen />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/' element={<Home />} />


          </Routes>
        </Container>
      <Footer/>
    </Router>
  );
}

export default App;
