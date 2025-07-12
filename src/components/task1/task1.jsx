import React, { useState } from 'react';
import data from "./data"
import icon from "../../assets/Icon.png"
import images from './data';


const Task1 = () => {
    const [isHoverd, setIsHovered] = useState(false);
    const [isBouncing, setIsBouncing] = useState(false);
    const [updownBounce, setupDownBounce] = useState(false)

    const triggerBounce = () => {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 1000)
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex items-center justify-center h-screen'
                onMouseEnter={() => {
                    setIsHovered(true)
                    triggerBounce()
                    setupDownBounce(true)
                }}
                onMouseLeave={() => {
                    setIsHovered(false)
                    triggerBounce()
                    setupDownBounce(false)
                }}
            >
                <div
                    className={`relative  rounded-full overflow-hidden  flex items-center justify-center ${isHoverd ? "w-[1214px] h-[697px]" : "w-[650px] h-[341px]"} transition-all duration-600 ease-in-out`}

                >
                    {/* Images in the annular space */}
                    {data.map((image) => {
                        const top = isHoverd ? image.top * 2.04 : image.top
                        const left = isHoverd ? image.left * 1.92 : image.left

                        return (
                            <img src={image.src} alt={image.alt} key={image.id}
                                className={` absolute w-[96px] h-[97px] rounded-[32px] z-30 mix-blend-multiply transition-all duration-600 ease-in-out 
                                ${updownBounce && (image.id === 1 || image.id === 5 || image.id === 7) ? "animate-bounceUpDown" : ""} 
                                 ${updownBounce && (image.id === 3 || image.id === 4 || image.id === 9) ? "animate-bounceDownUp" : ""} 
                                ${isBouncing ? "animate-shakyBounce" : ""}`}
                                style={{
                                    top: `${top}px`,
                                    left: `${left}px`
                                }}

                            />

                        )
                    })}



                </div>
                <div className={`absolute w-[399px] h-[131px] rounded-full  z-10 ml-16 mt-4`}

                >
                    <div className=' z-20 text-center space-y-5'>
                        <p className='text-2xl font-normal '>Hear How They Level Up Their Game!</p>
                        <p className='text-[32px] font-bold leading-[100%]'>Skill <span className='text-strongText'>Masters</span> Unite! 🤝</p>
                        <p className='font-semibold text-lg'>View all Testimonia
                            <button className='ml-2'>
                                <img src={icon} alt="Icon" />
                            </button>
                        </p>
                    </div>
                </div>
                {/* Centered text */}
            </div>
        </div>

    );
    //   1241 and 697 when hovered
}

export default Task1 