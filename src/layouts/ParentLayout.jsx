import React from 'react';
import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/parent/Sidebar';
// import Header from '../components/common/Header';

const ParentLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header /> */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ParentLayout; 