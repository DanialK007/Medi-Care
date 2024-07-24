"use client";

import { HospitalIcon, LocateFixedIcon, Menu, Phone } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import classNames from 'classnames';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gradient-to-b from-[white] from-40% pt-6 pb-20 absolute top-0 left-0 w-full z-50 p-5">
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between md:py-5'>
          <div className='text-4xl font-bold'>
            <span className='text-secondary'>Medi</span>
            <span className='text-primary'>Care</span>
          </div>
          <div className='hidden md:flex justify-between ps-20 gap-5'>
            <div className='flex gap-2 justify-end'>
              <div>
                <div className=''>09-255-599-863</div>
                <div className=''>09-255-599-844</div>
              </div>
              <div className='w-10 h-10 p-2 text-primary-foreground bg-primary rounded-[100%]'>
                <Phone className='w-full h-full'/>
              </div>
            </div>
            <div className='flex gap-2 justify-end'>
              <div>
                <div className=''>88 Route West 21th Street,</div>
                <div className=''>Suite 721 New York NY 10016</div>
              </div>
              <div className='w-10 h-10 p-2 text-primary-foreground bg-primary rounded-[100%]'>
                <LocateFixedIcon className='w-full h-full'/>
              </div>
            </div>
          </div>
          <button className='md:hidden' onClick={toggleMenu}>
            <Menu className={classNames('w-8 h-8 opacity-60 duration-300', menuOpen && "rotate-90")}/>
          </button>
        </div>
        <div className={classNames('flex flex-col items-end md:flex-row overflow-hidden gap-y-2 gap-x-6 font-semibold opacity-70 uppercase py-2 duration-300 pt-5 md:pt-0 text-lg md:text-base md:opacity-70 md:h-fit', menuOpen ? "opacity-70 h-56" : "opacity-0 h-0")}>
          <Link href="/" className='hover:text-primary hover:underline'>Home</Link>
          <Link href="/" className='hover:text-primary hover:underline'>Doctor</Link>
          <Link href="/" className='hover:text-primary hover:underline'>Services</Link>
          <Link href="/" className='hover:text-primary hover:underline'>Departments</Link>
          <Link href="/" className='hover:text-primary hover:underline'>Blog</Link>
          <Link href="/" className='hover:text-primary hover:underline'>Contact</Link>
        </div>
         
      </div>
    </header>
  );
}

export default Navbar;
