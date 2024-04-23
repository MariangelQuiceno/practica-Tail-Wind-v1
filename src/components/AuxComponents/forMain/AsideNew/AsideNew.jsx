import React, { useContext } from 'react';
import { newsContext } from '../../../Context/Context';

export const AsideNew = () => {
  const { news } = useContext(newsContext);

 
  const newsWithoutFirst = news.slice(1);

  return (
    <div
      className='asideNews bg-penn-blue bg-opacity-85 w-5/12 rounded-lg flex flex-col items-center justify-center p-2'
      style={{ maxHeight: '52rem', overflowY: 'auto' }}
    >
      {newsWithoutFirst.map((oceanNew) => (
        <div key={oceanNew.id} className='id-new flex flex-col justify-evenly'>
          <img src={oceanNew.image} alt='Image Not Found 404' className='img-aside-new flex self-center mt-5' style={{ height: '15rem', width: '20rem' }}  />

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
