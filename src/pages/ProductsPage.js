import React from 'react'
import Products from '../components/productsPage/Products';
import Hero from '../components/Hero';
import ProductBcg from '../images/productsBcg.jpeg';
export default function ProductsPage() {
    return (
       <>
       <Hero img = {ProductBcg} title = "Our Products:" max = "false"></Hero>
         <Products> </Products>
       </>
    )
}