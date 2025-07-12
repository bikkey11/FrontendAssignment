import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-20'>Click on the link to go to task demo</h1>
            <div className=' items-center justify-center w-full h-screen flex flex-col gap-4 text-4xl'>
                <Link to="/task1" className='text-blue-400   hover:underline hover:text-blue-600'>Task1</Link>
                <Link to="/task2" className='text-blue-400 hover:underline hover:text-blue-600 '>Task2</Link>
                <Link to="/task4" className='text-blue-400  hover:underline hover:text-blue-600 '>Task4</Link>


            </div>
        </div>
    )
}

export default Home