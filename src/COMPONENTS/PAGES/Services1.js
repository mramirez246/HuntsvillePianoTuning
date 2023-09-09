import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/tuning.jpg'
import img2 from '../../PHOTOS/pitch-raise2.jpg'
import img3 from '../../PHOTOS/cleaning2.jpg'
import img4 from '../../PHOTOS/repair.jpg'

export default function Services1() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname

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

    const thing1 = "Here are our basic services. More details and options can be found on our BOOK A TUNING page."

    const services = [
        {
            Name: "STANDARD TUNING $165",
            Desc: "Pianos that have been tuned within a year can typically use this option. ",
            Image: img1
        },
        {
            Name: "PITCH CORRECTION & TUNING $250",
            Desc: "Pianos that have not been tuned within a year will likely need a preliminary pitch correction, or leveling out of the pitch across the piano, before being fine-tuned. ",
            Image: img2
        },
        {
            Name: "CLEANING $50-$200",
            Desc: "Cleaning for uprights range in price from $50-$100 and grands range from $150-$200 depending on level of detailing desired. Descriptions of each cleaning level are on the BOOK A TUNING page and you can choose which one you would like there. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level with no exceptions. ",
            Image: img3
        },
        {
            Name: "REPAIRS & RESTORATION $30-$100",
            Desc: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100. ",
            Image: img4
        },
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
        
            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                <ResponsiveWrapper>
                <PhoneScreen>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                        <Heading1 text={`Pricing`} />
                        <Text text={`${thing1}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Box>
                
                </PhoneScreen>
                <TabletScreen>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                        <Heading1 text={`Pricing`} />
                        <Text text={`${thing1}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Box>
                
                </TabletScreen>
                <LaptopScreen>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="4vw" classes="">
                        <Heading1 text={`Pricing`} />
                        <Text text={`${thing1}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Box>
                </LaptopScreen>
                <DesktopScreen>
                <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="13vw" classes="">
                    <Heading1 text={`Pricing`} />
                    <Text text={`${thing1}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                </Box>
                
                </DesktopScreen>
                </ResponsiveWrapper>
                
                

                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                </Box>

                <ResponsiveWrapper>
                <PhoneScreen>
                    <Grid orientation="column" template="1fr" gap="1.2em" classes="">
                    {
                        services.map((service, i) => {
                            return (
                                <Box width="" height="" radius="" paddingV="0" paddingH="1em" classes="">
                                    <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={service.Image} alt="" radius="" classes="fill" />
                                    </Box>
                                    <Text text={`${service.Name}`} fontSize="1.6em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    <Text text={`${service.Desc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </Box>
                            )
                        })
                    }
                </Grid>
                    
                
                </PhoneScreen>
                <TabletScreen>
                <Grid orientation="column" template="1fr 1fr" gap="1.2em" classes="">
                    {
                        services.map((service, i) => {
                            return (
                                <Box width="" height="" radius="" paddingV="0" paddingH="1em" classes="">
                                    <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={service.Image} alt="" radius="" classes="fill" />
                                    </Box>
                                    <Text text={`${service.Name}`} fontSize="1.6em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    <Text text={`${service.Desc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </Box>
                            )
                        })
                    }
                </Grid>
                </TabletScreen>
                <LaptopScreen>
                <Grid orientation="column" template="1fr 1fr" gap="1.2em" classes="">
                    {
                        services.map((service, i) => {
                            return (
                                <Box width="" height="" radius="" paddingV="0" paddingH="5vw" classes="">
                                    <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={service.Image} alt="" radius="" classes="fill" />
                                    </Box>
                                    <Text text={`${service.Name}`} fontSize="1.6em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    <Text text={`${service.Desc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </Box>
                            )
                        })
                    }
                </Grid>
                </LaptopScreen>
                <DesktopScreen>
                <Box width="" height="" radius="" paddingV="4vh" paddingH="13vw" classes="center">
                <Grid orientation="column" template="1fr 1fr" gap="1.5em" classes="">
                    {
                        services.map((service, i) => {
                            return (
                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={service.Image} alt="" radius="" classes="fill" />
                                    </Box>
                                    <Text text={`${service.Name}`} fontSize="1.6em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    <Text text={`${service.Desc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                </Box>
                            )
                        })
                    }
                </Grid>
                </Box>
                </DesktopScreen>
                </ResponsiveWrapper>
            </Box>

            <Footer1 />
        </div>
    )
}