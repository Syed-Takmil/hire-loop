"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import {Check, Eye, EyeClosed} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import {  toast } from 'react-toastify';

export default function CustomRenderFunction() {
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
if(error.status!=200){
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
      className="border-2 rounded-2xl bg-black/70 p-5 flex w-96 flex-col gap-4"
      onSubmit={onSubmit}
    >
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

      <div className="flex gap-2">
        <Button type="submit" isLoading={loading}>
            {loading? "Logging in..." : "Login"}
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
</div>
  );
}