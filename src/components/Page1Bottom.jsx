import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
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
        <div className=' absolute left-0 bottom-0 flex items-end justify-between  w-full   '>
            {/* <div className='flex items-start p-2 ml-10 mb-[4vw] sm:p-1   '>
                <h2 className='text-3xl font-[pf5] '>F     ANI MATED DESIGN </h2>
            </div> */}

            <div className=' p-3 bottom-4 sm:bottom-10 w-full flex justify-center items-center   '>
                <div className=' w-[25px] h-[44px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary  flex justify-center items-start p-2 '>
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white mb-1'
                    />
                </div>
            </div>

            <div id='banner1' className=' p-8  '>
                <img className='w-[201px] h-101 bg-white rounded-full 
                ' src="./webdev2.png" alt="" />
            </div>
        </div>
    )
}

export default Page1Bottom