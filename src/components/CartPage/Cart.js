import React from 'react'
import Title from '../Title';
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import Hero from "../Hero";
import cartBcg from "../../images/storeBcg.jpeg"
export default function Cart() {
    return (
        <section className = "">
            {/* TItle*/ }
            <Hero img = {cartBcg}></Hero>
            <div className ="container my-5">
                <Title title = "Your cart items  " center></Title>
            </div>
            
            
            <CartColumns></CartColumns>
            <CartList></CartList>
            <CartTotals></CartTotals>
        </section>
    )
}
