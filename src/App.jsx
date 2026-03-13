import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

// register plugins within app
// these plugins are not automatically active and this line makes these plugins
// available and ready to use globally 
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails/>
    </main>
  )
}

export default App