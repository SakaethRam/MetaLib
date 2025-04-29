import { BLOGS } from "../constants";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div className="pb-4 container mx-auto px-4 border-t py-2 border-neutral-800 mt-15">
      <div className="text-center mt-5">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          BLOGS
        </span>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Blogs &{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Articles
          </span>
        </motion.h2>
      </div>
      <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className="flex flex-wrap justify-center mt-10">
        {BLOGS.map((blogs, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{blogs.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={blogs.image}
                  alt=""
                />
                <div>
                  <h6>{blogs.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {blogs.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="flex justify-center my-10 mb-0">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Read More
        </a></div>
    </div>
  );
};

export default Blogs;
