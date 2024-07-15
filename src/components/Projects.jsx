import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="my-20 text-center text-4xl">
                    Project
            </motion.h1>
            <div>
                {PROJECTS.map((data, index) => (
                   <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                   >
                        {/* <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img 
                                src={data.image} 
                                width={150} 
                                height={150} 
                                alt={data.title} 
                                className="mb-6 rounded"
                            />
                        </motion.div> */}
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{data.title}</h6>
                            <p className="mb-4 text-neutral-400">{data.description}</p>
                            {data.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-400">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                   </div> 
                ))}
            </div>
        </div>
    )
}

export default Project;