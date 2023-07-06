import React from 'react'
import { Accordion, Border, Box, Checkbox, DropDown, Grid, Image, Icon, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Button } from '../Elements'

import logo from '../../PHOTOS/logo.jpg'
import img1 from '../../PHOTOS/stock2.jpg'
import Navigation2 from './UTILITIES/Navigation2'
import { FiMenu } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'

export default function Home1() {
    return (
        <div className='main roboto'>
            <Navigation2 />

            <ResponsiveElements one={
                <div className='grid-c-1 gap'>
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                </div>
            } two={
                <div className='grid-c-2 gap'>
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                </div>
            } three={
                <div className='grid-c-3 gap'>
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                </div>
            } four={
                <div className='grid-c-4 gap'>
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                </div>
            } five={
                <div className='grid-c-4 gap'>
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                    <Image src={logo} alt="" radius="" classes="" />
                </div>
            } />

            <Box comp={
                <TextField placeholder="Enter text here" fontSize="1em" radius="8px" padding="1em" id="" classes=""/>
            } width="300px" height="" radius="" paddingV="" paddingH="" classes=""/>

            <Box comp={
                <TextArea placeholder="Enter message here..." fontSize="1em" radius="" padding="1em" id="" minHeight="300px" classes="roboto"/>
            } width="400px" height="" radius="" paddingV="" paddingH="" classes="full-width"/>

            <Accordion dictionary={[
                { Key: "What is the meaning of life?", Value: "The meaning of life is unknown to mankind." },
                { Key: "What is the meaning of life?", Value: "The meaning of life is unknown to mankind." },
                { Key: "What is the meaning of life?", Value: "The meaning of life is unknown to mankind." }
            ]} keyFontSize="1em" valueFontSize="1.2em" padding="1em" keyClasses="" valueClasses="" classes=""/>

            <Box comp={
                <DropDown options={["Google", "Yelp", "Friend", "Employee", "Other"]} fontSize="" padding="1em" radius="" classes="padding" id="" />
            } width="300px" height="" radius="" paddingV="1em" paddingH="1em" classes=""/>
            <Box comp={
                <Checkbox label="Yes" fontSize="1.2em" id=""/>
            } width="" height="" radius="" paddingV="1em" paddingH="1em" classes=""/>

        </div>
    )
}



