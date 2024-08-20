// import React from 'react';
import './Spinner.css'; 

export const Spinner: React.FC = () => {
  return (
/* From Uiverse.io by abrahamcalsin */ 
<div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20'><div className="dot-spinner">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div></div>

  );
};