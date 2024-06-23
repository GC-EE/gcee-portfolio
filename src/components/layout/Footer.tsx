import React from 'react';
import Social from '@/components/home/Social';
import { CiMail } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="border-borderGray mt-20 border-t-[1px] py-8 text-white xl:py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 xl:flex-row">
        <div className="order-2 xl:order-none">
          <div className="flex items-center gap-2">
            <CiMail />
            <p className="text-center">Email: irontwoya@gmail.com</p>
          </div>

          <p className="text-center">© Jake. All Rights Reserved.</p>
        </div>
        <Social
          containerStyles="flex gap-6  xl:order-none order-1"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        />
      </div>
    </footer>
  );
};

export default Footer;
