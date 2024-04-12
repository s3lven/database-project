import { IconContext } from "react-icons";
import { FaGithub, FaReact, FaNodeJs   } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss  } from "react-icons/si";

function Footer() {
    return (
        <>
            <hr className="my-5 border-black"></hr>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex flex-row justify-between gap-5">
                    <p>Made by Eriz Sartiga</p>
                    <IconContext.Provider value={{size: "1.5em"}}>
                        <a className="align-self-stretch"
                            href="https://github.com/s3lven"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </IconContext.Provider>
                </div>
                <IconContext.Provider value={{size: "1.5em"}}>
                <div className="flex justify-between items-center gap-5">
                    <p>Technologies Used: </p>
                    <DiMongodb />
                    <SiExpress />
                    <FaReact />
                    <FaNodeJs />
                    <SiTailwindcss />
                </div>
                </IconContext.Provider>
            </div>
        </>
        
    )
}

export default Footer