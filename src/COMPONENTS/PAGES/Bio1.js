import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
// 
import img1 from '../../PHOTOS/stock5.jpg'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'

export default function Bio1() {
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
                <div className='padding'>
                    <Text text="My Biography" fontSize="6vh" weight="500" color="" spacing="" lineHeight="-1px" classes="" />
                    <Text text="A story told through the eyes of a bagel." fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                        <div className='vertical gap'>
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr" gap="1em" classes="" />

                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                        <div className='vertical gap'>
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr" gap="1em" classes="" />

                    <Box comp={
                        <Image src={img1} alt="" radius="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                </div>
            } smalltablet={
                <div className='padding'>
                    <Text text="My Biography" fontSize="6vh" weight="500" color="" spacing="" lineHeight="-1px" classes="" />
                    <Text text="A story told through the eyes of a bagel." fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                        <div className='vertical gap'>
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr 2fr" gap="1em" classes="" />

                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                        <div className='vertical gap'>
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr 2fr" gap="1em" classes="" />

                    <Box comp={
                        <Image src={img1} alt="" radius="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                </div>
            } tablet={
                <div className='padding'>
                    <Text text="My Biography" fontSize="6vh" weight="500" color="" spacing="" lineHeight="-1px" classes="" />
                    <Text text="A story told through the eyes of a bagel." fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Grid comps={[
                                <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 2fr" gap="1em" classes="" />

                            <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                            <Grid comps={[
                                <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 2fr" gap="1em" classes="" />


                        </div>
                    } width="90vw" height="" radius="" paddingV="" paddingH="1em" classes="" />
                    <Box comp={
                        <Image src={img1} alt="" radius="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                </div>
            } smalllaptop={
                <div className='padding'>
                    <Text text="My Biography" fontSize="8vh" weight="500" color="" spacing="" lineHeight="-1px" classes="" />
                    <Text text="A story told through the eyes of a bagel." fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Grid comps={[
                                <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 2fr" gap="1em" classes="" />

                            <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                            <Grid comps={[
                                <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 2fr" gap="1em" classes="" />


                        </div>
                    } width="90vw" height="" radius="" paddingV="" paddingH="1em" classes="" />
                    <Box comp={
                        <Image src={img1} alt="" radius="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                </div>
            } desktop={
                <div className='padding'>
                    <Text text="My Biography" fontSize="8vh" weight="500" color="" spacing="" lineHeight="-1px" classes="" />
                    <Text text="A story told through the eyes of a bagel." fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Grid comps={[
                                <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />

                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 2fr" gap="1em" classes="" />

                            <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />

                            <Grid comps={[
                                <Text text="It began here..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />

                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a." fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 2fr" gap="1em" classes="" />


                        </div>
                    } width="80vw" height="" radius="" paddingV="" paddingH="2em" classes="" />
                    <Box comp={
                        <Image src={img1} alt="" radius="" classes="" />
                    } width="" height="90vh" radius="" paddingV="1em" paddingH="0" classes="" />
                </div>
            } />
            <Footer1 />
        </div>
    )
}