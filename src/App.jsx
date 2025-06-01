
import { useState } from 'react';
import './App.css'
import DiceStyle from './components/DiceComponent/DiceStyle'
import DiceGame from './components/HeroSection/DiceGame'
import GameSection from './components/GamePlay/GameSection';

function App() {

  const [isStarted, setStarted] = useState(false);
  const toggleActions = () => {
    setStarted((prev)=> !prev);
  };

  return (
    <>

    {
     isStarted ? <GameSection/> : <DiceGame 
     toggleAction={toggleActions}
     />
     
    }
 
    </>
  )
}

export default App
