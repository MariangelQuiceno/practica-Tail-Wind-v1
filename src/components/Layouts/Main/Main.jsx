import React from 'react'

export const Main = ({children}) => {
  return (
    <main className='
    home w-full text-white flex 
    justify-between flex-col mt-2 h-fit '>
        {children}
    </main>
  )
}
