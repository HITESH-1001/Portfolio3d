import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react';

const Page1Bottom = () => {
    useEffect(() => {
        gsap.to('#banner1 img', {
            rotate: 360,
            duration: 5,
            repeat: -1, // -1 means infinite repeat
            ease: "linear"
        })
    }, []);
    return (
        <div className='absolute left-0 bottom-0 flex items-end justify-between  w-full   '>
            <div className='p-2 ml-10 mb-[4vw] '>
                <h2 className='text-3xl font-[pf5] '> ANIMATED  WEBSITE DESIGN </h2>
                {/* <h3 className='text-4xl font-[pf-3] text-gray-400'>BESPOKE FREELANCE</h3> */}
            </div>
            <div id='banner1' className='p-20  '>
                <div className='w-[20x] h-[20x] bg-green-200'></div>
                <img className='w-[20x] bg-emerald-500' src="./webdev.png" alt="" />
                <img className='mb-10' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
                {/* <img className='mb-10 w-[101x]' src="/src/assets/spider.gif" alt="" /> */}
                <img className='w-[101px] h-101 rounded-full bg-white' src="./src/assets/webdev2.png" alt="" />
            </div>
        </div>
    )
}

export default Page1Bottom