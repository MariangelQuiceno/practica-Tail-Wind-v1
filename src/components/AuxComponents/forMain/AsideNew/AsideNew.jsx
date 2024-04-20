import React, { useContext } from 'react';
import { newsContext } from '../../../Context/Context';

export const AsideNew = () => {
  const { news } = useContext(newsContext);

  // Obtener todos los elementos a partir del segundo (índice 1 en adelante)
  const newsWithoutFirst = news.slice(1);

  return (
    <div
      className='asideNews bg-penn-blue bg-opacity-85 w-5/12 rounded-lg flex flex-col items-center justify-center p-2'
      style={{ maxHeight: '52rem', overflowY: 'auto' }}
    >
      {newsWithoutFirst.map((oceanNew) => (
        <div key={oceanNew.id} className='id-new'>
          <img src={oceanNew.image} alt='Image Not Found 404' className='img-aside-new w-35 h-36 self-center' />

          <div className='organizer-aside flex flex-col items-center justify-center'>
            <a href='#'><h1 className='title-aside-new text-sm font-bold'>{oceanNew.title}</h1></a>
            <p className='paragraph-aside-new text-sm overflow-hidden line-clamp-3'>
              {oceanNew.summary}
            </p>
          </div>
          <hr className='separate-aside border-1 w-full mt-2 border-white' />
        </div>
      ))}
    </div>
  );
};
