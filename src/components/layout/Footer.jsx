import React from 'react'
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebookF, FaGlobe} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";
const date = new Date();

const footerLinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About us",
        link: "/"
    },
    {
        name: "Pharmacovigilance",
        link: "/"
    },
    {
        name: "Contact us",
        link: "/"
    },
]
const Footer = () => {
    const [year, setYear] = useState(0);
    useEffect(() => {
        setYear(date.getFullYear())
    }, [])
  return (
    <div className="w-full bg-[#122738]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-10">
                    <div className="">
                        <Typography className="text-[#02a458] text-xl">About us</Typography>
                        <Typography className="text-sm text-justify mt-4 text-white pr-16">our facility located in Saudi Arabia, our vision is to manufacture and produce distinct pharmaceutical products in various forms that are not available in the MENA region, accommodating the requirements of medical institutions and end users alike.</Typography>
                        <div className="">
                    <div className="flex gap-4 mt-24"> 
                    <a className="border-2 border-[#02a458] hover:bg-[#02a458] text-white  duration-500 rounded-full h-10 w-10 flex justify-center items-center">
                  <FaFacebookF className="text-lg" />
                </a>
                <a className="border-2 border-[#02a458] hover:bg-[#02a458] text-white duration-500 rounded-full h-10 w-10 flex justify-center items-center">
                  <FaXTwitter className="text-lg" />
                </a>
                <a className="border-2 border-[#02a458] hover:bg-[#02a458] text-white duration-500 rounded-full h-10 w-10 flex justify-center items-center">
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a className="border-2 border-[#02a458] hover:bg-[#02a458] text-white duration-500 rounded-full h-10 w-10 flex justify-center items-center">
                  <FaInstagram className="text-lg" />
                </a>
                </div>
                    </div>
                    </div>
                    <div className=" w-full">
                    <Typography className="text-[#02a458] text-xl md:pl-20 text-left md:-ml-6  mt-4 md:mt-0">Quick Links</Typography>
                    <div className="mt-4 flex sm:justify-center justify-items-start items-center w-full  md:pr-16">
                    <ol className="text-white w-full md:px-14">
                        {footerLinks?.map((link) => 
                            <li key={link?.link} className="p-1 cursor-pointer text-white hover:text-black hover:bg-[#02a458]  duration-500 text-sm border-b border-white w-full">{link?.name}</li>
                        )}
                    </ol>
                    </div>
                    </div>
                    
                    <div className="">
                    <Typography className="text-[#02a458] text-xl mt-4 lg:mt-0">Contact Info</Typography>
                    <Typography className="text-justify text-sm text-white mt-4">Advanced Pharmaceutical Industries</Typography>
                    <Typography className="text-justify text-sm text-white pr-28">Office 208, Al-Murjana Building
                        8125 Al Amir Sultan- Al Rawdah
                        Jeddah 23435-2086, KSA</Typography>
                    <Typography className="text-sm text-white mt-4">
                        <a className="flex justify-start items-center gap-2">
                        <FiMail className="text-sm text-[#02a458]"/> example@gmail.com
                        </a>
                    </Typography>
                    <Typography className="text-sm text-white mt-2">
                        <a className="flex justify-start items-center gap-2">
                        <FaMobileAlt className="text-sm text-[#02a458]"/> 0123456789
                        </a>
                    </Typography>
                    <Typography className="text-sm text-white mt-2">
                        <a href={`/`} className="flex justify-start items-center gap-2">
                        <FaGlobe className="text-sm text-[#02a458]"/>www.adv-pharma.com
                        </a>
                    </Typography>
                    </div>
                </div>
                <div className="w-full text-center py-2 text-white pb-14 lg:pb-0">
                    <Typography className="text-xs">Copyright &copy; {year} Advanced Pharmaceutical Industries All Rights Reserved.</Typography>
                </div>
            </div>
            
        </div>
  )
}

export default Footer
