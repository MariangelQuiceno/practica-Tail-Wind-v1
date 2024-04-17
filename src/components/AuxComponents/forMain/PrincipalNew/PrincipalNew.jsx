import React from 'react'
import img from '../../../../News/ImagenesNews/orca.jpg'

export const PrincipalNew = ({ }) => {
  return (
    <div className='principalNews rounded-lg bg-slate-400 w-11/12 mr-2 p-10' style={{ height: '52rem' }}>
        <h1 className='title-principal-new text-4xl '>hhhhhhhhh</h1>
        <p className='paragraph-principal-new mt-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porttitor libero. Donec luctus nisl a enim volutpat, at rutrum libero ullamcorper. Integer eu justo in nulla ullamcorper fringilla. Fusce id magna vel elit feugiat lacinia. Morbi ultrices, metus et ultricies congue, ex velit varius mi, eget varius odio augue id lorem. Proin euismod eros justo, at condimentum libero rhoncus vitae. Aenean lobortis eleife
        </p>
        <img src={img} alt='Orca' className='img-principal-new mt-10 rounded-lg flex justify-center  ' />
        <hr className='separate-principal mt-3 border-slate-950'/>
    </div>
    
  )
}
