import React from 'react'
import { Button } from '../ui/button'
import { BadgeCheck, Hospital, PersonStanding, Smile, Truck } from 'lucide-react'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-[white] lg:from-[30%] to-[80%] relative min-h-screen">
    <div className="absolute top-0 left-0 w-full h-full -z-10 flex justify-end bg-[url(/img/hero.png)] bg-cover">
      {/* <img src="/img/hero.png" alt="" className="w-full object-top h-full object-cover"/> */}
    </div>
    <div className="container max-w-6xl mx-auto pt-80 md:pt-80 pb-40 px-5 md:px-10 mt-10 md:mt-0">
      <div className="space-y-2 md:space-y-4 max-w-3xl">
        <h1
          className="text-[2.1em] leading-[2.5rem] opacity-85 md:text-5xl lg:text-[3.2rem] lg:leading-[3.4rem] md:max-w-[550px]">
          Your Health 
          <span className="font-bold"> is always in the first place</span>
        </h1>
        <p className="text-destructive/60 text-xl md:text-2xl">
        Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
        </p>
        <Button
          variant="solid"
          className="bg-primary rounded-[30px] text-primary-foreground hover:bg-primary/90">
          Book Appointment
        </Button>
      </div>
    </div>
    <div className="mt-20 bg-gradient-to-r from-[#30ccebd8] to-[#1eb4f4d7] py-12 text-[white] w-full">
      <div className="container max-w-6xl mx-auto grid justify-center text-center md:text-start px-10 md:ps-20 md:grid-cols-2 lg:flex lg:justify-end gap-y-9 gap-x-14">
        <div className="">
          <div className="flex gap-2 justify-center md:justify-start items-center">
            <Smile className="w-8 h-8"/>
            <div className="text-5xl">3476</div>
          </div>
          <div className="text-lg opacity-75">Satisfied Customers</div>
        </div>
        <div className="">
          <div className="flex gap-2 justify-center md:justify-start items-center">
            <Hospital className="w-8 h-8"/>
            <div className="text-5xl">248</div>
          </div>
          <div className="text-lg opacity-75">Hospitals</div>
        </div>
        <div className="">
          <div className="flex gap-2 justify-center md:justify-start items-center">
            <BadgeCheck className="w-8 h-8"/>
            <div className="text-5xl">400+</div>
          </div>
          <div className="text-lg opacity-75">Qualified Doctors</div>
        </div>
        <div className="">
          <div className="flex gap-2 justify-center md:justify-start items-center">
            <Truck className="w-8 h-8"/>
            <div className="text-5xl">34</div>
          </div>
          <div className="text-lg opacity-75">Departments</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
