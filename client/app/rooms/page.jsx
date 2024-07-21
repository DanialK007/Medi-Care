import Navbar from '@/components/component/Navbar'
import Rooms from '@/components/component/Rooms'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <div className='mt-20 p-10 px-20'>
        <Rooms />
      </div>
    </>
  )
}

export default page
