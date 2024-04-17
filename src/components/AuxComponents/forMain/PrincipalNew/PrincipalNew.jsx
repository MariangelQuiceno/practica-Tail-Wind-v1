import React from 'react'
import img from '../../../../assets/ImagenesNews/orca.jpg'

export const PrincipalNew = ({ }) => {
  return (
    <div className='principalNews rounded-lg bg-slate-400 w-11/12 mr-2 p-10' style={{ height: '52rem' }}>
        <h1 className='title-principal-new text-4xl '>hhhhhhhhh</h1>
        <p className='paragraph-principal-new mt-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porttitor libero. Donec luctus nisl a enim volutpat, at rutrum libero ullamcorper. Integer eu justo in nulla ullamcorper fringilla. Fusce id magna vel elit feugiat lacinia. Morbi ultrices, metus et ultricies congue, ex velit varius mi, eget varius odio augue id lorem. Proin euismod eros justo, at condimentum libero rhoncus vitae. Aenean lobortis eleife
        </p>
        <div className='compilater-principal-new flex'>
        <img src={img} alt='Orca' className='img-principal-new mt-10 rounded-lg flex justify-center  ' />
        <div className='TechnicalDesc-principal-new flex-col mt-10  '>
         <ul className=''>
          <li> <p>Fecha: 2024-04-16  </p> </li>
          <li><p>Fuente: Journal of Marine Biology </p></li>
          <li><p>Enlace: https://example.com/noticia1 </p></li>
          </ul>
        </div>
        </div>
        <hr className='separate-principal mt-3 border-slate-950'/>

    </div>
    
  )
}
