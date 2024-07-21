'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Rooms() {
    const [rooms , setRooms] = useState([])

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('/api/rooms/getallrooms')
                const data = response.data
                setRooms(data)
            } catch (err) {
                console.error(err)
            }
        }

        fetchRooms()
    }, [])

    return (
        <div className=''>
            <div className='text-4xl font-semibold text-center uppercase text-destructive pb-8'>Rooms</div>
            <div className='grid lg:grid-cols-4 gap-5'>
            {rooms.map(room => 
                <div key={room._id} className='p-5 bg-primary/20 rounded-lg'>
                    <div className='h-44 bg-primary rounded-lg mb-2'></div>
                    <div className='text-xl font-semibold'>{room.name}</div>
                    <div className=''>{room.description}</div>
                    <div></div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Rooms
