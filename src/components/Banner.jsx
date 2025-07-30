import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import droneImg1 from "../assets/Banner/Banner1.png";
import droneImg2 from "../assets/Banner/Banner2.png";
import droneImg3 from "../assets/Banner/Banner3.png"
import droneImg4 from "../assets/Banner/Banner4.png"
const droneImages = [droneImg1, droneImg2,droneImg3,droneImg4];


const textLoopVariants = {
  animate: (i) => ({
    opacity: [0, 1, 1, 0],
    y: [20, 0, 0, 20],
    transition: {
      delay: i * 2,
      duration: 6,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "easeInOut",
    },
  }),
};

const rectVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Banner1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % droneImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px] overflow-hidden shadow-5xl md:mt-20 mt-0">
      

      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={droneImages[currentIndex]}
          alt="drone"
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 bg-black/40 z-10"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />


      <motion.div
        className="absolute hidden xl:flex right-0 top-0 h-full w-[300px] justify-end items-end z-20 pointer-events-none"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[300px] h-full mr-4">
          <motion.div
            className="absolute w-[20px] h-[600px] bg-white rotate-[30deg] rounded-full top-[-100px] right-[220px]"
            variants={rectVariants}
            animate="animate"
          />
          <motion.div
            className="absolute w-[20px] h-[600px] bg-white rotate-[30deg] rounded-full top-[-100px] right-[270px]"
            variants={rectVariants}
            animate="animate"
          />
          <motion.div
            className="absolute w-[550px] h-[20px] top-[280px] right-[10px] rounded-full bg-white"
            variants={rectVariants}
            animate="animate"
          />
        </div>
      </motion.div>


      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-30 text-center space-y-4 px-8 md:px-12 lg:px-20">
        <motion.h1
          className="text-2xl mt-40 md:mt-0 md:text-4xl font-extrabold"
          variants={textLoopVariants}
          custom={0}
        >
          Bhoodhristi Pvt. Ltd.
        </motion.h1>

        <motion.p
          className="text-sm md:text-xl font-medium max-w-2xl"
          variants={textLoopVariants}
          custom={0}
          animate="animate"
        >
          Empowering aerial intelligence with <br className="sm:hidden" />
          cutting-edge drone technology.
        </motion.p>

        <motion.p
          className="text-xs md:text-lg font-light max-w-xl"
          variants={textLoopVariants}
          custom={0}
          animate="animate"
        >
          Surveillance. Mapping. Defense. Powered by AI-driven precision.
        </motion.p>
      </div>
    </div>
  );
}
