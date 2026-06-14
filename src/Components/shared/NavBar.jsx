


"use client";
import { useState } from "react";
import Link from "next/link";
import { Button} from "@heroui/react";
import { ArrowRightFromSquare, ArrowUpRightFromSquare, Bars, PencilToLine, Xmark } from "@gravity-ui/icons";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import  {Selection} from "@heroui/react";
import { Dropdown, Header, Label} from "@heroui/react";




export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
    // console.log(user, isPending);
  const [isOpen, setIsOpen] = useState(false);
const links=<>
   <Link href="/about">Browse Jobs</Link>
          <Link href="/services">Company</Link>
          <Link href="/contact">Pricing</Link>
</>

// Links when not logged in
const links2= <>
    <Link href={'/login'} className="text-blue-500">Sign In</Link>
          <Link href='/register'>
          <Button color="primary">
            Get Started 
          </Button></Link>
          </>

  return (
    <nav className="border-b sticky m-2 z-10 top-0" position="sticky">
      <div className="mx-auto bg-[#222222] flex gap-0 rounded-xl max-w-7xl items-center justify-between  p-2 px-3">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
         <div className="p-3 transition-all duration-500 rounded-full cursor-pointer border border-gray-100"> {isOpen ? <Xmark /> : <Bars />}</div>
        </button> 

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
          src="/logo.png"
          alt="Logo"
          className="mx-3"
          width={200}
          height={100}
          ></Image>
        </Link>
     
     <div className="flex items-center gap-4">
         {/* Desktop Menu */}
        <div className="hidden items-center  gap-5 md:flex">
         {links}
          <div className="h-6 hidden md:block w-px bg-gray-300"></div>
          {user?
        "":links2}
        </div>
 {user && (
        <div className=" ml-7 sticky top-0 z-20 ">
          <div className="flex gap-3  items-center p-2">
             <div className="p-1 border-2 flex rounded-full border-blue-800">
              {/* Dropdown */}
                <Dropdown>
      <Button isIconOnly aria-label="Menu">
        <Image  src={'/profile.png'}
            className="rounded-full"
            alt="Profile" width={40} height={40} />
      </Button>
      <Dropdown.Popover className="min-w-[256px] h-fit">
        <Dropdown.Menu
        >
          <Dropdown.Section className="flex flex-col text-center gap-5 justify-center items-center">
            <Dropdown.Item  className="text-center  text-xl gap-4 grid px-3 py-5 justify-center items-center" >
              <u className="font-bold"> User Info</u>
          <p>  {user.name}  <br/>
           {user.email}</p>
       <div className="flex gap-4 justify-center items-center">

        <div className="relative group flex flex-col items-center">
            <Button
             isIconOnly
             className="group flex items-center gap-2 overflow-hidden transition-all duration-300"
             onClick={async()=>{
              await authClient.signOut();
            }}>
              <ArrowUpRightFromSquare/>   
           </Button>
           <span className="absolute top-9 mt-1 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded shadow-lg z-50">
    Logout
  </span>
        </div>
          
   <Button isIconOnly variant="tertiary" className="border border-gray-300"><PencilToLine/>
           </Button>
       </div>
            </Dropdown.Item>
         
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
             
              </div>
            <div>Hello, {user.name}</div>
           
          </div>
        </div>
      )}
     </div>
       
      </div> 

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t sticky top-0 z-20 md:hidden">
          <div className="flex flex-col gap-4 p-4">
           {links}
           {user?"":links2}
          </div>
        </div>
      )}


     


    </nav>
 

    
  );
}