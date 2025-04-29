import { FORUM } from "../constants"; 
import { motion } from "framer-motion"

const Forum = () => {
    return (
        <div className="pb-4 container mx-auto px-4 border-t py-2 border-neutral-800 mt-15">
            <div className="text-center mt-5">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    FORUM
                </span>
                <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Connect to{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    Coding Workflow.
                </span>
                </motion.h2>
            </div>
            <div className="mt-12">
                {FORUM.map((forum, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center">
                        {/* Left Section: User */}
                        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="w-full lg:w-1/4 lg:text-left">
                            <p className="mb-2 text-sm text-stone-400">{forum.user}</p>
                        </motion.div>

                        {/* Right Section: Role, Company, Description, and Technologies */}
                        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                            <h2 className="mb-2 font-semibold">
                                {forum.role} -{" "}
                                <span className="text-sm text-stone-400">{forum.company}</span>
                            </h2>
                            <p className="mb-4 text-stone-400">{forum.description}</p>

                            {/* Technologies List */}
                            <div className="flex flex-wrap gap-2">
                                {forum.technologies.map((tech, techIndex) => (
                                    <span
                                        className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                                        key={`${index}-${techIndex}`} // Ensuring a unique key
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forum;

