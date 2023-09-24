import React from 'react';
import './topbox.css';

const TopBox = ({ img, title, price }) => {
  return (
    <div className="top-box">
      <div className="flex flex-col lg:flex-row rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="w-full lg:w-2/5 h-48 lg:h-auto">
          <img className="rounded-sm w-full h-full object-cover" src={img} alt={title} />
        </div>
        <div className="p-4 lg:p-6 w-full lg:w-3/5 box-text">
          <h5 className="mb-2 text-xl lg:text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 hover:text-cyan-800 transition-all cursor-pointer">
            {title}
          </h5>
          <span className="mb-2 text-sm lg:text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBox;
