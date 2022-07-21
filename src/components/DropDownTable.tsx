import React from 'react';
import {DropDownTableProps} from '../models/models';
const _ = require('lodash')



const DropDownTable: React.FC<DropDownTableProps> = ({index, data}) => {

const isScoreInRange = () => {
  const rangeOfNumbers = data.label.split('').filter((item) => !isNaN(parseInt(item)))
  const started = rangeOfNumbers.shift()
  return _.inRange(data?.score, started,Number(rangeOfNumbers.join('')))
}

const speedColourTableDrop = () => {
  const expSpeed = data.expSpeed.replace(/\D+/g, '')
  const speed = typeof data?.speed === 'string' ? data?.speed.replace(/\D+/g, '') : 0
  return expSpeed > speed
}

  return (
    <tr>
      <td className="py-[5px] pl-[10px]">{index + 1}</td>
      <td className="py-[5px] pl-[10px]">{data.label}</td>
      <td className={isScoreInRange() ? "py-[5px] pl-[10px] text-speed-above" : "py-[5px] pl-[10px] text-speed-bad"}>{data.score ? data.score : 'NIL'}</td>
      <td className={speedColourTableDrop() ? "py-[5px] pl-[10px] text-speed-bad" : "py-[5px] pl-[10px] text-speed-above"}>{data.speed ? data.speed : 'NIL'}</td>
      <td className="py-[5px] pl-[10px]">{data.total}</td>
      <td className="py-[5px] pl-[10px]">{data.expSpeed}</td>
      <td className="py-[5px] pl-[10px]">{data.concept}</td>
      <td className="py-[5px] pl-[10px]">{data.date}</td>
      <th className="py-[5px] pl-[10px]"><input type="checkbox" className="bg-export-csv"/></th>
    </tr>
  );
};

export default DropDownTable;
