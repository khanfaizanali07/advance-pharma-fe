import { Typography, Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { MdOutlineReviews } from "react-icons/md";
import { PiFirstAidKit } from "react-icons/pi";

const about = ["100% Customer Satisfaction", "100% Quality Assurance", "Secured Packaging", "Timely Delivery"]
const cardsAbout = [
    {
        heading : "Skilled Doctors",
        para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        icon : <IoMdPerson />
    },
    {
        heading : "Quality Services",
        para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        icon : <GrServices />
    },
    {
        heading : "Positive Reviews",
        para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        icon : <MdOutlineReviews />
    },
    {
        heading : "Latest Equipment",
        para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        icon : <PiFirstAidKit />
    },
]
const classes = ["rounded-tl-[44px]", "rounded-tr-[44px]", "rounded-bl-[44px]", "rounded-br-[44px]"]
const AboutHome = () => {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [hoverIndexCard, setHoverIndexCard] = useState(-1);
  return (
    <div className="flex md:flex-row flex-col w-full container mx-auto px-4 mt-20 gap-8">
        <div className="md:w-1/2 w-full">
            <Typography className="text-sm font-semibold text-[#02a458]">About Us</Typography>
            <Typography variant='h2' className="text-[#121521] mt-4">The leading pharmaceutical manufacturer throughout the MENA region</Typography>
            <Typography className="text-[#545454] text-justify mt-4">Advanced Pharmaceutical Industries seeks to contribute to the field of medicine through acquiring and implementing new technologies that are in line with the European standards of EU-GMP and EU-DRALEX. </Typography>
            <div>
                {
                    about.map((ab, i) => 
                        <div className={`flex gap-2 items-center mt-3`} key={i} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(-1)}>
                            <div className={`h-6 w-6 flex justify-center items-center rounded-full ${hoverIndex === i ? "rotate-on-hover bg-[#02a458] text-white duration-500" : "text-[#02a458] bg-[#def5ee] duration-500"}`}>
                                <IoMdCheckmark />
                            </div> 
                            <Typography className="text-[#545454] font-semibold">{ab}</Typography>
                        </div>
                    )
                }
                <Button
                className="mt-4 relative text-white z-0 bg-[#02a458] w-[200px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-full after:duration-500 after:z-0 after:rounded-lg after:bg-[#122738] hover:after:w-full"
              >
                <span className='!z-10 relative'>More About Us</span> 
              </Button>
            </div>
        </div>
        <div className="md:w-1/2 w-full">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                {
                    cardsAbout.map((ca, i) => 
                        <div key={i+"c"} onMouseEnter={() => setHoverIndexCard(i)} onMouseLeave={() => setHoverIndexCard(-1)} className={`flex flex-col justify-center items-center shadow-lg hover:-translate-y-4 duration-500 p-4 ${classes[i]} bg-white hover:rounded-none duration-500`}>
                            <div className={`h-14 w-14 flex justify-center items-center rounded-full text-[28px] ${hoverIndexCard === i ? "rotate-on-hover bg-[#02a458] text-white duration-500" : "text-[#02a458] bg-[#def5ee] duration-500"}`}>
                                {ca.icon}
                            </div> 
                            <Typography variant='h4' className="mt-3 text-center">{ca.heading}</Typography>
                            <Typography className="text-[16px] leading-6 text-justify mt-3">{ca.para}</Typography>
                            <Typography className="text-sm font-semibold text-[#02a458] mt-3 cursor-pointer hover:text-[#122738] duration-500">Read More</Typography>
                        </div>   
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default AboutHome
