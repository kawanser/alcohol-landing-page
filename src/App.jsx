import React from 'react';
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap';

// register plugins within app
// these plugins are not automatically active and this line makes these plugins
// available and ready to use globally 
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>App</div>
  )
}

export default App