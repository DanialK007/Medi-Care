import React from 'react'
import { Card, CardContent } from '../ui/card'
import { CheckIcon } from 'lucide-react'
import { Button } from '../ui/button'

function Department() {
  return (
    <section className="px-10 bg-muted py-12 md:py-24">
        <div className="container">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold pb-5">Our Departments</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
            Discover our department for more information
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            {
                name: "Pediatrics",
                description: "Our pediatric department provides comprehensive care for children of all ages.",
                services: ["Well-child visits", "Immunizations", "Sick visits"],
            },
            {
                name: "Cardiology",
                description:
                "Our cardiology department specializes in the diagnosis and treatment of heart conditions.",
                services: ["Echocardiograms", "Stress tests", "Cardiac catheterization"],
            },
            {
                name: "Dermatology",
                description:
                "Our dermatology department offers a wide range of treatments for skin, hair, and nail conditions.",
                services: ["Acne treatment", "Skin cancer screening", "Laser treatments"],
            },
            {
                name: "Orthopedics",
                description:
                "Our orthopedic department specializes in the diagnosis and treatment of musculoskeletal conditions.",
                services: ["Joint replacement", "Fracture care", "Physical therapy"],
            },
            {
                name: "Obstetrics",
                description:
                "Our obstetrics department provides comprehensive care for women throughout their pregnancy and postpartum.",
                services: ["Prenatal care", "Delivery services", "Postpartum care"],
            },
            {
                name: "Neurology",
                description:
                "Our neurology department specializes in the diagnosis and treatment of conditions affecting the brain, spinal cord, and nervous system.",
                services: ["Stroke treatment", "Epilepsy management", "Headache treatment"],
            },
            ].map((department, index) => (
            <Card key={index}>
                <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold">{department.name}</h3>
                <p className="text-muted-foreground">{department.description}</p>
                <ul className="space-y-2 text-muted-foreground">
                    {department.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                        {service}
                    </li>
                    ))}
                </ul>
                <Button variant="outline" className="ml-auto">
                    Learn More
                </Button>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Department
