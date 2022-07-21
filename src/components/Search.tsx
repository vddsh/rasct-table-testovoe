import React, {useEffect, useState} from 'react';
import useDebounce from '../hooks/Debounce';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {CSVLink} from 'react-csv';
import {SearchPropsTypes} from '../models/models';


const Search: React.FC<SearchPropsTypes> = ({setSearch, data}) => {
  const {studentData} = useTypedSelector(state => state);

  const [searchName, setSearchName] = useState<string>('');
  const debounced = useDebounce(searchName);


  useEffect(() => {
    setSearch(debounced);
  }, [debounced]);

  const handleSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  return (
    <>
      {studentData.length === 0 ? (
        <div className="h-[48px]">
          <div className="flex justify-between h-full items-center">
            <img className="w-[135px] h-[24px] my-[12px] ml-10" src="./Students.png"/>
            <div className="py-[8px]">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-[599px]">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                  </svg>
                </div>
                <input type="text" id="simple-search"
                       onChange={handleSearchName}
                       value={searchName}
                       className="bg-input-bg border border-input-bg text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                       placeholder="Enter Student Name, Parent or ID here" required/>
              </div>
            </div>
            <CSVLink className="w-[98px] h-[17px] mr-[173px] cursor-pointer flex " data={data?.data || []}>
              <img className="h-[11px] w-[9px] mr-[9px] mt-[3px]" src="./export-csv.png"/>
              <span className="text-export-csv font-bold text-[12px]">EXPORT CSV</span>
            </CSVLink>
          </div>
        </div>
      ) : (
        <div className="h-[48px] f-full">
          <div className="px-[40px] py-[12px] flex justify-between h-full items-center bg-new-gray">
            <div>
              <p className='font-bold text-white'>{studentData.length} {String(studentData.length).endsWith('1') ? 'STUDENT SELECTED' : 'STUDENTS SELECTED'}</p>
            </div>
            <div className="flex">
              <div className='flex pr-[19px]'>
                <img className='h-3 w-3 m-auto' src='./cancel.png'/>
                <p className='font-bold text-white pl-[6px]'>CANCEL SELECTION</p>
              </div>
              <div className='flex pr-[19px]'>
                <img className='h-3 w-3 m-auto' src='./export-csv.png'/>
                <CSVLink className="font-bold text-white pl-[6px]" data={studentData}>EXPORT CSV</CSVLink>
              </div>
              <div className='flex'>
                <img className='h-3 w-3 m-auto' src='./archive.png'/>
                <p className="font-bold pl-[6px]">ARCHIVE SELECTED</p>
              </div>

            </div>
          </div>
        </div>)
      }
    </>
  );
};

export default Search;
