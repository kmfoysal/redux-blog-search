import React from 'react';

const NavBar = () => {
    return (
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
          <a href="index.html" className='flex content-center items-center'>
            <img
              className="h-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/62801232?s=400&u=ffd43d7cbed1daeb7254c0aea9ce9b60bafa0064&v=4"
              alt="Learn with Sumit"
            />
            <span className='ml-4 font-bold'>Learn Redux</span>
          </a>
        </div>
      </nav>
    );
};

export default NavBar;