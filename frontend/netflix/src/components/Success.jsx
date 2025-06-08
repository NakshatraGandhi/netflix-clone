import bgimage from "../assets/images/bgimage.jpg";

function Success(){
    return(
        <div className='relative min-h-screen w-full text-white font-sans overflow-y-auto'>
            {/*Bckgnd img*/}
             <img src={bgimage} alt="background" className='absolute top-0 left-0 w-full h-full object-cover z-0'/>

            {/*Overlay*/}
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10'></div>

            {/*Content*/}
             <div className='relative z-20 flex flex-col justify-center items-center min-h-screen p-8 text-center space-y-8'>
                <h1 className='text-5xl font-extrabold text-red-600 mt-20 drop-shadow-lg'>Welcome to Netflix</h1>
                <p className='text-xl font-medium text-white max-w-md drop-shadow'>You are successfully logged in.Enjoy your favourite shows and movies anytime.</p>
                <button className='px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded text-lg font-semibold shadow-lg'>Start Watching</button>

                {/*Extra Scroll Content*/}
                <div className='mt-32 max-w-3xl'>
                    <h2 className='text-2xl font-bold mb-4 text-white'>Top Picks for You</h2>
                    <p className='text-white  mb-20'>Explore trending shows,movies and Netflix Originals curated just for you.Scroll down to discover more!</p>
                </div>
             </div>

        </div>
    )
}
export default Success;