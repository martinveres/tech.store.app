import React from 'react'
import Hero from '../components/Hero';
import contactImg from '../images/contactBcg.jpeg';
import Contact from '../components/ContactPage/contact';
export default function ContactPage() {
    return (
       <>
          <Hero img = {contactImg} ></Hero>
          <Contact></Contact>
       </>
    )
}