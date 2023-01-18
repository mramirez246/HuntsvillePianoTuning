import React from 'react'
// 
import '../../STYLESHEETS/Failure.css'
// 
import { BsFillXCircleFill } from 'react-icons/bs'

export default function Failure() {
    return (
        <div className='failure-wrap'>
            <div className='failure'>
                <BsFillXCircleFill color="red" />
            </div>
        </div>
    )
}
