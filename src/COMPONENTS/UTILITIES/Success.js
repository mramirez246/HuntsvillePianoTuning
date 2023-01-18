import React from 'react'
// 
import '../../STYLESHEETS/Success.css'
// 
import { BsFillCheckCircleFill } from 'react-icons/bs'

export default function Success() {
    return (
        <div className='success-wrap'>
            <div className='success'>
                <BsFillCheckCircleFill className='color2' />
            </div>
        </div>
    )
}
