import React, { useState } from 'react';
import './App.css';
import { Button } from './Components/Button.tsx/Button';
import { Tablo } from './Tablo/Tablo';

function App() {

  let[num,setNum]=useState(0)
  const ChangeNumber = () => {
    setNum(++num);
  }
  
  const ResetButton = () => {
    setNum(0)
  } 

  return (
    <div className="App">
        <Tablo num={num}/>
        <Button changeNumber={ChangeNumber} 
        resetButton={ResetButton} 
        num={num}/>
    </div>
  );
}

export default App;
