import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import tasbeeh from './../assets/imgs/counterImg.png';
import homeBG from './../assets/imgs/homeBG.png';

const Landing: React.FC = () => {
  const navigate = useNavigate();
 const counterPage = () => {
  navigate('/components');
 }

  return (
    <div className="relative h-screen  overflow-hidden lg:w-1/3 sm:w-full mx-auto ">
    {/* 1. Background Layer */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${homeBG})` }}
    />

    {/* 2. Semi-Transparent Overlay */}
    <div className="absolute inset-0 bg-black/60" />

    {/* 3. Foreground Content Layer */}
    <div className="relative z-10 flex flex-col justify-between h-full px-6 py-10 text-white my-auto">
      {/* Logo (top) */}
      <div className="flex justify-center">
        <img src={tasbeeh} alt="Tasbeeh" className="w-48" />
      </div>

       {/* Centered Content */}
       <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-white text-center">
        <h1 className="text-3xl md:text-3xl font-semibold leading-tight">
          Count your Tasbeeh <br />
          Digitally with Ease and <br />
          earn reward
        </h1>
        <p className="mt-3 text-sm md:text-base max-w-md">
          With Just a Tap, You can Count <br />
          your Tasbeeh as much as possible
        </p>
      </div>
          {/* 4. Button */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 w-full px-6">
        <button className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full shadow hover:bg-gray-200 transition"
                 onClick={counterPage}>
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    
    </div>
    
  </div>
);
};

export default Landing;
