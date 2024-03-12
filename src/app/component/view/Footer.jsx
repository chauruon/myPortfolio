import React from "react";
import Link from "next/link";
import Image from "next/image";


export const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className='rounded-full bg-[#181818] w-[50px] h-[50px] mt-1 md:hidden relative'>
          <Link href={'/'}>
            <Image className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src={'/images/doing-onlines.jpg'}
              priority={true} alt={''}
              width={300} height={300} />
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};
