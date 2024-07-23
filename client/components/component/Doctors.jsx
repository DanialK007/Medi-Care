"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SearchIcon, StarIcon } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Avatar } from '../ui/avatar'
import { Separator } from '@radix-ui/react-separator'

function Doctors() {
    const [doctors, setDoctors ] = useState([])

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('/api/doctors/getalldoctors')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const json = await response.json()
                setDoctors(json)
            } catch (err) {
                console.error('Error fetching doctors:', err)
            }
        }
        fetchDoctors()
    }, [])

  return (
    <section className="px-10 py-12 md:py-24">
        <div className="container">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Our Doctors</h2>
                <div className="flex items-center gap-2">
                <Input
                    type="text"
                    placeholder="Search by name, specialty, or location"
                    className="max-w-xs" />
                <Button variant="outline">
                    <SearchIcon className="h-4 w-4" />
                </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor, index) => (
                <Card key={index}>
                    <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                        <Avatar
                        className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center rounded-full">
                        {doctor.name.charAt(0)}
                        </Avatar>
                        <div>
                        <h3 className="font-semibold">{doctor.name}</h3>
                        <p className="text-muted-foreground">{doctor.specialty}</p>
                        <p className="text-muted-foreground">{doctor.location}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-xs font-semibold">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <span>{doctor.rating}</span>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <Button variant="outline" className="ml-auto">
                        Book Appointment
                        </Button>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Doctors
