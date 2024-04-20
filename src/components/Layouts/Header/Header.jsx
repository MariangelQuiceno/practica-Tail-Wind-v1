import React from 'react';


export const Header = ({ children }) => {
  return (
    <header className='w-full rounded-lg bg-penn-blue bg-opacity-85
     bg-cover bg-center flex justify-center items-center 
     h-20 font-semibold text-4xl '>
        {children}
    </header>
  );
};
