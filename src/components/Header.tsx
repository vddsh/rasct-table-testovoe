import React, {useState} from 'react';

const Header = () => {
  const [focusedCategory, setFocusedCategody] = useState<string>("STUDENTS");

  const handleFocusElement = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    setFocusedCategody(element.id);
  };

  return (
    <header className="w-full h-[60px]">
      <div className="px-10 py-[14px] m-auto">
        <div className="w-full h-[32px] flex">
          <img className="w-[161px]" src="./logo.png"/>
          <div className="container flex items-center">
            <div className="pl-9 flex items-center">
              <p className="inline-block cursor-pointer whitespace-nowrap">SCHOOL 1</p>
              <img className="block h-[5px] w-[10px] ml-3  cursor-pointer" src="Arrowdown.png"/></div>
            <nav className="ml-[94px]">
              <ul className="flex">
                <li onClick={handleFocusElement} id="ANALYTICS"
                    className={focusedCategory === 'ANALYTICS' ? 'px-5 py-[6px] cursor-pointer font-bold bg-btn-red text-white' : 'px-5 py-[6px] cursor-pointer'}>ANALYTICS
                </li>
                <li onClick={handleFocusElement} id="GRADEBOOKS"
                    className={focusedCategory === 'GRADEBOOKS' ? 'px-5 py-[6px] cursor-pointer font-bold bg-btn-red text-white' : 'px-5 py-[6px] cursor-pointer'}>GRADEBOOKS
                </li>
                <li onClick={handleFocusElement} id="TESTS"
                    className={focusedCategory === 'TESTS' ? 'px-5 py-[6px] cursor-pointer font-bold bg-btn-red text-white' : 'px-5 py-[6px] cursor-pointer'}>TESTS
                </li>
                <li onClick={handleFocusElement} id="STUDENTS"
                    className={focusedCategory === 'STUDENTS' ? 'px-5 py-[6px] cursor-pointer font-bold bg-btn-red text-white' : 'px-5 py-[6px] cursor-pointer'}>STUDENTS
                </li>
                <li onClick={handleFocusElement} id="TEACHERS"
                    className={focusedCategory === 'TEACHERS' ? 'px-5 py-[6px] cursor-pointer font-bold bg-btn-red text-white' : 'px-5 py-[6px] cursor-pointer'}>TEACHERS
                </li>
                <li onClick={handleFocusElement} id="ARCHIVE"
                    className={focusedCategory === 'ARCHIVE' ? 'px-5 py-[6px] cursor-pointer font-bold bg-btn-red text-white' : 'px-5 py-[6px] cursor-pointer'}>ARCHIVE
                </li>
              </ul>
            </nav>
            <div className="flex justify-end container items-center">
              <img className="" src="chelik.png"/>
              <img className="block h-[5px] w-[10px] ml-3  cursor-pointer" src="Arrowdown.png"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
