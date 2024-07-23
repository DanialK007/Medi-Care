import { HospitalIcon, LocateFixedIcon, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Navbar() {
  return (
    <header className="bg-gradient-to-b from-[white] from-40% pt-6 pb-20 absolute top-0 left-0 w-full z-50 p-5">
       <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-2 py-5'>
          <div className='text-4xl font-bold'>
            <span className='text-secondary'>Medi</span>
            <span className='text-primary'>Care</span>
          </div>
          <div className='hidden md:flex justify-between ps-20'>
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
        </div>
        <div className='grid grid-cols-3 lg:flex gap-x-6 font-semibold opacity-70 uppercase py-2'>
          <Link href="/">Home</Link>
          <Link href="/">Doctor</Link>
          <Link href="/">Services</Link>
          <Link href="/">Departments</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
       </div>
    </header>
  )
}

export default Navbar
