import React, { useContext } from 'react';
import { newsContext } from '../../../Context/Context';

export const PrincipalNew = () => {
  const { news } = useContext(newsContext);

  // Obtener el primer elemento del arreglo, asegurándose de que haya al menos un elemento
  const firstNews = news[0]; // También puedes usar news.slice(0, 1)[0]

  return (
    <div
      className='principalNews rounded-lg bg-md-blue bg-opacity-85 w-11/12 mr-2 p-10 '
      style={{ height: '52rem' }}
    >
      {firstNews ? (
        <div key={firstNews.id} className='id-new'>
          <a href="#"><h1 className='title-principal-new text-4xl'>{firstNews.title}</h1></a>
          <p className='paragraph-aside-new text-sm overflow-hidden line-clamp-3'>
            {firstNews.summary}
          </p>
          
          <img src={firstNews.image} alt='Image Not Found 404' style={{ height: '35rem', width: '60rem' }} 
          className='img-principal-new mt-5 ml-20'  />

          <div className='TechnicalDesc-principal-new flex-col mt-10'>
            <ul className='list-principal-New'>
              <li><p>{firstNews.date}</p></li>
              <li><p>{firstNews.source}</p></li>
              <li><p><a href={firstNews.link}>{firstNews.link}</a></p></li>
            </ul>
          </div>
        </div>
      ) : (
        <p>No news available</p>
      )}

      <hr className='separate-principal mt-3 border-white' />
    </div>
  );
};
