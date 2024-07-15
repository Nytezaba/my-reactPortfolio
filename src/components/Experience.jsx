import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="my-20 text-center text-4xl">
                Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((data, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0}}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{data.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0}}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6
                                className="mb-2 font-semibold">
                                {data.role} - <span className="text-sm text-purple-100">{data.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{data.description}</p>
                            {data.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-400"
                                >
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

export default Experience;