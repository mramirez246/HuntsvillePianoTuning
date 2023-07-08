import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock3.jpg'

export default function Products1() {
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
                        <Text text="Our Products" fontSize="10vw" weight="500" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="0.5em" paddingH="1em" classes="" />
                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                    ]} orientation="column" template="1fr" gap="1em" classes="padding" />
                    <Box comp={<div></div>} width="" height="" radius="" paddingV="2vh" paddingH="0" classes="" />

                    <Box comp={
                        <Grid comps={[
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>
                        ]} orientation="column" template="1fr" gap="1em" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                </div>
            } smalltablet={
                <div>
                    <Box comp={
                        <Text text="Our Products" fontSize="10vw" weight="500" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="0.5em" paddingH="1em" classes="" />
                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                    ]} orientation="column" template="1fr" gap="1em" classes="padding" />
                    <Box comp={<div></div>} width="" height="" radius="" paddingV="2vh" paddingH="0" classes="" />

                    <Box comp={
                        <Grid comps={[
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>
                        ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                </div>
            } tablet={
                <div>
                    <Box comp={
                        <Text text="Our Products" fontSize="6vw" weight="500" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="0.5em" paddingH="1em" classes="" />
                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                    ]} orientation="column" template="5fr 4fr" gap="1em" classes="padding" />
                    <Box comp={<div></div>} width="" height="" radius="" paddingV="2vh" paddingH="0" classes="" />

                    <Box comp={
                        <Grid comps={[
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>
                        ]} orientation="column" template="1fr 1fr" gap="1.2em" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="2em" classes="" />
                </div>
            } smalllaptop={
                <div>
                    <Box comp={
                        <Text text="Our Products" fontSize="5vw" weight="500" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="0.5em" paddingH="1em" classes="" />
                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    ]} orientation="column" template="5fr 4fr" gap="1em" classes="padding" />
                    <Box comp={<div></div>} width="" height="" radius="" paddingV="2vh" paddingH="0" classes="" />

                    <Box comp={
                        <Grid comps={[
                            <div>
                                <Text text="Product Bagel" fontSize="1.5em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.5em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.5em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.4em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.5em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.5em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.5em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>
                        ]} orientation="column" template="1fr 1fr 1fr" gap="1.2em" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="2em" classes="" />
                </div>
            } desktop={
                <div>
                    <Box comp={
                        <Text text="Our Products" fontSize="4vw" weight="500" color="" spacing="-2px" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="0.5em" paddingH="1em" classes="" />
                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    ]} orientation="column" template="5fr 4fr" gap="1em" classes="padding" />
                    <Box comp={<div></div>} width="" height="" radius="" paddingV="2vh" paddingH="0" classes="" />

                    <Box comp={
                        <Grid comps={[
                            <div>
                                <Text text="Product Bagel" fontSize="1.6em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.6em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.6em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.6em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.6em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.6em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>,
                            <div>
                                <Text text="Product Bagel" fontSize="1.6em" weight="400" color="" spacing="-1px" lineHeight="" classes="" />
                                <Image src={img1} alt="" radius="" classes="" />
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </div>
                        ]} orientation="column" template="1fr 1fr 1fr 1fr" gap="1.2em" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="2em" classes="" />
                </div>
            } />

            <Footer1 />
        </div>
    )
}