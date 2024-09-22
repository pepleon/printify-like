import React from 'react';
import Header from './Header'; 
import './HomePage.css';
import animation from './animation.json';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import {fadeIn} from '../utils/variants'
import {motion, Variants} from 'framer-motion';
import CardsSection from './CardsSection';
import SlidingCardSection from './SlidingCardSection';
import Footer from './Footer';
import check from './check.png'
import ReviewComponent from './ReviewComponent';




const HomePage = () => {

   
  return (
    <div className="max-w-full ">
      <Header className="z-10 max-w-full" />
      
    
      <section id="hero" className="relative  z-10 ">
       
        <div className="flex flex-col ">
        <h1 className='font-bold opacity-80 hidden md:block'>Create Custom Laptop Skin</h1>
       
        <ul className=" hidden md:inline-block text-left ml-5 text-lg">
  <li className="flex items-center mr-4">
    <img src={check} alt="Check" className="mr-2" />
    100% Free to use
  </li>
  <li className="flex items-center mr-4">
    <img src={check} alt="Check" className="mr-2" />
    900+ High-Quality Products
  </li>
  <li className="flex items-center">
    <img src={check} alt="Check" className="mr-2" />
    Largest global print network
  </li>
</ul>

        <div className='justify-center space-x-4 mt-8 hidden md:inline-block -ml-72 '>
        <button className="bg-[#39B75D] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#77DF95] transition duration-200">
    Try for Free
  </button>
  <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
    How It Works
  </button>
        </div>

        

</div>

       
        <div className="absolute md:ml-80 mt-16  md:w-[500px] max-w-full z-30">
          <Lottie animationData={animation} />
        </div>
      <div>
        <img className=" relative md:w-[550px] w-full h-auto transform scale-x-[-1]" src='https://www.wrapcart.com/cdn/shop/products/Custom-Laptop-Skin.gif?v=1645166714'/>
        
        </div>

        <div className='justify-center space-x-4 mt-36 md:hidden '>
        <button className="bg-[#39B75D] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#77DF95] transition duration-200">
    Try for Free
  </button>
  <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
    How It Works
  </button>
        </div>

      </section>

      <motion.section
        variants={fadeIn("right", 0.4)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
         className="py-16 px-36 max-w-full">
  <div className="flex justify-center space-x-8">
    <div className="text-center">
      <img 
        src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
        alt="Higher Profits"
        className="md:w-28 md:h-28 w-24 h-24 rounded-full  align-top mb-0  text-left" 
      />
      <h3 className="text-xl font-semibold mt-8 text-left ">Higher Profits</h3>
      <p className="text-gray-600 text-lg text-left mt-8">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
    </div>
    <div className="text-center">
      <img

        src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
        alt="Feature 2"
        className="md:w-28 md:h-28 w-24 h-24 rounded-full mb-2 text-left"
      />
      <h3 className="text-xl font-semibold mt-8 text-left">Robust Scaling</h3>
      <p className="text-gray-600 text-lg text-left mt-8">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
    </div>
    <div className="text-center">
      <img
        src="https://printify.com/pfh/assets/legacy/best-selection.svg"
        alt="Feature 3"
        className="md:w-28 md:h-28 w-24 h-24 rounded-full mb-2 text-left" 
      />
      <h3 className="text-xl font-semibold mt-8 text-left">Best Selection</h3>
      <p className="text-gray-600 text-lg text-left mt-8">With 900+ products and top quality brands, you can choose the best products for your business.</p>
    </div>
  </div>
</motion.section>


<ReviewComponent/>



     
      <section id="about" className="max-w-full relative bg-[#F7F7F7] border-white  ">

        
      <motion.img
      className='max-w-full '
        variants={fadeIn("right", 0.7)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}src='https://5.imimg.com/data5/SELLER/Default/2022/6/OD/OS/LB/14691844/laptop-skin-500x500.jpeg'></motion.img>
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        
        >
      <motion.h1
      className='max-w-full text-2xl  md:text-4xl md:mx-60 mx-16'
        variants={fadeIn("left", 0.7)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}>Easily add your design to a wide range of products</motion.h1>
      <p className='md:mx-60 text-lg md:mt-10 max-w-full'>With our free design tools, you can easily add your custom designs to laptop, phone cases, and hundreds of other products.</p>

        </motion.div>
        
      </section>
      <motion.section
        variants={fadeIn("up", 0.4)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
         className="py-16 px-36 max-w-full md:mx-11">
  <div className="flex justify-center space-x-8">
    <div className="text-center">
      <img 
        src="https://printify.com/pfh/assets/legacy/your-products.png"
        alt="Higher Profits"
        className="md:w-28 md:h-28 w-24 h-24 rounded-full  align-top mb-0  text-left" 
      />
      <h3  className="text-lg font-semibold text-left  mt-8 text-[#44BB66]">CREATE</h3>
      <h3 className="text-xl font-semibold  text-left ">custom products</h3>
      <p className="text-gray-600 text-sm text-left mt-8 md:w-80">Easily add your desings to a wide range of products using our free tools</p>
    </div>
    <div className="text-center">
      <img

        src="https://printify.com/pfh/assets/legacy/fullfillment.png"
        alt="Feature 2"
        className="md:w-28 md:h-28 w-24 h-24 rounded-full mb-2 text-left" 
      />
      <h3 className="text-lg font-semibold text-left  mt-8 text-[#44BB66]">SELL</h3>
      <h3 className="text-xl font-semibold text-left ">on your terms</h3>
      <p className="text-gray-600 text-sm text-left mt-8 md:w-80">You choose the products, sale price, and where to sell</p>
    </div>
    <div className="text-center">
      <img
        src="https://printify.com/pfh/assets/legacy/custom-products.png"
        alt="Feature 3"
        className="md:w-28 md:h-28 w-24 h-24 rounded-full mb-2 text-left" 
      />
      <h3  className="text-lg font-semibold text-left  mt-8 text-[#44BB66]">WE HANDLE</h3>
      <h3 className="text-xl font-semibold text-left">fullfillment</h3>
      <p className="text-gray-600 text-sm text-left mt-8 md:w-80">Once an order is placed, we automatically handle all the printing and delivery logistics</p>
    </div>
  </div>
</motion.section>
<div className='text-center bg-gray-100 mb-0 pt-10 pb-0'> <h1 >Connect to Our Store</h1>  
<p className='text-sm mx-10 text-gray-500'>Printify easily integrates with major e-commerce platforms and marketplaces</p></div>


<CardsSection/>

      

  














 <SlidingCardSection/> 


<Footer/>



      
    </div>
  );
};

export default HomePage;
