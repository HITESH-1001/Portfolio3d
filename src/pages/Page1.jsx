import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import Page1Bottom from '../components/Page1Bottom'
import TiltText from '../components/TiltText'


import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"
import { styles } from "../styles"
const Page1 = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };


        window.addEventListener("scroll", handleScroll);


        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    if (location.pathname !== "/") return null;

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)
    const mouseMoving = (e) => {
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 50)
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 50)



    }

    useGSAP(function () {
        gsap.to(tiltRef.current, {
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 2,
            ease: 'power4.out'
        })
    }, [xVal, yVal])

    return (
        
        <div
            id='page1'
            onMouseMove={(e) => { mouseMoving(e) }}
            className='relative w-full h-screen p-4 sm:p-7'
        >
            <div
                id='page1-in'
                className='relative shadow-xl p-[6vw] sm:p-[2vw] shadow-gray-700 bg-[] bg-cover bg-center h-full w-full rounded-[20px] sm:rounded-[50px] bg-no-repeat'
                style={{
                    backgroundImage: `url(./assets/hit2.jpg)`,
                }}
            >
                <nav
                    className={`${styles.paddingX} w-full flex items-center py-3 sm:py-5 top-0 z-20 ${scrolled ? "bg-primary" : "display-none"}`}
                >
                    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                        <Link
                            to='/'
                            className='flex items-center gap-2'
                            onClick={() => {
                                setActive("");
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img src={logo} alt='logo' className='w-14 h-14 sm:w-20 sm:h-20 object-contain' />
                            <p className='text-white text-[28px] sm:text-[40px] font-bold cursor-pointer flex'>
                                Hitesh &nbsp;
                                <span className='hidden sm:block'>| Portfolio</span>
                            </p>
                        </Link>

                        <ul className='hidden sm:flex flex-row gap-4 sm:gap-8 ml-[5vw]'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`text-white bg-[#FF4A3F] px-3 py-2 rounded-full text-sm sm:text-[18px] font-medium cursor-pointer hover:bg-gray-500`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Small screen menu */}
                        <div className='sm:hidden flex flex-1 justify-end items-center'>
                            <img
                                src={toggle ? close : menu}
                                alt='menu'
                                className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer'
                                onClick={() => setToggle(!toggle)}
                            />

                            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                                <ul className='flex flex-col gap-4'>
                                    {navLinks.map((nav) => (
                                        <li
                                            key={nav.id}
                                            className='font-medium cursor-pointer text-[14px] text-white'
                                            onClick={() => {
                                                setToggle(!toggle);
                                                setActive(nav.title);
                                            }}
                                        >
                                            <a href={`#${nav.id}`}>{nav.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <TiltText abc={tiltRef} />

                <div className='absolute bottom-4 sm:bottom-10 w-full flex justify-center items-center'>
                    <div className='w-[25px] h-[44px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
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

                <Page1Bottom />
            </div>
        </div>

    )
}

export default Page1