import React, { useState } from 'react';
import TotalScore from './TotalScore';
import SelectNumber from './SelectNumber';
import RoleSection from './RoleSection';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GameSection = () => {
  const [score, setScore] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [selectNumber, setSelectNumber] = useState();

  const randomNumber = () => {

    if (!selectNumber) {
        toast.warn('Please select a number first!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        return;
      }
  
    const random = Math.floor(Math.random() * 6) + 1;
    setDiceValue(random);

    if (selectNumber === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setDiceValue(1);
    setSelectNumber(undefined);
    toast.info('Score has been reset!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  return (
    <div>
      <div className='flex justify-between items-center pt-5'>
        <SelectNumber 
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
        <TotalScore score={score} />
      </div>

      <div className='pt-40'>
        <RoleSection 
          diceValue={diceValue}
          randomNumber={randomNumber}
        />
        <div className='flex justify-center pt-40'>
        <button className='restButton' onClick={resetScore}>reset</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GameSection;
