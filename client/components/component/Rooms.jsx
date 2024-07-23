'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SearchIcon } from 'lucide-react'

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
        <div className='p-10'>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Available Rooms</h2>
                <div className="flex items-center gap-2">
                <Input
                    type="text"
                    placeholder="Search rooms"
                    className="max-w-xs" />
                <Button variant="outline">
                    <SearchIcon className="h-4 w-4" />
                </Button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 gap-5'>
            {rooms.map(room => 
                <div key={room._id} className='bg-primary/20'>
                    <div className='h-44 bg-primary mb-2'></div>
                    <div className='p-4'>
                    <div className='text-xl font-semibold'>{room.name}</div>
                    <div className=''>{room.description}</div>
                    <div></div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Rooms
