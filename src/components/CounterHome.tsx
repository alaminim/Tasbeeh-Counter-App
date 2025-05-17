import { useState } from 'react';
import MosqueBg from './../../src/assets/imgs/MosqueBG.png';
import { ArrowLeft} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Counter from './Counter';
import Footer from './Footer';
import ZikrOptions from './ZikrOptions';



const CounterHome = () => {    
  const [count, setCount] = useState(0);
  const navigate = useNavigate();    
  

  const handleClick = () => {
    navigate('/')
      }

  const handleReset = () => {
     setCount(0);
  }
     
  return (
    <div className="relative h-screen  overflow-hidden lg:w-1/3 sm:w-full mx-auto ">
    {/* 1. Background Layer */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${MosqueBg})` }}
    />

    {/* 2. Semi-Transparent Overlay */}
    <div className="absolute inset-0 bg-black/60" />

    {/* 3. Foreground Content Layer */}
    <div className="relative z-10 flex flex-col justify-between h-full px-6 py-10 text-white mb-6">
      {/* Logo (top) */}
      <div className="top-0 fixed flex itm">
      <img src={MosqueBg} alt="icons" className='bg-amber-50 p-2 fixed w-8 h-8 top-4 right-4  rounded'/>
      <p className="fixed top-4 left-32 mx-auto text-center text-white font-bold ">بسم الله الرحمن الحيم</p>
      <button className='fixed top-4 left-4 bg-white text-green-900 hover:text-green-950 rounded-2xl p-2 mb-6'
              onClick={handleClick}
      >
         <ArrowLeft/> 
         </button>
         </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 z-30 w-full px-6">
           <div>
          <ZikrOptions/>
    </div>
        
        
      </div>
       {/* Centered Content */}
       <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-white text-center mt-66">
           {/* 4. Button */}
       
        <div className='border-5 border-amber-800 rounded-full'>
         <Counter onClick={() => setCount((count) => count + 1)}> {count}</Counter>
     </div>
       <button className="rounded-2xl bg-white m-4 p-2 text-black" onClick={handleReset}>Reset</button>
      </div>
      <Footer/>
    </div>
    
  </div>
  )
}

export default CounterHome
