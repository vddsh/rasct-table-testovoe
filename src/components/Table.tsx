import React, {useEffect, useState} from 'react';
import {useGetAllStudentsQuery} from '../store/Students/students.api';
import Search from './Search';
import GenerateTableData from './GenerateTableData';
import {useTypedSelector} from '../hooks/useTypedSelector';

const Table: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [sortDir, setSortDir] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);

  const {studentData} = useTypedSelector(state => state);

  const {data, isLoading} = useGetAllStudentsQuery({
    size,
    page,
    sortBy,
    sortDir,
    search,
  }, {});

  useEffect(() => {
    const currentPageObserver = () => {
      if (page > data?.totalPages! || data?.data.length === 0) {
        setPage(1);
      }
    };
    currentPageObserver();
  }, [size, page, data?.data.length]);


  const handleIncreasePage = () => {
    setPage(Math.min(data?.totalPages!, page + 1));
  };
  const handleDecreasePage = () => {
    setPage(Math.max(page - 1, 1));
  };

  const handlesize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(Number(e.target.value));
  };

  const checkDir = () => {
    return sortDir! > 0 ? -1 : 1;
  };

  const handleSortBy = (e: React.MouseEvent<HTMLElement>) => {
    const targetValue = e.target as HTMLElement;
    if (targetValue.id === sortBy) {
      setSortDir(checkDir());
      setSortBy(targetValue.id);
    } else {
      setSortDir(1);
      setSortBy(targetValue.id);
    }
  };


  return (
    <div className="h-[706px] shadow-md sm:rounded-lg">
      <Search data={data}
              setSearch={setSearch}
      />
      <div className="h-[514px] overflow-y-auto">
        <table className="w-[1360px] m-auto w-full text-table-head">
          <thead className="h-[48px]">
          <tr>
            <th className="">
              <input id="checkbox-all-search" type="checkbox"
                     className="w-[12px] h-[12px]"/>
            </th>
            <th>
              <div className="flex">
                <p id="name" onClick={handleSortBy} className="block w-[246px] text-left cursor-pointer">Name</p>
                <img src="/az.png" className="h-[13px] w-[13px] p-[5px] box-content cursor-pointer" alt="img"/>
              </div>
            </th>
            <th className="pl-[20px]">
              <div className="flex items-center">
                <p className="block w-[76px] flex cursor-pointer">ID</p>
                <img alt="img" src="/down-top.png" className="h-[12px] w-[6px] p-[5px] box-content cursor-pointer"/>
              </div>
            </th>
            <th className="pl-[20px]">
              <div className="flex items-center">
                <p id="class" onClick={handleSortBy} className="block w-[76px] cursor-pointer">Class</p>
              </div>
            </th>
            <th className="pl-[24px]">
              <div className="flex items-center">
                <p id="score" onClick={handleSortBy} className="block w-[100px] flex cursor-pointer">Av.Score,%</p>
                <img alt="img" src="/down-top.png" className="h-[12px] w-[6px] p-[5px] box-content cursor-pointer"/>
              </div>
            </th>
            <th className="pl-[28px]">
              <div className="flex items-center">
                <p id="speed" onClick={handleSortBy} className="block w-[112px] flex cursor-pointer">Av.Speed,%</p>
                <img alt="img" src="/down-top.png" className="h-[12px] w-[6px] p-[5px] box-content cursor-pointer"/>
              </div>
            </th>
            <th className="pl-[20px]">
              <div className="flex items-center">
                <p className="block w-[76px]">Parents</p>
              </div>
            </th>
            <th className="w-[56px]">{studentData.length > 0 ? (<p>Actions</p>) : ''}</th>
            <th className="w-[60px]"></th>
            <th className="w-[48px]"></th>
          </tr>
          </thead>
          <tbody className="">
          {isLoading ? (<tr>
            <th>Loading</th>
          </tr>) : (data?.data.map((student: any, index: number) =>
            <GenerateTableData index={index} key={student.id} student={student}/>))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-center h-[56px] mx-[16px] text-gray-dark">
        <div className="flex"><p className="m-auto">Rows per page:</p></div>
        <div className="flex mr-[31px] ml-[16px]">
          <select name="count students on page" id="countStudents" value={size}
                  onChange={handlesize}
                  className="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="flex">
          <p
            className="m-auto px-4">{page * size - size == 0 ? 1 : page * size - size}-{page * size} of {data?.totalCount}</p>
          <div className="flex justify-between items-center w-[72px] pl-[24px]">
            <button className="bg-left bg-no-repeat h-[16px] w-[10px]" onClick={handleDecreasePage}><></>
            </button>
            <button className="bg-right bg-no-repeat h-[16px] w-[10px]" onClick={handleIncreasePage}><></>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
