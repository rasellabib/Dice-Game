import React from 'react';
import './DiceGame.css'; // Make sure to create this CSS file
import DiceStyle from '../DiceComponent/DiceStyle';

import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};



const DiceGame = ({toggleAction}) => {
    return (
        <AnimatedContent
  distance={90}
  direction="horizontal"
  reverse={true}
  duration={1}
  ease="bounce.out"
  initialOpacity={1}
  animateOpacity
  scale={1}
  threshold={0.2}
  delay={0.3}
  overflow="hidden"
>
<div className="w-full h-screen bg-[#b3d0de] flex  justify-center gap-2  items-center ">
            <div className='w-full lg:w-[50%] md:w-[50%]'>
                
          <div>
          <SplitText
  text="Dice Game"
  className="text-[80px] font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
          </div>
           <button onClick={toggleAction}  className='ms-10'>
    P L A Y
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button>
           </div>
            <div className="w-full lg:w-[50%] md:w-[50%] ps-40">
            <div class="loaderViewPort">
  <div class="loader">
    <div class="side front">
      <div class="dot"></div>
    </div>
    <div class="side back">
      <div class="dotContainer">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="side left">
      <div class="dotContainer">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="side right">
      <div class="dotContainer">
        <div class="subDotContainer">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="subDotContainer">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div class="side top">
      <div class="dotContainer">
        <div class="subDotContainer">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="subDotContainer">
          <div class="dot"></div>
        </div>
        <div class="subDotContainer">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div class="side bottom">
      <div class="dotContainer">
        <div class="subDotContainer">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="subDotContainer">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="subDotContainer">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
           
        </div>
</AnimatedContent>
        
    );
};

export default DiceGame;
