/**
 * @copyright 2025 SamirAlam
 * @license Apache-2.0 
 */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP,ScrollTrigger);

/*
Components
*/
import Header from './components/Header.jsx'
import Hero from "./components/Hero";
import About from "./components/About.jsx"
import Skill from "./components/Skill.jsx"
import Work from "./components/Work.jsx";
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import './App.css'
import './index.css'

const App = () =>{

  useGSAP(() =>{
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((elements) =>{
      gsap.to(elements,{
        scrollTrigger:{
          trigger: elements,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub: true
        
        },
        y:0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
   <ReactLenis root>
    <Header/>
    <main>
      <Hero/>
      <About />
      <Skill />
      <Work />
      <Certifications />
      <Contact />
    </main>
    <Footer />
   </ReactLenis>
  )
}

export default App
