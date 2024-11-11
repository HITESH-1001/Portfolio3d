import React from 'react'

const TiltText = (props) => {
    return (
        <div id='tiltDiv' ref={props.abc} className='mt-[6vw] ml-20 '>
            <h1 className='text-[4.2vw] uppercase font-[pf1] leading-[4vw]'>I am A <span className='text-white'>WEB & aPP</span>™
            </h1>
            <h1 className='text-[8.2vw] leading-[8vw] font-[pf1]'>DEVELOPER</h1>
            <h1 className='text-[4.2vw] uppercase font-[pf1] leading-[4vw]'> </h1>
        </div>
    )
}

export default TiltText