import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

function Schedule() {
  return (
    <section className="bg-muted py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Schedule a Visit</h2>
              <p className="text-muted-foreground text-lg md:text-xl">Fill out the form to book your appointment.</p>
            </div>
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-4">
                <Input label="First Name" placeholder="Enter your first name" />
                <Input label="Last Name" placeholder="Enter your last name" />
                <Input label="Email" type="email" placeholder="Enter your email" />
                <Input label="Phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="grid gap-4">
                <Textarea label="Reason for Visit" placeholder="Describe your medical concern" />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="flex-col items-start w-full h-auto">
                      <span className="font-semibold uppercase text-[0.65rem]">Preferred Date</span>
                      <span className="font-normal">4/2/2024</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
                <Button type="submit" size="lg">
                  Schedule Appointment
                </Button>
              </div>
            </form>
          </div>
        </section>
  )
}

export default Schedule
