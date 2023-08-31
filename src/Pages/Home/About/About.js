import React from 'react';
import about from "../../../img/about.webp"
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2'>
    <img src={about} className=" rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
        <p className='text-2xl font-semibold text-orange-700'>About us</p>
      <h1 className="text-5xl font-bold">
        Box Office News!<br/>
        Box Office News!<br/>
        Box Office News!<br/>
        </h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6">Provident cupiditate voluptatem et in.  In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get More info</button>
    </div>
    </div>
</div>
    );
};

export default About;