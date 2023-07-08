import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, Recursive, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock5.jpg'

export default function Services1() {
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
                    <div className='padding'>
                        <Text text="Services" fontSize="8vh" weight="500" color="" spacing="" lineHeight="" classes="" />
                        <Image src={img1} alt="" radius="" classes="" />
                        <Box comp={
                            <Text text="Here's what we can do..." fontSize="1.6em" weight="500" color="" spacing="" lineHeight="0.8em" classes="text-right" />
                        } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                        <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    </div>

                    <Grid comps={[
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr" gap="1em" classes="" />

                </div>
            } smalltablet={
                <div>
                    <div className='padding'>
                        <Text text="Services" fontSize="8vh" weight="500" color="" spacing="" lineHeight="" classes="" />
                        <Image src={img1} alt="" radius="" classes="" />
                        <Box comp={
                            <Text text="Here's what we can do..." fontSize="2em" weight="500" color="" spacing="" lineHeight="0.8em" classes="text-right" />
                        } width="" height="" radius="" paddingV="1em" paddingH="1em" classes="" />
                        <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    </div>
                    <Grid comps={[
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />

                </div>
            } tablet={
                <div>
                    <div className='padding'>
                        <Text text="Services" fontSize="8vh" weight="500" color="" spacing="" lineHeight="" classes="" />
                        <Image src={img1} alt="" radius="" classes="" />
                        <Box comp={
                            <Text text="Here's what we can do..." fontSize="2em" weight="500" color="" spacing="" lineHeight="1em" classes="text-right" />
                        } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                        <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    </div>

                    <Grid comps={[
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />
                </div>
            } smalllaptop={
                <div>
                    <div className='padding'>
                        <Text text="Services" fontSize="8vh" weight="500" color="" spacing="" lineHeight="" classes="" />
                        <Image src={img1} alt="" radius="" classes="" />
                        <Box comp={
                            <Text text="Here's what we can do..." fontSize="2.5em" weight="500" color="" spacing="" lineHeight="0.8em" classes="text-right" />
                        } width="" height="" radius="" paddingV="1em" paddingH="0" classes=""/>
                        <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    </div>
                    <Grid comps={[
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />

                </div>
            } desktop={
                <div>
                    <div className='padding'>
                        <Text text="Services" fontSize="8vh" weight="500" color="" spacing="" lineHeight="" classes="" />
                        <Image src={img1} alt="" radius="" classes="" />
                        <Box comp={
                            <Text text="Here's what we can do..." fontSize="2.8em" weight="500" color="" spacing="" lineHeight="0.8em" classes="text-right" />
                        } width="" height="" radius="" paddingV="1.5em" paddingH="0" classes=""/>
                        <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    </div>
                    <Grid comps={[
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>,
                        <div className='vertical gap padding'>
                            <Box comp={
                                <div className='vertical gap'>
                                    <Text text="Everything Bagel Service" fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Image src={img1} alt="" radius="" classes="" />
                        </div>
                    ]} orientation="column" template="1fr 1fr 1fr" gap="1em" classes="" />

                </div>
            } />
            <Footer1 />
        </div>
    )
}