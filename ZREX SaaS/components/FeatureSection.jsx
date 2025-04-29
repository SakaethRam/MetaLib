import { features } from "../constants";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
      y: [-10, 10],
      transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
      }
  }
})

const FeatureSection = () => {
  return (
    <div className="pb-4 container mx-auto px-4 py-2 border-neutral-800 mt-15">
      <div className="text-center mt-5">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          FEATURES
        </span>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your model
          </span>
        </motion.h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </motion.div>
              <div>
                <motion.h5 whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="mt-1 mb-6 text-xl">{feature.text}</motion.h5>
                <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </motion.p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
