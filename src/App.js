import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DefaultPage from './pages/DefaultPage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/Sidecart';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <>
      {/*navbar, sidebar, cart, footer*/ }
      <Navbar/>
      <Sidebar/>
      <Sidecart/>
     
      <Switch>
          <Route path = "/" exact component={HomePage}></Route>
          <Route path = "/about" component={AboutPage}></Route>
          <Route path = "/contact" component={ContactPage}></Route>
          <Route path = "/products" exact component={ProductsPage}></Route>
          <Route path = "/products/:id" component={SingleProductPage}></Route>
          <Route path = "/cart" component={CartPage}></Route>
          <Route component={DefaultPage}></Route>
      </Switch>
      <Footer/>
    </>

  );
}

export default App;
