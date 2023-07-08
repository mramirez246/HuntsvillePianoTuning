import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock3.jpg'

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

    const thing1 = "The services we offer revolve around the bagel. Without it, there is everything in nothing."

    const services = [
        {
            Name: "Bagel Service",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Image: img1
        },
        {
            Name: "Bagel Service",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Image: img1
        },
        {
            Name: "Bagel Service",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Image: img1
        },
        {
            Name: "Bagel Service",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Image: img1
        },
        {
            Name: "Bagel Service",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Image: img1
        },
        {
            Name: "Bagel Service",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Image: img1
        },
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />

            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`Services`} />
                <Text text={`${thing1}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                </Box>

                <ResponsiveWrapper>
                <PhoneScreen>
                <Grid orientation="column" template="1fr" gap="1.2em" classes="">
                    {
                        services.map((service, i) => {
                            return (
                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={service.Image} alt="" radius="" classes="" />
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
                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={service.Image} alt="" radius="" classes="" />
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
                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={service.Image} alt="" radius="" classes="" />
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
                <Box width="85vw" height="" radius="" paddingV="4vh" paddingH="0" classes="center">
                <Grid orientation="column" template="1fr 1fr 1fr" gap="1.5em" classes="">
                    {
                        services.map((service, i) => {
                            return (
                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={service.Image} alt="" radius="" classes="" />
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