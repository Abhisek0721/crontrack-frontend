// import React from 'react';
import './Spinner.css'; // Keyframes CSS ke liye external CSS file import karni hogi

export const Spinner: React.FC = () => {
  return (
/* From Uiverse.io by abrahamcalsin */ 
<div className="dot-spinner">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div>
  );
};