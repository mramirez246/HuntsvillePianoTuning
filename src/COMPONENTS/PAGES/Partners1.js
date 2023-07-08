import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock4.jpg'

export default function Partners1() {
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
                    <Text text="Partners" fontSize="6vh" weight="400" color="" spacing="" lineHeight="" classes="" />
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <div>
                            <Box comp={
                                <div className='v-separate'>
                                    <Box comp={
                                        <Underline comp={
                                            <Text text="Visit Website" fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        } size="1px" color="" />
                                    } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                    <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                        </div>
                    ]} orientation="column" template="1fr" gap="1em" classes="" />

                    <Box comp={<hr />} width="75vw" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <div>
                            <Box comp={
                                <div className='v-separate'>
                                    <Box comp={
                                        <Underline comp={
                                            <Text text="Visit Website" fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        } size="1px" color="" />
                                    } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                    <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                        </div>
                    ]} orientation="column" template="1fr" gap="1em" classes="" />

                </div>
            } smalltablet={
                <div className='padding'>
                    <Text text="Partners" fontSize="6vh" weight="400" color="" spacing="" lineHeight="" classes="" />
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <div>
                            <Box comp={
                                <div className='v-separate'>
                                    <Box comp={
                                        <Underline comp={
                                            <Text text="Visit Website" fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        } size="1px" color="" />
                                    } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                    <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                        </div>
                    ]} orientation="column" template="1fr" gap="1em" classes="" />

                    <Box comp={<hr />} width="65vw" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <div>
                            <Box comp={
                                <div className='v-separate'>
                                    <Box comp={
                                        <Underline comp={
                                            <Text text="Visit Website" fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        } size="1px" color="" />
                                    } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                    <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                        </div>
                    ]} orientation="column" template="1fr" gap="1em" classes="" />

                </div>
            } tablet={
                <div className='padding'>
                    <Box comp={
                        <div>
                            <Text text="Partners" fontSize="6vh" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="80vw" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <div>
                            <Box comp={
                                <div className='v-separate'>
                                    <Box comp={
                                        <Underline comp={
                                            <Text text="Visit Website" fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        } size="1px" color="" />
                                    } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                    <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                        </div>
                    ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />

                    <Box comp={<hr />} width="65vw" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Grid comps={[
                        <Image src={img1} alt="" radius="" classes="" />,
                        <div>
                            <Box comp={
                                <div className='v-separate'>
                                    <Box comp={
                                        <Underline comp={
                                            <Text text="Visit Website" fontSize="1.1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        } size="1px" color="" />
                                    } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                    <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                        </div>
                    ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />

                </div>
            } smalllaptop={
                <div className='padding'>
                    <Box comp={
                        <div>
                            <Text text="Partners" fontSize="6vh" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="80vw" height="" radius="" paddingV="0" paddingH="1em" classes="" />

                    <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Box comp={
                        <div>
                            <Grid comps={[
                                <Image src={img1} alt="" radius="" classes="" />,
                                <div>
                                    <Box comp={
                                        <div className='v-separate'>
                                            <Box comp={
                                                <Underline comp={
                                                    <Text text="Visit Website" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                } size="1px" color="" />
                                            } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                            <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="padding-v" />
                                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </div>
                                    } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />

                            <Box comp={<hr />} width="65vw" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Grid comps={[
                                <Image src={img1} alt="" radius="" classes="" />,
                                <div>
                                    <Box comp={
                                        <div className='v-separate'>
                                            <Box comp={
                                                <Underline comp={
                                                    <Text text="Visit Website" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                } size="1px" color="" />
                                            } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                            <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="padding-v" />
                                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </div>
                                    } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />
                        </div>
                    } width="80vw" height="" radius="" paddingV="" paddingH="" classes="" />

                </div>
            } desktop={
                <div className='padding'>
                    <Box comp={
                        <div>
                            <Text text="Partners" fontSize="6vh" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="65vw" height="" radius="" paddingV="0" paddingH="1em" classes="" />

                    <Box comp={<hr />} width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Box comp={
                        <div>
                            <Grid comps={[
                                <Image src={img1} alt="" radius="" classes="" />,
                                <div>
                                    <Box comp={
                                        <div className='v-separate'>
                                            <Box comp={
                                                <Underline comp={
                                                    <Text text="Visit Website" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                } size="1px" color="" />
                                            } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                            <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="padding-v" />
                                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </div>
                                    } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />

                            <Box comp={<hr />} width="65vw" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Grid comps={[
                                <Image src={img1} alt="" radius="" classes="" />,
                                <div>
                                    <Box comp={
                                        <div className='v-separate'>
                                            <Box comp={
                                                <Underline comp={
                                                    <Text text="Visit Website" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                } size="1px" color="" />
                                            } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                            <Text text="Bagel Partner" fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="padding-v" />
                                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </div>
                                    } width="" height="" radius="" paddingV="" paddingH="" classes="padding-v" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />


                        </div>
                    } width="70vw" height="" radius="" paddingV="" paddingH="" classes="" />

                </div>
            } />
            <Footer1 />
        </div>
    )
}