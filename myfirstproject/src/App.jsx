import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Assignment/Demo';
import Assignment1 from './Assignment/Assignment1'
import Assignment2 from './Assignment/Assignment2'
import Counterapp from './Assignment/Counterapp'
import Showhidetext from './Assignment/Showhidetext'
import Livedisplay from './Assignment/Livedisplay'
import Likebutton from './Assignment/Likebutton'
function App() {
 
  return (
    <div>
 
 
   <Livedisplay></Livedisplay>
   <Showhidetext></Showhidetext>
   <Counterapp></Counterapp>
  
   <Likebutton></Likebutton>
   
    </div>
  )
}

export default App
