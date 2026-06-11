


"use client";
import { useState } from "react";
import Link from "next/link";
import { Button} from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const links=<>
   <Link href="/about">Browse Jobs</Link>
          <Link href="/services">Company</Link>
          <Link href="/contact">Pricing</Link>
        
    <div className="h-6 hidden md:block w-px bg-gray-300"></div>
<Link href={'/signin'} className="text-blue-500">Sign In</Link>
          <Button color="primary">
            Get Started
          </Button>
          </>
  return (
    <nav className="border-b  ">
      <div className="mx-auto bg-[#222222] flex m-2 rounded-xl max-w-7xl items-center justify-between p-2 px-5">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={100}
          ></Image>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          
         {links}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
         <div className="p-3 transition-all duration-500 rounded-full cursor-pointer border border-gray-100"> {isOpen ? <Xmark /> : <Bars />}</div>
        </button>
      </div> 

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t md:hidden">
          <div className="flex flex-col gap-4 p-4">
           {links}
          </div>
        </div>
      )}
    </nav>
 

    
  );
}