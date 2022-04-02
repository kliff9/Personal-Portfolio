
import {
    FaBootstrap,
    FaCss3,
    FaHtml5,
    FaJsSquare,
    FaNodeJs,
    FaReact,
    FaJava,
    FaEthereum,
    FaSass,
    FaPython,
    FaHardHat,
    FaNode,
    FaRust
  
  
  } from "react-icons/fa";
 import { SiMysql } from "react-icons/si";
 import  Solana  from "./img2/Solana1.png";

  import {
    SiSolidity,
    SiTypescript,
    SiTailwindcss,
    SiCsharp,
    SiMongodb,
    SiDotnet
  } from "react-icons/si";
  

function Technologies() {


    return (

        <>
        <div className="orangee">
          <h1 className="text-7xl text-white font-bold text-center p-5" data-aos='slide-up'>
            Technologies: 
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={130}
              color="cyan"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaNode
              size={130}
              color="green"
              className="w-full text-center mt-20 "
            />
            <FaBootstrap
              size={130}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJsSquare
              size={130}
              color="green"
              className="w-full text-center mt-20"
            />
            <FaHtml5
              size={130}
              color="orangered"
              className="w-full text-center mt-20"
            />
            <FaCss3
              size={130}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaEthereum 
              size={130}
              color="black"
              className="w-full text-center mt-20"            
            />
            <SiTypescript 
              size={130}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"            
            />
            <SiSolidity 
              size={130}
              color="black"
              className="w-full text-center mt-20 animate-bounce"            
            />    
            <SiTailwindcss 
              size={130}
              color="cyan"
              className="w-full text-center mt-20"            
            />
            <FaSass 
              size={130}
              color="pink"
              className="w-full text-center mt-20 animate-bounce"            
            />
            <SiCsharp 
              size={130}
              color="purple"
              className="w-full text-center mt-20"            
            />
            <SiMongodb 
              size={130}
              color="green"
              className="w-full text-center mt-20 "            
            />
            <SiDotnet 
              size={130}
              color="purple"
              className="w-full text-center mt-20 animate-bounce"            
            />
            <FaPython 
              size={130}
              color="blue"
              className="w-full text-center mt-20 "            
            />
            <FaHardHat 
              size={130}
              color="yellow"
              className="w-full text-center mt-20 animate-bounce "            
            />
              <img src={Solana} 
              size={130}
              className="w-full justify-self-center mt-20 solana animate-bounce"            
            />
            <SiMysql 
              size={130}
              color="blue"
              className="w-full text-center mt-20 "            
            />
            <FaRust 
              size={130}
              color="black"
              className="w-full text-center mt-20 animate-bounce "            
            />
            <FaJava 
              size={130}
              color="orangered"
              className="w-full text-center mt-20  "            
            />                                                                                                                    
          </div>
        </div>
        
        
        </>
    )
}

export default Technologies