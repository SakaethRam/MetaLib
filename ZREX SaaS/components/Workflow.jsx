import { CheckCircle2, Scale } from "lucide-react";
import codeImg from "../assets/code.png";
import { checklistItems } from "../constants";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const Workflow = () => {
  return (
    <div className="pb-4 container mx-auto px-4 border-t py-2 border-neutral-800 mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      </div>
      <div className="text-center mt-5">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          WORKFLOW
        </span>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Coding Workflow.
          </span>
        </motion.h2>
      </div>
      <div className="flex flex-wrap justify-center">
        
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="text mx-6 bg-neutral-900 h-10 w-10 p-2 items-center rounded-full">
          <FaNodeJs size={20} />
        </motion.div>

              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}> 
                <a href={item.zipUrl} download className="block">
                  <h5 className="mt-1 mb-2 text-xl hover:cursor-pointer text-white"> 
                    {item.title}
                  </h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
