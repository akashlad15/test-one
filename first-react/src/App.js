import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mycomp from "./firstcom"
import DateTime from "./date"

function App() {
  const firstName="Akash";
  const lastName="lad";

  

  return (
    <div>

    
    <h1 className="h1tage">Hi My App is runnin. Made By {firstName+" "+lastName}</h1>
    <DateTime/>
    <ul>
    <li>Thailand</li>
    <li>Prage</li>
    <li>Netherland</li>
    </ul>
    <Mycomp/>
    </div>
  );
}

export default App;
