
const RoleSection = ({randomNumber, diceValue}) => {
   

    
    const roleDiceImage = `./dice_${diceValue}.png`;
    
  return (
    <div>
        <div className=' flex flex-col  justify-center items-center'>
            <div className='' onClick={randomNumber}>
                <img src={roleDiceImage} alt="dice" />
            </div>
            <p>Click To Roll</p>
        </div>
    </div>
  )
}

export default RoleSection