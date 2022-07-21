import React, {useEffect, useState} from 'react';
import UserDropData from './userDropData';
import useActions from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {SCORE, SCORE_MAP, SPEED_COLOURS_MAP} from '../data/data';
import {GenerateTableDataProps} from '../models/models';

const _ = require('lodash');


const GenerateTableData: React.FC<GenerateTableDataProps> = ({student, index}) => {
  const [checkedBox, setCheckedBox] = useState<boolean>(false);

  const {name, id, parents, score, speed, tests} = student;
  const {studentData} = useTypedSelector(state => state);

  const {addStudent, removeStudent} = useActions();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);


  const scoreColour = () => {
    const numbers = Object.keys(SCORE);
    const number = _.findLast(numbers, (n) => {
      return n < score;
    });
    return SCORE[number];
  };



  useEffect(() => {
    const addRemoveStudent = () => {
      if (checkedBox) {
        addStudent(student);
      } else {
        removeStudent(student.id);
      }
    };
    addRemoveStudent();
  }, [checkedBox]);


  const Parents = () => {
    return parents.map((parent: any) => parent).join(', ');
  };

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <>
      <tr onClick={handleDropDown} className={index % 2 == 0 ? 'h-[48px]' : 'h-[48px] bg-gray-50 shadow'}>
        <th scope="col" className="">
          <input id="checkbox-all-search" type="checkbox" onClick={(e) => {
            e.stopPropagation();
            setCheckedBox(!checkedBox);
          }}/>
        </th>
        <td className="w-[200px]" id="name">
          <p className="text-left ">{name}</p>
        </td>
        <td className="w-[96px] pl-[20px]">
          <p className="">{id}</p>
        </td>
        <td className="w-[100px] pl-[20px] text-center">
          <p className="">{student.class}</p>
        </td>
        <td className="w-[100px] text-left pl-[24px]">
          <p className={SCORE_MAP[scoreColour()]}>{score}</p>
        </td>
        <td className="w-[100px] pl-[28px]">
          <p className={SPEED_COLOURS_MAP[speed]}>{speed}</p>
        </td>
        <td className="pl-[28px]">
          <p className="block w-[76px]">{Parents()}</p>
        </td>
        {studentData.length > 0 ? (<>
          <td><span className="h-[32px] w-[32px] bg-drop-data inline-block items-center justify-center flex"><img
            className="h-[12px] w-[12px]" src="pen.png"/></span></td>
          <td><span className="h-[32px] w-[32px] bg-drop-data inline-block items-center justify-center flex"><img
            className="h-[8px] w-[13px]" src="rize.png"/></span></td>
        </>) : (<>
          <td></td>
          <td></td>
        </>)}
        <td colSpan={studentData.length < 0 ? 3 : 1}>
          <img src="arrow-down-table.png"/>
        </td>
      </tr>
      {showDropDown ?
        (
          <tr className="w-full">
            <td colSpan={10}>
              <UserDropData tests={tests} name={name} id={id}/>
            </td>
          </tr>
        )
        :
        (<></>)
      }
    </>
  );
};

export default GenerateTableData;
