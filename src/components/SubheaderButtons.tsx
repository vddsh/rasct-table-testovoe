import React from 'react';

const SubhewaderButtons = ({name}: {name:string}) => {
  return (
      <div className='flex py-[6px] px-[12px] cursor-pointer'>
        <p className='text-[12px] pt-[7.5px] pl-[12px] text-new-gray'>{name}</p>
        <img className='m-auto ml-[10px] pt-[4px]' src='./Subheader-down.png'/>
      </div>
  );
};

export default SubhewaderButtons;
