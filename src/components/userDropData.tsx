import React, {FC} from 'react';
import DropDownTable from './DropDownTable';


interface UserDropProps {
  tests: any;
  name: string;
  id: number;
}

const UserDropData: React.FC<UserDropProps> = ({tests, name, id}) => {

  const getAvg = () => {
    const totalScore: number | string = tests.reduce((a, b) => a.score + b.score) / tests.length;
    return totalScore;
  };

  return (
    <div className="h-[422px] bg-drop-data w-full">
      <div className="px-[60px] py-[20px]">
        <div className="pb-[13px]">
          <h2>STUDENT: <span className="font-bold">{name.toUpperCase()}</span> ID: <span
            className="font-bold">{id}</span></h2>
        </div>
        <div className='flex'>
          <button
            className="flex h-[32px] w-[154px] bg-white border-gray-400 border-[1px] mr-[16px] font-bold pr-[10px] justify-center items-center">
            <span className='font-bold mr-[10px]'>ALL CONCEPTS</span>
            <img src="./Arrowdown.png"/>
          </button>
          <button
            className="flex h-[32px] w-[136px] bg-white border-gray-400 border-[1px] mr-[16px] font-bold mr-[16px]pr-[10px] justify-center items-center">
            <span className='font-bold mr-[10px]'>ALL SCORE</span><img src="./Arrowdown.png"/>
          </button>
          <button
            className="flex h-[32px] w-[136px] bg-white border-gray-400 border-[1px] mr-[16px] font-bold mr-[16px]pr-[10px] justify-center items-center">
            <span className='font-bold mr-[10px]'>ALL SPEED</span>
            <img src="./Arrowdown.png"/>
          </button>
          <input type="date"/>
        </div>
        <hr className="bg-hr mt-[13px] h-[2px] w-[1102px]"/>
        <div className="flex pt-[12px]">
          <p className="text-[12px] pr-[24px]">SCORE</p>
          <p className="text-[12px] pr-[24px] text-speed-above">&#9679; 90%+ACCURACY</p>
          <p className="text-[12px] pr-[24px] text-speed-expected">&#9679; 80-90%+ACCURACY</p>
          <p className="text-[12px] pr-[24px] text-speed-yellow">&#9679; 50-79%+ACCURACY</p>
          <p className="text-[12px] pr-[24px] text-speed-bad">&#9679; BELOW 50% ACCURACY</p>
        </div>
        <div className="flex">
          <p className="text-[12px] pr-[24px]">SPEED</p>
          <p className="text-[12px] pr-[24px] text-speed-expected">&#9679; ABOVE EXPECTED</p>
          <p className="text-[12px] pr-[24px] text-speed-yellow">&#9679; AS EXPECTED</p>
          <p className="text-[12px] pr-[24px] text-speed-bad">&#9679; BELOW EXPECTED</p>
        </div>
        <div>
          <table>
            <thead>
            <tr>
              <th className="py-[15px] pl-[10px]">#</th>
              <th className="py-[15px] pl-[10px]  w-[236px] flex">Test Label</th>
              <th className="py-[15px] pl-[10px]">Score</th>
              <th className="py-[15px] pl-[10px]">Speed</th>
              <th className="py-[15px] pl-[10px]">Total Q-ns</th>
              <th className="py-[15px] pl-[10px]">Exp.Speed</th>
              <th className="py-[15px] pl-[10px]">Concept</th>
              <th className="py-[15px] pl-[10px]">Date</th>
              <th className="py-[15px] pl-[10px]">Absent</th>
            </tr>
            </thead>
            <tbody>
            {tests.map((data, index) => (<DropDownTable key={index} index={index} data={data}/>
            ))}
            </tbody>
          </table>
        </div>
        <hr className="bg-hr mt-[13px] h-[3px] w-[1102px]"/>
        <div className="pt-[20px] flex">
          <p className="pr-[225px] font-bold">AVARAGE</p><p className="font-bold">{getAvg()}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDropData;
