import React from 'react';

const Cover = ({img,title,text}) => {
    return (
        <div>
            <div className="hero h-[600px]" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">{text}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cover;