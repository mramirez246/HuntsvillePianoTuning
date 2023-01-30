import React, { Component } from 'react'
// 
import '../../STYLESHEETS/Modal.css'
// 
import { BsFillCheckCircleFill } from 'react-icons/bs'

export default class Modal extends Component {
    render() {
        return (
            <div className='modal'>
                <div className='modal-wrap bg2 color1 font1'>
                    <BsFillCheckCircleFill className='modal-icon color1' />
                    <br/>
                    <br/>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
