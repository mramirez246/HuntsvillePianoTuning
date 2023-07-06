import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'
import { text } from 'express'

export default function Component() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.pathname

    function openNav() {
        if (window.innerWidth < 600) {
            document.querySelector(".nav-body").style.width = "100vw";
        } else if (window.innerWidth < 800) {
            document.querySelector(".nav-body").style.width = "50vw";
        } else if (window.innerWidth < 1000) {
            document.querySelector(".nav-body").style.width = "40vw";
        } else if (window.innerWidth < 1200) {
            document.querySelector(".nav-body").style.width = "35vw";
        } else {
            document.querySelector(".nav-body").style.width = "20vw";
        }
    }

    function closeNav() {
        document.querySelector(".nav-body").style.width = "0";
    }

    useEffect(() => {
        closeNav()
    }, [])

    return (
        <div className='roboto'>
            
        </div>
    )
}