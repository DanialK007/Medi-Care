import Doctors from '@/components/component/Doctors'
import Navbar from '@/components/component/Navbar'
import Rooms from '@/components/component/Rooms'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <div className='h-20'></div>
      <Rooms />
      <Doctors />
    </>
  )
}

export default page
