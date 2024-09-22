import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CardsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      x: isMobile ? i * 100 - 200 : i * 200 - 400,
      y: i % 2 === 0 ? (isMobile ? -100 : -200) : (isMobile ? 100 : 200),
      transition: { delay: i * 0.3, duration: 1.5 },
    }),
  };

  const centerCardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1.2,
      transition: { duration: 2 },
    },
  };

  const cardImages = [
    'https://static.vecteezy.com/system/resources/previews/003/223/555/original/api-technology-icon-on-white-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/009/324/919/large_2x/wix-letter-logo-design-on-black-background-wix-creative-initials-letter-logo-concept-wix-letter-design-vector.jpg', 
    'https://th.bing.com/th/id/R.91975eec791e4bdacce27857adeb8d3d?rik=427eLVqFu%2fJM%2bg&riu=http%3a%2f%2fblog.printkeg.com%2fwp-content%2fuploads%2f2014%2f12%2fshopify-offers.png&ehk=ixS8VtJqG15awSj0shC7cfDFHbS1VHsbdjiEptfLSos%3d&risl=&pid=ImgRaw&r=0', 
    'https://th.bing.com/th/id/OIP.4MYXCerspIt2F_B9_UYN6AHaHa?rs=1&pid=ImgDetMain', 
    'https://th.bing.com/th/id/OIP.mRTSL01lFLmSjif4ikO4dgHaEv?rs=1&pid=ImgDetMain', 
  ];

  const centerImage = 'https://th.bing.com/th/id/OIP.JMBkw3CoRkrZN4ZtwAvrEAHaHa?rs=1&pid=ImgDetMain'; 

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex justify-center items-center bg-gray-100 overflow-x-hidden"
    >
      
     
      <motion.div
        className="absolute w-22 h-22 md:w-40 md:h-40 bg-blue-500 rounded-lg flex justify-center items-center shadow-lg z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={centerCardVariants}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={centerImage} alt="Center" className="md:w-full md:h-full rounded-lg object-cover w-20" />
      </motion.div>

     
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 md:w-28 md:h-28 bg-green-400 rounded-lg flex justify-center items-center shadow-lg"
          custom={i}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={cardImages[i]} alt={`Card ${i + 1}`} className="w-full h-full rounded-lg object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

export default CardsSection;
