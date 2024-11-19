import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Link from 'next/link';
import { GoPlus } from "react-icons/go";
const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 text-[#121521] hover:text-[#43ad65] duration-500"
      >
        <a href="#" className="flex items-center gap-[2px]">
          Home<GoPlus />
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 text-[#121521] hover:text-[#43ad65] duration-500"
      >
        <a href="#" className="flex items-center gap-[2px]">
            About us<GoPlus />
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 text-[#121521] hover:text-[#43ad65] duration-500"
      >
        <a href="#" className="flex items-center gap-[2px]">
        Pharmacovigilance<GoPlus />
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 text-[#121521] hover:text-[#43ad65] duration-500"
      >
        <a href="#" className="flex items-center gap-[2px]">
        Contact Us<GoPlus />
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="max-h-[768px] w-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <img src="/logo.jpg" alt="logo"/>
        </Link>
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                className="hidden lg:inline-block relative text-white z-0 bg-[#02a458] w-[200px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-full after:duration-500 after:z-0 after:rounded-lg after:bg-[#122738] hover:after:w-full"
              >
                <span className='!z-10 relative'>Arabic</span> 
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
            <Button className="w-full relative text-white bg-[#43ad65] before:bg-[#122738] before:absolute before:top-0 before:left-0 before:w-0 hover:after:text-white before:hover:w-full before:duration-700">
              <span>Arabic</span>
            </Button>
        </MobileNav>
      </Navbar>
    </div>
  )
}

export default Header
