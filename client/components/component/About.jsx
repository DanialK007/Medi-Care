import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:pt-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">About MediCare Hospital</h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Learn more about our state-of-the-art facility and experienced medical team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div>
                <img
                  src="/img/coverbg2.png"
                  width="550"
                  height="610"
                  alt="Hospital"
                  className="rounded-lg object-cover h-[300px]" />
              </div>
              <div className="space-y-4">
                <p>
                  Acme Hospital is a leading healthcare provider in the region, offering a wide range of medical
                  services to patients of all ages. Our state-of-the-art facility is equipped with the latest technology
                  and staffed by a team of experienced and compassionate medical professionals.
                </p>
                <p>
                  At Acme Hospital, we are committed to providing exceptional care and ensuring the well-being of our
                  patients. Our mission is to deliver personalized healthcare solutions that address the unique needs of
                  each individual.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                  prefetch={false}>
                  Learn More <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About
