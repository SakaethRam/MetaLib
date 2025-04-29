import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiCplusplus } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion"
import { Repeat } from "lucide-react";

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

const Stack = () => {
    return (
        <div className="border-b border-neutral-800 pb-20 mt-20 flex justify-center place-items-center ">
            <motion.div whileInView={{opacity:1, y:0, }} initial={{opacity:0, y:100}} transition={{duration:1.5}} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center text-center">
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="group flex items-center justify-center w-20 h-20 transition-transform duration-200 hover:scale-110">
                    <SiCplusplus size={35} className="text-gray-300" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="group flex items-center justify-center w-20 h-20 transition-transform duration-200 hover:scale-110">
                    <RiReactjsLine size={35} className="text-blue-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="group flex items-center justify-center w-20 h-20 transition-transform duration-200 hover:scale-110">
                    <TbBrandNextjs size={35} className="text-gray-300" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="group flex items-center justify-center w-20 h-20 transition-transform duration-200 hover:scale-110">
                    <SiMongodb size={35} className="text-green-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="group flex items-center justify-center w-20 h-20 transition-transform duration-200 hover:scale-110">
                    <DiRedis size={35} className="text-red-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="group flex items-center justify-center w-20 h-20 transition-transform duration-200 hover:scale-110">
                    <FaNodeJs size={35} className="text-green-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="group flex items-center justify-center w-20 h-20 transition-transform duration-200 hover:scale-110">
                    <BiLogoPostgresql size={35} className="text-blue-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="group flex items-center justify-center w-20 h-20 transition-transform duration-200 hover:scale-110">
                    <FaPython size={35} className="text-gray-300" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Stack;



