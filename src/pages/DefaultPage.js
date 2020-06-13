import React from 'react';
import Hero from '../components/Hero';
import defaultBcg from '../images/defaultBcg.jpeg';
import {Link} from 'react-router-dom';
export default function DefaultPage() {
    return (
       <>
        <Hero img = {defaultBcg} title = "Page not found!" max = {true}>
          <h2 className= "text-uppercase" > 404</h2>
          <Link to = "/" className = "main-link" style = {{marginTop:"1rem"}}>return home</Link>
        </Hero>
       </>
    )
}