import { HospitalIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground py-6 absolute top-0 left-0 w-full z-50">
        <div className="container flex items-center justify-between px-10">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <HospitalIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">MedCare</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Find Doctors
            </Link>
            <Link href="/rooms" className="hover:underline underline-offset-4" prefetch={false}>
              Rooms
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button className="bg-secondary">Book Appointment</Button>
        </div>
      </header>
  )
}

export default Navbar
