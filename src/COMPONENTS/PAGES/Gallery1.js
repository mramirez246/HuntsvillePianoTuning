import React, { useEffect, useState } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
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

    const [chosenPhoto, setChosenPhoto] = useState("")

    const images = [
        img1, img2, img3, img4, img5
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />

            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`Take a closer look..`} />

                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                </Box>

                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">

                            {
                                images.map((img, i) => {
                                    return (
                                        <Button color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img) }} classes="">
                                            <Image src={img} alt="" radius="" classes="" />
                                        </Button>
                                    )
                                })
                            }

                        </Grid>
                    </PhoneScreen>
                    <TabletScreen>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            {
                                images.map((img, i) => {
                                    return (
                                        <Button color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img) }} classes="">
                                            <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                                <Image src={img} alt="" radius="" classes="fill" />
                                            </Box>
                                        </Button>
                                    )
                                })
                            }
                        </Grid>
                    </TabletScreen>
                    <LaptopScreen>
                        <Grid orientation="column" template="1fr 1fr 1fr" gap="1em" classes="">
                            {
                                images.map((img, i) => {
                                    return (
                                        <Button color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img) }} classes="">
                                            <Box width="" height="35vh" radius="" paddingV="" paddingH="" classes="">
                                                <Image src={img} alt="" radius="" classes="fill" />
                                            </Box>
                                        </Button>
                                    )
                                })
                            }
                        </Grid>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Grid orientation="column" template="repeat(4, 1fr)" gap="1em" classes="">
                            {
                                images.map((img, i) => {
                                    return (
                                        <Button color="" backgroundColor="" radius="" func={() => { setChosenPhoto(img) }} classes="">
                                            <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                                <Image src={img} alt="" radius="" classes="fill" />
                                            </Box>
                                        </Button>
                                    )
                                })
                            }
                        </Grid>
                    </DesktopScreen>
                </ResponsiveWrapper>

            </Box>

            {/* PHOTO */}
            {
                chosenPhoto != "" ?
                    <Layer position="fixed" top="0" left="0" bottom="0" right="0" classes="bg-transparent">
                        <Layer position="absolute" top="1em" left="" bottom="" right="1em" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => {setChosenPhoto("")}} classes="">
                            <Icon size="2.5em" color="white">
                                <HiXMark />
                            </Icon>
                            </Button>
                        </Layer>
                        <Box width="100vw" height="100vh" radius="" paddingV="" paddingH="" classes="">
                            <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">
                            </Box>
                            <Box width="%" height="90vh" radius="" paddingV="2em" paddingH="2em" classes="">
                                <Image src={chosenPhoto} alt="" radius="" classes="fit" />
                            </Box>
                        </Box>
                    </Layer> : <div>hi</div>
            }
            <Footer1 />
        </div>
    )
}