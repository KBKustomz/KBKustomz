import React from "react";
import { NavLink, Link } from "react-router-dom";
import {  easeIn, motion } from "framer-motion";

export default function Navbar() {


    return (
        <>
            <motion.nav animate={{height:['0%','15%'], opacity:[0,1]}} transition={{duration:1, delay:1}} class="sticky z-10 bg-gray-200 top-0 w-full h-[15%]">
            <Link path to='/'>
                <img alt="KB's Kustomz custom paint and autobody logo" className="text-white text-[8px] absolute top-[0px] pb-[0px] w-[8.5%]" src="src/assets/Images/Logo(1).png"></img>
            </Link>
            
                <div class="flex items-center justify-end text-white font-glacialBold bg-black w-full h-[30%]">
                    <a class="inline " href="tel: 815-562-5624">
                    <img src="src/assets/Icons/icons8-phone-50 (1).png" class="mb-[2px] mr-[10px] inline w-[12%]"></img>
                    815-562-5624
                    </a>
                </div>
                <ul class=" flex items-center justify-evenly font-glacial bg-white w-full h-[70%]">
                    <motion.li
                        whileHover={{scale:[1,1.08]}}
                        transition={{duration:0.5, ease:easeIn}}
                      
                    ><NavLink   class="p-[10px]" path to="/">Home</NavLink></motion.li>
                     <motion.li
                       whileHover={{scale:[1,1.08]}}
                       transition={{duration:0.5, ease:easeIn}}
                    ><NavLink  path to="/services">Services</NavLink></motion.li>
                    <motion.li
                       whileHover={{scale:[1,1.08]}}
                       transition={{duration:0.5, ease:easeIn}}
                    ><NavLink path to="/about">About</NavLink></motion.li>
                    <motion.li
                       whileHover={{scale:[1,1.08]}}
                       transition={{duration:0.5, ease:easeIn}}
                    ><NavLink path to="/contact">Contact</NavLink></motion.li>
                    
                </ul>
               
            </motion.nav>

        </>
    )
}