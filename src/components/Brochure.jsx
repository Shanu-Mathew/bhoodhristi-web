import React, { useState, useEffect } from 'react';

const Brochure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (isOpen) {
      // Trigger download
      const link = document.createElement('a');
      link.href = '/Brochure.pdf';
      link.setAttribute('download', 'Bhoodhristi Brochure.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (isMobile) setIsOpen(false); // Optionally auto-hide only on mobile
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={!isMobile ? () => setIsOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsOpen(false) : undefined}
      className={`fixed w-[140px] h-[60px] bg-blue-400 z-50 right-0 top-1/2 transform -translate-y-1/2 flex items-center rounded-l-xl px-3 py-2 transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-[90px]'
      } shadow-xl cursor-pointer hover:bg-blue-500`}
      style={{ touchAction: 'manipulation' }}
    >
      <div className="text-2xl mr-2">📃</div>
      <div className="text-white font-semibold text-xs sm:text-sm leading-tight">
        Download<br />Brochure
      </div>
    </div>
  );
};

export default Brochure;
