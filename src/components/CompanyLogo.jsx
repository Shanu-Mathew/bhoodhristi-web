import React from 'react'
import vsp from "../assets/vizagsteel.jpg"
import bpl from "../assets/logo.png"

const CompanyLogo = () => {
    const logos = [vsp]
  return (
    <div className='w-full overflow-hidden container mx-auto py-10 gap-8 flex px-10 pb-40
                    sm:flex-row flex-col sm:flex-row flex-col sm:items-center items-start '>
        <div className='w-[300px] h-[80px] shrink-0 px-8 text-center py-8 text-gray-600 border-l-4 border-blue-500 
                        bg-white py-2 z-10 sm:text-base text-xl font-semibold left'>
        Proud Partners with <br/>
        </div> 
        <div className='flex animate-marquee whitespace-nowrap'>
            {logos.map((logo,index) => (
                <img key={index} src={logo} alt="company Logo" className='mx-12 h-15 w-36 object-contain 
                                grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
            ))}

            {/* {logos.map((logo,index) => (
                <img key= {`duplicate-${index}`} src={logo} alt="company Logo" className='mx-12 h-15 w-36 
                object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
            ))} */}
        </div>
    </div>
  )
}

export default CompanyLogo