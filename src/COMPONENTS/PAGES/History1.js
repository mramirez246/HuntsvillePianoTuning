import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
// 
import img1 from '../../PHOTOS/stock3.jpg'
import img2 from '../../PHOTOS/stock4.jpg'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'

export default function History1() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.pathname

    // function openNav() {
    //     if (window.innerWidth < 600) {
    //         document.querySelector(".nav-body").style.width = "100vw";
    //     } else if (window.innerWidth < 800) {
    //         document.querySelector(".nav-body").style.width = "50vw";
    //     } else if (window.innerWidth < 1000) {
    //         document.querySelector(".nav-body").style.width = "40vw";
    //     } else if (window.innerWidth < 1200) {
    //         document.querySelector(".nav-body").style.width = "35vw";
    //     } else {
    //         document.querySelector(".nav-body").style.width = "20vw";
    //     }
    // }

    // function closeNav() {
    //     document.querySelector(".nav-body").style.width = "0";
    // }



    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <ResponsiveElements phone={
                <div>
                    <Box comp={
                        <Text text="Our History" fontSize="6vh" weight="" color="" spacing="-2px" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Image src={img1} alt="" radius="" classes="" />
                    <Box comp={
                        <div className='vertical gap'>
                            <Text text="The history of a bagel begins with a thing, but ends with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <Image src={img2} alt="" radius="" classes="fill" />
                    } width="" height="40vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <div className='vertical gap'>
                            <Text text="The history of a bagel ends with a thing, but begins with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <Image src={img2} alt="" radius="" classes="fill" />
                    } width="" height="40vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                </div>
            } smalltablet={
                <div>
                    <Box comp={
                        <Text text="Our History" fontSize="6vh" weight="" color="" spacing="-2px" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Image src={img1} alt="" radius="" classes="" />
                    <Box comp={
                        <div className='vertical gap'>
                            <Text text="The history of a bagel begins with a thing, but ends with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <Image src={img2} alt="" radius="" classes="fill" />
                    } width="" height="60vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <div className='vertical gap'>
                            <Text text="The history of a bagel ends with a thing, but begins with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <Image src={img2} alt="" radius="" classes="fill" />
                    } width="" height="60vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                </div>
            } tablet={
                <div>
                    <Box comp={
                        <Text text="Our History" fontSize="6vh" weight="" color="" spacing="-2px" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Image src={img1} alt="" radius="" classes="" />
                    <Box comp={
                        <div className='horizontal gap'>
                            <Text text="The history of a bagel begins with a thing, but ends with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <Image src={img2} alt="" radius="" classes="fill" />
                    } width="" height="70vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <div className='horizontal gap'>
                            <Text text="The history of a bagel ends with a thing, but begins with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                    <Box comp={
                        <Image src={img2} alt="" radius="" classes="fill" />
                    } width="" height="70vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                </div>
            } smalllaptop={
                <div>
                    <div>
                        <Box comp={
                            <Text text="Our History" fontSize="6vh" weight="" color="" spacing="-2px" lineHeight="" classes="" />
                        } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                        <Image src={img1} alt="" radius="" classes="" />
                    </div>
                    <Box comp={
                        <div>
                            <Box comp={
                                <div className='horizontal gap'>
                                    <Text text="The history of a bagel begins with a thing, but ends with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                            <Box comp={
                                <div className='horizontal gap'>
                                    <Text text="The history of a bagel ends with a thing, but begins with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                        </div>
                    } width="80vw" height="" radius="" paddingV="1em" paddingH="0" classes="center" />

                </div>
            } desktop={
                <div>
                    <div>
                        <Box comp={
                            <Text text="Our History" fontSize="6vh" weight="" color="" spacing="-2px" lineHeight="" classes="" />
                        } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                        <Image src={img1} alt="" radius="" classes="" />
                    </div>
                    <Box comp={
                        <div>
                            <Box comp={
                                <div className='horizontal gap'>
                                    <Text text="The history of a bagel begins with a thing, but ends with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                            <Box comp={
                                <div className='horizontal gap'>
                                    <Text text="The history of a bagel ends with a thing, but begins with the cheese." fontSize="1.5em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="1em" paddingH="1em" classes="" />
                        </div>
                    } width="70vw" height="" radius="" paddingV="2em" paddingH="0" classes="center" />

                </div>
            } />
            <Footer1 />
        </div>
    )
}