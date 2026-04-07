import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Component/Demo';

function App() {
 function call() {
            alert("function call");
        }
         function apple() {
            alert("You clicked on apple button");
        }
         function banana() {
            alert("You clicked on banana button");
        }
  return (
    <div>
    <h1>welcome in new project</h1>
 <button onClick={call}>Click </button>
 <button onClick={apple}>apple</button>
 <button onClick={banana}>banana </button>
   <Demo></Demo>
    </div>
  )
}

export default App
