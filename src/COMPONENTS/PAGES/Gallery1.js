import React, { useEffect, useState } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock1.jpg'
import img2 from '../../PHOTOS/stock2.jpg'
import img3 from '../../PHOTOS/stock3.jpg'
import img4 from '../../PHOTOS/stock4.jpg'
import img5 from '../../PHOTOS/stock5.jpg'
import { HiXMark } from 'react-icons/hi2'

export default function Gallery1() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.pathname

    const [chosenPhoto, setChosenPhoto] = useState("")
    const [showPhoto, setShowPhoto] = useState(false)

    const changePhoto = (setShowPhoto) => {
        setShowPhoto(true)
    }

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
        console.log(showPhoto)
    }, [showPhoto])

    return (
        <div className='roboto'>
            <Navigation1 />
            <ResponsiveElements phone={
                <div className='padding'>
                    <Text text="Take a closer look..." fontSize="6vh" weight="400" color="" spacing="-2px" lineHeight="1em" classes="" />
                    <Box comp={<div></div>} width="" height="6vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />
                    ]} orientation="column" template="1fr" gap="1em" classes="" />
                </div>
            } smalltablet={
                <div className='padding'>
                    <Text text="Take a closer look..." fontSize="6vh" weight="400" color="" spacing="-2px" lineHeight="1em" classes="" />
                    <Box comp={<div></div>} width="" height="6vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="70vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1) }} classes="" />
                    ]} orientation="column" template="1fr" gap="1em" classes="" />
                </div>
            } tablet={
                <div className='padding'>
                    <Text text="Take a closer look..." fontSize="6vh" weight="400" color="" spacing="-2px" lineHeight="1em" classes="" />
                    <Box comp={<div></div>} width="" height="6vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img2); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img3); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img4); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img5); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img2); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img3); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img4); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img5); setShowPhoto(true) }} classes="" />
                    ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />


                </div>
            } smalllaptop={
                <div className='padding'>
                    <Text text="Take a closer look..." fontSize="6vh" weight="400" color="" spacing="-2px" lineHeight="1em" classes="" />
                    <Box comp={<div></div>} width="" height="6vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img2); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img3); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img4); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img5); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img2); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img3); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img4); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="40vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img5); setShowPhoto(true) }} classes="" />
                    ]} orientation="column" template="1fr 1fr 1fr" gap="1em" classes="" />


                </div>
            } desktop={
                <div className='padding'>
                    <Text text="Take a closer look..." fontSize="6vh" weight="400" color="" spacing="-2px" lineHeight="1em" classes="" />
                    <Box comp={<div></div>} width="" height="6vh" radius="" paddingV="" paddingH="" classes="" />

                    <Grid comps={[
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img2); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img3); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img4); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img5); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img1} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img1); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img2} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img2); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img3} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img3); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img4} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img4); setShowPhoto(true) }} classes="" />,
                        <Button comp={
                            <Box comp={
                                <Image src={img5} alt="" radius="" classes="fill" />
                            } width="" height="50vh" radius="" paddingV="" paddingH="" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img5); setShowPhoto(true) }} classes="" />
                    ]} orientation="column" template="1fr 1fr 1fr" gap="1em" classes="" />


                </div>
            } />

            {
                showPhoto ?
                    <Layer comp={
                        <div>
                            <Layer comp={
                                <Button comp={
                                    <Icon comp={<HiXMark />} size="2em" color="white"/>
                                } color="" backgroundColor="" radius="" func={() => {setShowPhoto(false)}} classes=""/>
                            } position="fixed" top="1em" left="" bottom="" right="1em" classes="" />
                            <Box comp={<div></div>} width="" height="8vh" radius="" paddingV="" paddingH="" classes=""/>
                            <Box comp={
                                <Box comp={
                                    <Image src={chosenPhoto} alt="" radius="" classes="fit" />
                                } width="fit-content" height="80vh" radius="" paddingV="0" paddingH="0" classes="v-center center" />
                            } width="100vw" height="100vh" radius="" paddingV="" paddingH="" classes="" />
                        </div>
                    } position="fixed" top="0" left="0" bottom="0" right="0" classes="bg-transparent" /> : <div>hi</div>
            }
            <Footer1 />
        </div>
    )
}