import React from 'react';

export const Header = ({ children }) => {
  return (
    <header className='w-full  bg-cerulean flex justify-center items-center h-20 font-semibold '>
        {children}
    </header>
  );
};
