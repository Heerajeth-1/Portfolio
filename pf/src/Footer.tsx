import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='relative flex w-full'>
            <div className="flex w-full bg-black h-[200px] p-8 text-white gap-4 justify-start items-center">
                <div className="flex flex-col w-1/2 gap-2">
                    <h1 className="text-xl">Contact Me</h1>
                    <a href="https://www.linkedin.com/in/heerajethm/" target="_blank" rel="noopener noreferrer">
                    <span className="flex flex-row gap-2 items-center">
                        <FaLinkedin />
                        LinkedIn
                    </span>
                    </a>
                    <a href="https://github.com/Heerajeth-1" target="_blank" rel="noopener noreferrer">
                    <span className="flex flex-row gap-2 items-center">
                        <FaGithub />
                        Github
                    </span>
                    </a>
                    <a href="https://www.instagram.com/heera_jeth/" target="_blank" rel="noopener noreferrer">
                    <span className="flex flex-row gap-2 items-center">
                        <BiLogoInstagram />
                        Instagram
                    </span>
                    </a>

                </div>
                

            </div>
    </div>
  )
}

export default Footer