import { Hospital } from 'lucide-react'
import React from 'react'
import { FaAmbulance, FaBed, FaBookMedical, FaCheck, FaCheckCircle, FaRegCheckCircle, FaUserCheck, FaUserGraduate } from "react-icons/fa";
import { Button } from '../ui/button';

function Comprehensive() {
    return (
        <section className='min-h-screen py-20 px-10 text-[black]/80'>
            <div className='max-w-6xl mx-auto overflow-hidden'>
                <div className='grid lg:grid-cols-5 lg:grid-rows-3'>
                    <div className="min-h-52 flex py-7 px-5 justify-center lg:justify-start flex-col gap-4 hover:bg-[#20cbff]/20 cursor-pointer duration-300 border border-destructive/20 lg:border-e-0 lg:border-b-0">
                        <Hospital className='text-[#39c3ff] size-9'/>
                        <div className='text-2xl'>Diagnostics and emergency treatment</div>
                    </div>
                    <div className="min-h-52 flex py-7 px-5 justify-center lg:justify-start flex-col gap-4 hover:bg-[#20cbff]/20 cursor-pointer duration-300 border border-destructive/20 lg:border-b-0">
                        <FaUserCheck className='text-[#39c3ff] size-9'/>
                        <div className='text-2xl'>Home Medical Appointment</div>
                    </div>
                    <div className="min-h-52 flex py-7 px-5 justify-center lg:justify-start flex-col gap-4 hover:bg-[#20cbff]/20 cursor-pointer duration-300 border border-destructive/20 lg:border-s-0 lg:border-b-0">
                        <FaRegCheckCircle className='text-[#39c3ff] size-9'/>
                        <div className='text-2xl'>Pharmacy refunded from hospital</div>
                    </div>
                    <div className="min-h-52 flex p-5 justify-center lg:justify-start items-center gap-4 border border-destructive/20 lg:border-0 lg:col-span-2">
                        <div className='text-3xl font-semibold'>Comprehensive services for our patients</div>
                    </div>
                    <div className="min-h-52 flex py-7 px-5 justify-center lg:justify-start flex-col gap-4 hover:bg-[#20cbff]/20 cursor-pointer duration-300 border border-destructive/20 lg:border-e-0">
                        <FaBookMedical className='text-[#39c3ff] size-9'/>
                        <div className='text-2xl'>Long term medical care in hospital</div>
                    </div>
                    <div className="min-h-52 border hover:bg-[#20cbff]/20 cursor-pointer duration-300 border-destructive/20 lg:row-span-2 lg:h-auto relative p-8">
                        <img src='img/blog2.png' alt='' className='w-full h-full absolute top-0 left-0 -z-10 object-cover' />
                        <div className='text-sm text-secondary uppercase'>Mission</div>
                        <div className='text-xl mt-2 font-semibold'>The correct diagnosis is half the battle</div>
                    </div>
                    <div className="min-h-52 border hover:bg-[#20cbff]/20 cursor-pointer duration-300 border-destructive/20 lg:border-s-0 relative p-8 overflow-hidden">
                        <img src='img/service2.png' alt='' className='w-full h-full absolute top-0 left-0 -z-10 object-cover object-top' />
                        <div className='text-sm text-secondary uppercase'>Mission</div>
                        <div className='text-xl mt-2 font-semibold'>The correct diagnosis is half the battle</div>
                    </div>
                    <div className="min-h-52 flex py-7 px-5 justify-center lg:justify-start flex-col gap-4 hover:bg-[#20cbff]/20 cursor-pointer duration-300 border border-destructive/20 lg:border-s-0">
                        <FaBed className='text-[#39c3ff] size-9'/>
                        <div className='text-2xl'>A specizlized laboratory research</div>
                    </div>
                    <div className="min-h-52 flex py-7 px-5 justify-center lg:justify-start flex-col gap-4 hover:bg-[#20cbff]/20 cursor-pointer duration-300 border border-destructive/20 lg:border-s-0">
                        <FaAmbulance className='text-[#39c3ff] size-9'/>
                        <div className='text-2xl'>Medical transport to the hospital</div>
                    </div>
                    <div className="min-h-52 lg:block hidden"></div>
                    <div className="min-h-52 flex gap-2 p-5 flex-col justify-center lg:col-span-3 border border-destructive/20 lg:border-0">
                        <div className="opacity-80">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
                        <Button
                        variant="solid"
                        className="bg-primary rounded-[30px] text-primary-foreground hover:bg-primary/90 me-auto">
                        View services
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comprehensive
