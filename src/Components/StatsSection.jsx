



import React from 'react';
import {BriefcaseFill
    ,Factory,
    StarFill,Magnifier
} from '@gravity-ui/icons';
const StatsSection = () => {
    return (
       <section className="px-5 p-20  grid gap-3 bg-[url('/globe.png')] bg-cover  h-full justify-center place-items-end-safe bg-center ">

<div></div>
<div></div>
<div></div>
    <h2 className="max-w-2xl  text-center mx-auto text-3xl font-medium text-white ">
      Assisting over 15,000 job seekers find their dream positions.
    </h2>

  {/* Cards */}
  <div className=" grid w-full max-w-7xl m-2 gap-4 p-4 md:grid-cols-4">
    <div className="rounded-2xl grid items-center justify-start border-blue-900 border-2 bg-transparent p-6 backdrop-blur">
        <BriefcaseFill/>
      <p className="text-5xl font-bold text-white">50K</p>
      <p className="mt-2 text-zinc-400">Active Jobs</p>
    </div>

    <div className="rounded-2xl grid items-center justify-start border-black border-2 bg-transparent p-6 ">
      <Factory/>
      <p className="text-5xl font-bold text-white">12K</p>
      <p className="mt-2 text-zinc-400">Companies</p>
    </div>

    <div className="rounded-2xl grid items-center justify-start border-black border-2 bg-transparent p-6 ">
        <Magnifier/>
      <p className="text-5xl font-bold text-white">2M</p>
      <p className="mt-2 text-zinc-400">Job Seekers</p>
    </div>

    <div className="rounded-2xl grid items-center justify-start border-blue-900 border-2 bg-transparent p-6 backdrop-blur">
        <StarFill/>
      <p className="text-5xl font-bold text-white">97%</p>
      <p className="mt-2 text-zinc-400">Satisfaction Rate</p>
    </div>
  </div>
</section>
    );
};

export default StatsSection;