// CardList.js

import React from 'react';

function CardList({ data }) {
  return (
    <div className='w-4/5 grid grid-cols-3 gap-4 m-auto  bg-violet-300 grid-box '>
      {data.map((item, index) => (
        <div className="flex card  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
          {item.image} 
          <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center'>{item.title}</h3>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-center pl-5 pr-5'>{item.description}</p>
        </div>
        
      ))}
    </div>
  );
}

export default CardList;

