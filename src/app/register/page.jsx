"use client";


import React from "react";
import {Description, Label, Radio, RadioGroup} from "@heroui/react";
import {Button, FieldError, Form, Input, TextField} from "@heroui/react";
import { authClient } from '../../lib/auth-client';
import {  toast } from 'react-toastify';
import { Eye, EyeClosed, EyeSlash } from "@gravity-ui/icons";

export default function SignUpPage() {
    const [role, setRole] = React.useState("seeker");
    const [isShowPassword, setIsShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
  const onSubmit = async (e) => {
    
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData.entries());
const finalRole=userdata.role || role; // Fallback to state if form value is not present
    const { data, error } = await authClient.signUp.email({
    name: userdata.username, 
    email: userdata.email,  
    password: userdata.password, 
    role: finalRole,
    callbackURL: "/login?registered=true",
});
if(error){
     toast.error(error.message || "An error occurred during registration.");
    setLoading(false);
}
else{
    toast.success("Account created successfully! .");
     window.location.href = "/login?registered=true";
}

  };   

  return (
   <div className="min-h-screen grid   items-center justify-center bg-[url('/ctabg.png')] w-full bg-clip-content  bg-center">
     <Form  onSubmit={onSubmit}
     className="flex m-3 w-full bg-black/40 hover:-translate-y-3 p-12 flex-col gap-4  mx-auto my-5 border-2 hover:border-blue-500 transition-all duration-500 rounded-2xl" >
  <h2 className='text-2xl font-bold text-center'>Create Account</h2>
  <p className='text-center text-zinc-400'  >
    Fill in the Fields below to create your account for free
  </p>
<div className='h-3 border-b border-gray-300'></div>
         <TextField
        isRequired
        name="username"
        type="text"
      >
        <Label>Username</Label>
        <Input placeholder="john_doe" />
        <FieldError />
      </TextField>
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
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
         <div className='cursor-pointer absolute top-9 right-5 ' onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword ?<EyeSlash/>: <Eye/> }</div>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

 <div className="flex gap-5 m-4">
      <Label>Select Role</Label>
      <RadioGroup defaultValue="seeker" onChange={(v)=>setRole(v)} name="role" orientation="horizontal">
        <Radio value="seeker">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Job Seeker</Label>
          </Radio.Content>
        </Radio>
        <Radio value="recruiter">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Recruiter</Label>
          </Radio.Content>
        </Radio>
      </RadioGroup>
      </div>
      <div className=" w-full flex justify-center gap-4 items-center">
        <Button className="w-full" type="submit" isLoading={loading}>
           {loading
    ? "Creating Account..."
    : "Create Account"}
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>

   <p className="text-center text-lg">
       Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login </a>
   </p>
    </Form>
   </div>
  );
}