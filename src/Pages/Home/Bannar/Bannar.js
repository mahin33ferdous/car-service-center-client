import React from 'react';
import img3 from "../../../img/img3.jpg"
import img2 from "../../../img/im2.jpg"
import img1 from "../../../img/img1.jpg"
import'./Banner.css'
import BannerItems from './BannerItems';

const Bannar = () => {

    const bannerData=[
        {
            image:img3,
            id:1,
            pre:3,
            next:2
        },
        {
            image:img2,
            id:2,
            pre:1,
            next:3
        },
        {
            image:img1,
            id:3,
            pre:2,
            next:1
        },
    ]
    return (
        <div className="carousel w-full">

            {
                bannerData.map(slide=><BannerItems
                key={slide.id}
                slide={slide}
                
                >

                </BannerItems>)
            }
         {/* <BannerItems image={img3}></BannerItems>
         <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>  */}
    
 
</div>
    );
};

export default Bannar;