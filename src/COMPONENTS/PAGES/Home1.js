import React from 'react'
import { Accordion, Border, Box, Checkbox, DropDown, Grid, Image, Icon, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Button, Underline } from '../Elements'

import logo from '../../PHOTOS/logo.jpg'
import img1 from '../../PHOTOS/stock1.jpg'
import Navigation2 from './UTILITIES/Navigation2'
import { FiMenu } from 'react-icons/fi'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
import { c_businessName } from '../../Constants'

export default function Home1() {
    return (
        <div className='main roboto '>
            <Navigation1 />
            <ResponsiveElements phone={
                <div className='padding'>
                    <div className='v-separate gap'>
                        <Box comp={
                            <Text text={`${c_businessName}`} fontSize="4em" weight="700" color="" spacing="-2px" lineHeight="1em" classes="all-caps" />
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={
                            <Text text="Exceptional services from an exceptional bagel. Welcome to our website." fontSize="1.5em" weight="" color="" spacing="" lineHeight="" classes="" />
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                    </div>
                    <Box comp={<div></div>} width="" height="3vh" radius="" paddingV="" paddingH="" classes="" />
                    <Box comp={
                        <Image src={img1} alt="" radius="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="1em" paddingH="" classes="" />

                    <Text text="Everything Bagel" fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="all-caps" />
                    <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="0.5em" paddingH="" classes="" />
                </div>
            } smalltablet={
                <div className='padding'>
                    <div className='v-separate gap'>
                        <Box comp={
                            <Text text={`${c_businessName}`} fontSize="4em" weight="700" color="" spacing="-2px" lineHeight="1em" classes="all-caps" />
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={
                            <Text text="Exceptional services from an exceptional bagel. Welcome to our website." fontSize="1.5em" weight="" color="" spacing="" lineHeight="" classes="" />
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                    </div>
                    <Box comp={<div></div>} width="" height="3vh" radius="" paddingV="" paddingH="" classes="" />
                    <Box comp={
                        <Image src={img1} alt="" radius="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="1em" paddingH="" classes="" />

                    <Text text="Everything Bagel" fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="all-caps" />
                    <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="0.5em" paddingH="" classes="" />
                </div>
            } tablet={
                <div className='padding'>
                    <Grid comps={[
                        <Box comp={
                            <div className='v-separate'>
                                <Box comp={
                                    <Text text={`${c_businessName}`} fontSize="7em" weight="700" color="" spacing="-2px" lineHeight="0.8em" classes="all-caps" />
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <Text text="Exceptional services from an exceptional bagel. Welcome to our website." fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            </div>
                        } width="80%" height="50vh" radius="" paddingV="" paddingH="" classes="" />,
                        <Box comp={
                            <Image src={img1} alt="" radius="" classes="" />
                        } width="" height="" radius="" paddingV="" paddingH="" classes=""/>
                    ]} orientation="column" template="1fr" gap="1em" classes="" />

                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="1em" paddingH="" classes="" />

                    <Box comp={
                        <div className='horizontal gap'>
                            <Text text="Everything Bagel" fontSize="1.8em" weight="300" color="" spacing="" lineHeight="" classes="all-caps" />
                            <Box comp={
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            } width="" height="" radius="" paddingV="0.5em" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="2em" classes="" />
                </div>
            } smalllaptop={
                <div className='padding'>
                    <Grid comps={[
                        <Box comp={
                            <div className='v-separate'>
                                <Box comp={
                                    <Text text={`${c_businessName}`} fontSize="7em" weight="700" color="" spacing="-2px" lineHeight="0.8em" classes="all-caps" />
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <Text text="Exceptional services from an exceptional bagel. Welcome to our website." fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            </div>
                        } width="80%" height="50vh" radius="" paddingV="" paddingH="" classes="" />,
                        <Box comp={
                            <Image src={img1} alt="" radius="" classes="" />
                        } width="" height="" radius="" paddingV="" paddingH="" classes=""/>
                    ]} orientation="column" template="2fr 3fr" gap="1em" classes="" />

                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="1em" paddingH="" classes="" />

                    <Box comp={
                        <div className='horizontal gap'>
                            <Text text="Everything Bagel" fontSize="1.8em" weight="300" color="" spacing="" lineHeight="" classes="all-caps" />
                            <Box comp={
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            } width="" height="" radius="" paddingV="0.5em" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="2em" classes="" />
                </div>
            } desktop={
                <div className='padding'>
                    <Grid comps={[
                        <Box comp={
                            <div className='v-separate'>
                                <Box comp={
                                    <Text text={`${c_businessName}`} fontSize="7em" weight="700" color="" spacing="-2px" lineHeight="0.8em" classes="all-caps" />
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <Text text="Exceptional services from an exceptional bagel. Welcome to our website." fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            </div>
                        } width="80%" height="50vh" radius="" paddingV="" paddingH="" classes="" />,
                        <Box comp={
                            <Image src={img1} alt="" radius="" classes="" />
                        } width="" height="" radius="" paddingV="" paddingH="" classes=""/>
                    ]} orientation="column" template="2fr 3fr" gap="1em" classes="" />

                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="1em" paddingH="" classes="" />

                    <Box comp={
                        <div className='horizontal gap'>
                            <Text text="Everything Bagel" fontSize="1.8em" weight="300" color="" spacing="" lineHeight="" classes="all-caps" />
                            <Box comp={
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            } width="" height="" radius="" paddingV="0.5em" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="2em" classes="" />
                </div>
            } />
            <Footer1 />
        </div>
    )
}



