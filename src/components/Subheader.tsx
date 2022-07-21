import React from 'react';
import SubheaderButtons from './SubheaderButtons';

const SUBHEADER_LIST = ['SHOW ALL', 'ALL GRADES', 'ALL CLASSES', 'AV.SCORE', 'AV.SPEED', 'ALL CLASSES']

const Subheader = () => {
  return (
    <div className='bg-gray-dark h-[40px] w-full'>
      <div className='flex container justify-center'>
      {SUBHEADER_LIST.map((element, index) => <SubheaderButtons key={index} name={element}/>)}
        <div className='flex py-[6px] px-[12px] cursor-pointer'>
          <img className='m-auto ml-[10px] pt-[4px]' src='./Subheader-clear.png'/>
          <p className='text-[12px] pt-[7.5px] pl-[12px] text-new-gray'>CLEAR ALL</p>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
