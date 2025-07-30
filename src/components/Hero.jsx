import React from 'react';
import image1 from '../assets/1.png';

const Hero = () => {
    return (
        <section id="home" className="container mx-auto flex flex-col md:flex-row justify-between pt-20  px-4 sm:px-6 lg:px-6">
            {/* Left Column */}
            {/* Left Column */}
<div className="w-full md:w-1/2 space-y-8 py-8 px-6 cursor-text">
    {/* Star Badge */}
    <div className="flex items-center gap-2 bg-gray-50 w-fit px-2 py-4 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
        <span className="text-blue-600 hover:text-amber-300 transition-transform">★</span>
        <span className="text-sm font-medium">Welcome</span>
    </div>

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
        See Beyond the&nbsp;
        <span className="text-blue-600 relative inline-block">Ordinary,
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
        </span> 
        <br />
        Fly Beyond the&nbsp;
        <span className="text-blue-600 relative inline-block">Expected
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
        </span>
        <span className="inline-block ml-2 animate-spin">𖥂</span>
    </h1>

    <p className="text-gray-500 text-lg md:text-l max-w-xl text-justify">
        Take your projects to new heights with our precision drone services, delivering real-time aerial insights for smarter decisions and stunning perspectives.
    </p>

    {/* Input Field and Button */}
    <div className="flex gap-3 max-w-md">
        <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-1 px-6 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
        />
        <button className="bg-blue-600 text-white rounded-xl px-8 py-2 hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300">
            →
        </button>
    </div>
</div>

            
            {/* Right Column */}
            <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
                <img src={image1} alt="" className="rounded-lg relative z-10 hover:scale-105 transition-transform duration-300 object-cover w-full aspect-video" />
            </div>
        </section>
    );
};

export default Hero;
