import React from 'react'
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
 
export default function HomePage() {
    return (
       <>
            <Hero title = "Awesome gadgets" max = "true">
                <Link className = "main-link" to="/products" style= {{margin: "2rem"}}> Our products</Link>
            </Hero>
            <Services></Services>
            <Featured></Featured>
       </>
    )
}