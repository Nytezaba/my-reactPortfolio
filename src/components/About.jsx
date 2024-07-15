import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About Me
            </h1>
            <div className="flex flex-wrap lg:justify-center">
                {/* <motion.div 
                    whileInView={{ x: 0, opacity: 1}}
                    initial={{ x: -100, opacity: 0}}
                    transition={{ duration:0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="" />
                    </div>
                </motion.div> */}
                <motion.div 
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0}}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2">
                    {/* 
                        This is work with img
                        <div className="flex justify-center lg:justify-start"> 
                    */}
                    <div className="flex justify-center lg:justify-center">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    
                </motion.div>

                    
            </div>
        </div>
    )
}

export default About;