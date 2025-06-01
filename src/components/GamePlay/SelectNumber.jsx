import React from 'react';

const SelectNumber = ({selectNumber, setSelectNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    

    return (
        <div>
            <div className='flex gap-4'>
            {
                arrNumber.map((number, index) => {
                    const isSelected = selectNumber === number;
                    return (
                        <div
                            onClick={() => setSelectNumber(number)}
                            key={index}
                            className={`grid w-[70px] h-[70px] border-2 border-black font-[700] text-[24px] place-items-center cursor-pointer rounded
                            ${isSelected ? 'bg-black text-white' : ""}`}
                        >
                            {number}
                        </div>
                    )
                })
            }
        </div>
        <p className='text[24px] font-bold '>Select Your Number</p>
        </div>
    );
}

export default SelectNumber;
