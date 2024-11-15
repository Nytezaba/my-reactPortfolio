import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCodeigniter } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const Skills = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="my-20 text-center text-4xl">
                Skills & Tools
            </motion.h1>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1}}
                className="flex flex-wrap items-center justify-center gap-4 pb-8">
                {/* {SKILLS.map((data, index) => (
                    <div key={index} className="rounded-2xl border-4 border-neutral-800 p-4">
                        <data.icon className={`text-7xl ${data.color}`}/>
                    </div>
                ))} */}
                
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-7xl text-purple-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-blue-900"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCodeigniter className="text-7xl text-red-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-blue-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-7xl text-orange-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGit className="text-7xl text-red-400"/>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4 pb-6">
                {SKILLS.map((data, index) => (
                    <div>
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-400">
                            {data.text}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills;