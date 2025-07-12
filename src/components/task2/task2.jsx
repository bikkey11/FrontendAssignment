import React from 'react';
import Image1 from "../../assets/21.png"
import cardData from "./data"


const CardComp = ({ card }) => {

    return (
        <div className='w-[592px] h-[341px] relative text-white rounded-[30px]'
            style={{ backgroundColor: card.color }}
        >
            <div className={`absolute  top-[58px] space-y-8 w-[351px] ${card.Imgposition === "left" ? "left-[206px] text-end" : "left-[35px] text-start"}`}>
                <div className={`space-y-2.5 ${card.Imgposition === "left" ? "text-end" : "text-start"}`}>
                    <h1 className='whitespace-nowrap overflow-visible text-[32px] font-semibold leading-[120%]'>{card.heading}</h1>
                    <p className='whitespace-nowrap overflow-visible text-2xl font-normal font-outfit'>{card.title}</p>
                </div>
                <p className=' text-[18px] font-outfit'>{card.description}</p>

            </div>
            <img src={card.image} alt={card.heading} className={`z-10 absolute animate-bounceUpDown `}
                style={{
                    top: `${card.imgTop}px`,
                    left: `${card.imgLeft}px`,
                    animationDelay:`${card.id*150}ms`
                }}
            />
        </div>
    )


}

const Task2 = () => {

    return (
        <div className=' h-screen items-center flex justify-center w-full'>
            <div className='space-y-12'>
                <div className='h-[92px] flex-col flex justify-between'>
                    <h1 className='text-2xl font-medium'>Your SkillShikshya Journey</h1>
                    <p className='font-bold text-[32px] leading-[120%]'><span className='text-strongText'>Step</span> In. <span className='text-strongText'>Skill</span> Up. <span className='text-strongText'>Stand</span> Out. 🚀</p>
                </div>

                {/* cards */}
                <div className='grid-cols-2 grid gap-x-8 gap-y-9'>
                    {cardData.map((card) => {
                        return (
                            <CardComp key={card.id} card={card} />
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default Task2