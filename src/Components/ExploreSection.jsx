import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';



const ExploreSection = () => {
    return (
        <div id='explore' className="bg-[url('/ctabg.png')] grid gap-2 justify-center items-center bg-center p-10 h-full">
            <h2 className="text-4xl font-bold text-white text-center">
                Your next role is 
                already looking for you
            </h2>
            <p className="text-lg text-zinc-400 text-center mt-4">
                Build a profile in three minutes. The matches start arriving tomorrow morning.
            </p>
            <div className="flex justify-center mt-6">
               <Link href={'/register'}>
                <Button variant='bordered' className="bg-white text-black hover:bg-zinc-200">
                    Create a free account
                </Button></Link>
                <Button variant="outline" className="ml-4 bg-transparent border-white text-white hover:bg-white hover:text-black">
                    View Pricing
                </Button> 
            </div>
        </div>
    );
};

export default ExploreSection;