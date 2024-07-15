import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center text-3xl">
                <img className="mx-2 w-10" src={Logo} alt="logo" />
                Portfolio

            </div>
            <div className="m-8 flex items-center justify-center gap-2 text-2xl">
                <a href="https://www.linkedin.com/in/ekkaphop-playthong-936446317/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Nytezaba" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;