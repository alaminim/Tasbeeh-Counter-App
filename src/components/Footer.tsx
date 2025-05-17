import { LuTimerReset } from "react-icons/lu";
import { LuCircleMinus } from "react-icons/lu";
import { IoHeartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/updates')
    }
  return (
    <div className='flex space-x-8 justify-center  items-center  text-black h-16'>
      <button className="bg-white rounded p-4 shadow-md text-black "> <LuTimerReset  /></button>
      <button className="bg-white rounded p-4 shadow-md text-black"><LuCircleMinus/> </button>
      <button className="bg-white rounded p-4 shadow-md text-black hover:bg-green-100" onClick={handleClick}><IoHeartSharp/> </button>
    </div>
  )
}

export default Footer
