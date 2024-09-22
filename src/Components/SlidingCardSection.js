import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const SlidingCardSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const slideInVariants = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="flex md:h-[1100px] p-10 relative mt-0 md:mx-40 max-w-full">
    
      <div className="relative z-30 bg-white w-1/2 h-1/2 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center ml-auto">
        <img className='h-full w-full object-cover rounded-lg' src="https://th.bing.com/th/id/OIP.OptoLPSO3Z3K5BAC0KUIcQHaIn?w=1920&h=2234&rs=1&pid=ImgDetMain" alt="Card Image"/>
      </div>
{isMobile &&  <div
          className="absolute left-0  w-full max-w-full p-6 bg-[#203741] rounded-lg shadow-lg z-20"
        >
          <h2 className="text-xl md:text-3xl font-bold text-left md:pl-16 md:pt-10 pt-10 text-white w-1/2">Make Money, Risk-Free</h2>
          <p className='text-left md:pl-16 text-white w-1/2 pr-20 py-4 text-lg'>You pay for fulfillment only when you make a sale</p>
          <div className="text-left ml-16 text-white py-5 hidden md:block bg-[#17262B] w-[400px] rounded-lg p-12">
            <div className="text-left py-2 flex justify-between">
              <p className='text-lg'>You sell a t-shirt</p>
              <p className='text-lg'>$30</p>
            </div>
            <div className="text-left py-2 flex justify-between pb-4">
              <p className='text-lg'>You pay for its production</p>
              <p className='text-lg'>$12</p>
            </div>
            <hr className='border-t border-[#757C7E] py-3' />
            <div className="text-left py-2 flex justify-between">
              <h5 className='text-xl text-[#18C75A] font-bold'>Your profit</h5>
              <p className='text-xl'>$18</p>
            </div>
          </div>
          <div className='text-left mt-7 ml-16'>
            <button className="bg-gradient-to-b from-green-600 to-green-400 text-white font-bold py-2 px-4 rounded-lg text-left">
              Start selling
            </button>
          </div>
        </div>}



      {!isMobile && (
        <motion.div
          variants={slideInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="absolute left-0 md:h-1/2 w-full p-6 bg-[#203741] rounded-lg shadow-lg z-20"
        >
          <h2 className="text-xl md:text-3xl font-bold text-left md:pl-16 md:pt-10 pt-10 text-white w-1/2">Make Money, Risk-Free</h2>
          <p className='text-left md:pl-16 text-white w-1/2 pr-20 py-4 text-lg'>You pay for fulfillment only when you make a sale</p>
          <div className="text-left ml-16 text-white py-5 hidden md:block bg-[#17262B] w-[400px] rounded-lg p-12">
            <div className="text-left py-2 flex justify-between">
              <p className='text-lg'>You sell a t-shirt</p>
              <p className='text-lg'>$30</p>
            </div>
            <div className="text-left py-2 flex justify-between pb-4">
              <p className='text-lg'>You pay for its production</p>
              <p className='text-lg'>$12</p>
            </div>
            <hr className='border-t border-[#757C7E] py-3' />
            <div className="text-left py-2 flex justify-between">
              <h5 className='text-xl text-[#18C75A] font-bold'>Your profit</h5>
              <p className='text-xl'>$18</p>
            </div>
          </div>
          <div className='text-left mt-7 ml-16'>
            <button className="bg-gradient-to-b from-green-600 to-green-400 text-white font-bold py-2 px-4 rounded-lg text-left">
              Start selling
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default SlidingCardSection;
