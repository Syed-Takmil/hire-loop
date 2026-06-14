"use client";

import React, { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import {Check, Eye, EyeClosed} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import {  toast } from 'react-toastify';
import { useSearchParams } from "next/navigation";

export default function LoginPage() {


    const searchParams=useSearchParams();
    useEffect(() => {
        if (searchParams.get("registered") === "true") {
            toast.success("Account created successfully! Please log in.");
            window.history.replaceState(null, "", "/login");
        }
    }, [searchParams]);

    const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
 const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
    email: userdata.email, 
    password: userdata.password, // re
    callbackURL: "/",
});
if(error){
     toast.error(error.message || "An error occurred during registration.");
    setLoading(false);
}
else{
    toast.success("Logged in successfully! .");
    setTimeout(() => {
        window.location.href = "/";
    }, 2000);
}

  };
  return (
<div className=" grid   items-center justify-center bg-[url('/ctabg.png')] w-full bg-clip-content  bg-center">
    <legend className="text-xl font-bold m-2">Login</legend>
    
  
     <Form
      className="border-2 rounded-2xl bg-black/70 p-5 flex  flex-col gap-3"
      onSubmit={onSubmit}
    > 
    <h2 className="text-lg text-center text-white">Welcome back!</h2>
    <p className="text-center text-zinc-400"  >
    Please enter your credentials to log in to your account
  </p>
   < div className="h-3 border-b border-gray-300 w-full max-w-md mx-auto mt-1"></div>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        className="relative"
        type={isShowPassword ? "text" : "password"}
        endContent={
          <Button
          className='relative'
            variant="ghost"
            isIconOnly
          >
          </Button>
        }
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <div className='cursor-pointer absolute top-9 right-5 ' onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword ? <Eye/> : <EyeClosed />}</div>
        <FieldError />
      </TextField>

      <div className="flex w-full gap-2">
        <Button type="submit" className='w-full' isLoading={loading}>
            {loading? "Logging in..." : "Login"}
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>

    <p className="text-center text-lg">
        New To Hire-Loop? <a href="/register" className="text-blue-500 hover:underline">Register for free </a>
    </p>
  
    </Form>
</div>
  );
}