import { reviews } from "../utils/reviews";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const ReviewComponent = () => {
  return (
    <section id="about" className="max-w-full relative bg-[#F7F7F7] border-white shadow-lg flex items-center justify-center py-8 px-4 md:px-10">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='w-full'
      >
        <motion.h1
          className='text-2xl md:text-4xl w-full text-center'
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Easily add your design to a wide range of products
        </motion.h1>

        <motion.p
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='text-lg md:mx-60 mt-4 md:mt-10 text-center'
        >
          With our free design tools, you can easily add your custom designs to laptop, phone cases, and hundreds of other products.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full mx-auto py-10 bg-gray-100 md:p-5 md:mt-10 overflow-x-auto"
        >
          <div className="flex space-x-5">
            {reviews.map((user, i) => (
              <div
                key={i}
                className="relative bg-white p-6 rounded-lg shadow-lg w-64 transform transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={user.pfp}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-500"
                />
                <h3 className="text-lg font-bold mt-4">{user.name}</h3>
                <p className="text-gray-600 mt-2">{user.review}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReviewComponent;
