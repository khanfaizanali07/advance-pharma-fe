import React from 'react'
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import Link from 'next/link';
const Focus = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-20 w-[480px] -z-10">
        <img src="/capsulas.png" className="w-full opacity-80" alt="" />
      </div>
      <div className="py-10 bg-gradient-to-r from-[#02a458] via-[#2ad584]/90 to-[#51eda3]/70">
        <div className="w-full container gap-2  flex items-center flex-col text-center ">
          <div>
            <Typography
              variant="h2"
              className="text-[#121521] text-4xl flex items-center text-center"
            >
              Our Focus
            </Typography>
          </div>
          <div className=" space-y-10">

            <div className="md:w-1/2 w-full mx-auto">
              <Card className="bg-inherit border-r">
                <CardBody>
                  <Typography className="text-[#121521]" variant="lead">
                  Our focus is to cover a variety of therapeutic classes and meet growing demand in both the domestic and international markets, securing the availability of important life-saving products, creating new jobs, and training opportunities.
                  </Typography>
                </CardBody>
              </Card>
              
            </div>
          </div>
            <Button className="relative text-white z-0 bg-[#02a458] w-[200px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-full after:duration-500 after:z-0 after:rounded-lg after:bg-[#122738] hover:after:w-full">
                <span className='!z-10 relative'>Read More</span> 
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Focus
