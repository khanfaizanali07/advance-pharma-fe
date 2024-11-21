import React, { useState } from 'react'
import { GiMedicines } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { GiHeartOrgan } from "react-icons/gi";
import { LiaToothSolid } from "react-icons/lia";
import { BsLungs } from "react-icons/bs";
import { Typography } from '@material-tailwind/react';
const services = [
    {
        icon: <GiMedicines />,
        heading: "Medicine",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur."
    },
    {
        icon: <GiBrain />,
        heading: "Neurology",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur."
    },
    {
        icon: <IoEyeOutline />,
        heading: "Eye Care",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur."
    },
    {
        icon: <GiHeartOrgan />,
        heading: "Cardiology",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur."
    },
    {
        icon: <LiaToothSolid />,
        heading: "Dental Care",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur."
    },
    {
        icon: <BsLungs />,
        heading: "Pulmonary",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur."
    },
]
const Services = () => {
    const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className="container mx-auto w-full mt-20">
      <Typography className="text-sm font-semibold text-[#02a458] text-center">Our Services</Typography>
      <Typography variant='h2' className="mt-4 text-center text-[#121521]">Our Healthcare <span className="text-[#02a458]">Services</span></Typography>
      <div className="md:w-1/2 w-full mt-4 mx-auto">
        <Typography variant='paragraph' className="w-full text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</Typography>
      </div>
      <div className="grid grid-cols-3 mt-8 gap-6">
        {
            services.map((ser, i) => 
                <div key={i+"ser"} className="bg-white z-20 p-8 relative w-full after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] hover:after:h-full after:bg-[#02a458] flex flex-col justify-center items-center after:duration-500 after:rounded-lg after:z-0 rounded-lg" onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(-1)}>
                    <div className={`h-20 w-20 flex justify-center items-center rounded-full text-[40px] text-[#02a458] bg-[#def5ee] duration-500 z-20 ${hoverIndex === i ? "rotate-onx-hover" : ""}`}>
                                {ser.icon}
                    </div>
                    <Typography variant='h4' className={`mt-4 text-center z-20 duration-500 ${hoverIndex === i ? "text-white" : "text-[#121521]"} `}>{ser.heading}</Typography>
                    <Typography className={`text-[16px] z-20 leading-6 text-justify mt-4 duration-500 ${hoverIndex === i ? "text-white" : "text-[#121521]"} text-center`}>{ser.para}</Typography>
                    <Typography className={`text-sm font-semibold mt-4 cursor-pointer duration-500 z-20 ${hoverIndex === i ? "text-white" : "text-[#121521]"} hover:tracking-wider`}>Read More</Typography> 
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Services
