import React from 'react'
import { Card, CardContent } from '../ui/card'
import { AmbulanceIcon, HeartPulseIcon, MicroscopeIcon, PillBottleIcon, ShipWheelIcon, StethoscopeIcon } from 'lucide-react'

function Services() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
          <div className="px-10 mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
              <p className="text-muted-foreground text-lg md:text-xl">Explore our wide range of medical services.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <HeartPulseIcon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Cardiology</h3>
                  <p className="text-muted-foreground text-center">
                    Our expert cardiologists provide comprehensive heart health services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <MicroscopeIcon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Laboratory</h3>
                  <p className="text-muted-foreground text-center">
                    Our state-of-the-art laboratory offers accurate and reliable diagnostic services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <AmbulanceIcon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Emergency</h3>
                  <p className="text-muted-foreground text-center">
                    Our emergency department is equipped to handle any medical crisis.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <PillBottleIcon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Pharmacy</h3>
                  <p className="text-muted-foreground text-center">
                    Our on-site pharmacy provides convenient access to essential medications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <StethoscopeIcon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Outpatient Clinic</h3>
                  <p className="text-muted-foreground text-center">
                    Our outpatient clinic offers comprehensive medical care for all your needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <ShipWheelIcon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Physical Therapy</h3>
                  <p className="text-muted-foreground text-center">
                    Our physical therapy department helps you regain strength and mobility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Services
