import bgimage from "../assets/images/bgimage.jpg";

import {useNavigate} from 'react-router-dom';

function Failed(){
    const navigate=useNavigate();

    return(
        <div className='relative min-h-screen w-full text-white font-sans'>
           {/*Bckgnd img*/} 
           <img src={bgimage} alt="background" className='absolute top-0 left-0 w-full h-full object-cover z-0'/>

           {/*Dark overlay*/}
           <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10'></div>

           {/*Content*/}
           <div className='relative z-20 flex flex-col justify-center items-center h-screen text-center space-y-6 p-4'>
            <h1 className='text-4xl font-bold text-red-600 animate-pulse'>Login Failed</h1>
            <p className='text-lg text-white'>Your username or password is incorrect.</p>
            <button onClick={()=>navigate("/")}className='px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold'>Try Again</button>
           </div>
        </div>
    )
}
export default Failed;