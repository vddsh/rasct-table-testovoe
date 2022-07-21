import React from 'react';
import Table from './components/Table';
import Header from './components/Header';
import Subheader from './components/Subheader';


const App: React.FC = () => {

  return (
    <div className='w-[1440px] m-auto'>
      <Header/>
      <Subheader/>
      <Table/>
    </div>
  );
};

export default App;
