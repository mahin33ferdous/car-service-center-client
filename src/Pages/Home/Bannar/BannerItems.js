import React from 'react';

const BannerItems = ({slide}) => {

    const {image,id,pre,next}=slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
  
        <img src={image} alt='' className="w-full" />
        
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white ">
             Affordable <br/>
             price for car
          </h1>
         
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-1/2 ">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
         
        </div>
        
        
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${pre}`} className="btn btn-circle">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div> 
    );
};

export default BannerItems;