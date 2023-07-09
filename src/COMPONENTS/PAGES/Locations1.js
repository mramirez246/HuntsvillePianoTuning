import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Spacer, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Map } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'

export default function Locations1() {
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

    const locations = [
        {
            Location: "Bagel Store in San Diego",
            Address: "1 Infinite Loop Cupertino",
            Hours: "Mon - Fri: 8 AM - 5 PM\nSat: 10AM - 8PM\nSunday: 2PM-8PM"
        },
        {
            Location: "Bagel Store in San Marcos",
            Address: "1 Infinite Loop Cupertino",
            Hours: "Mon - Fri: 8 AM - 5 PM\nSat: 10AM - 8PM\nSunday: 2PM-8PM"
        }
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`We are here..`} />
                <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="">
                    <Grid orientation="column" template="1fr" gap="2em" classes="">
                        {locations.map((loc, i) => {
                            return (
                                <ResponsiveWrapper>
                                    <PhoneScreen>
                                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                            <Text text={`${loc.Location}`} fontSize="1.4em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                            <Text text={`${loc.Hours}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                                <Map search={`${loc.Address}`} />
                                            </Box>
                                        </Box>
                                    </PhoneScreen>
                                    <TabletScreen>
                                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                            <Text text={`${loc.Location}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                            <Text text={`${loc.Hours}`} fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            <Box width="" height="50vh" radius="" paddingV="" paddingH="" classes="">
                                                <Map search={`${loc.Address}`} />
                                            </Box>
                                        </Box>
                                    </TabletScreen>
                                    <LaptopScreen>
                                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                            <Text text={`${loc.Location}`} fontSize="1.4em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                            <Text text={`${loc.Hours}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            <Box width="" height="60vh" radius="" paddingV="" paddingH="" classes="">
                                                <Map search={`${loc.Address}`} />
                                            </Box>
                                        </Box>
                                    </LaptopScreen>
                                    <DesktopScreen>
                                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                            <div className='horizontal gap'>
                                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                <Text text={`${loc.Location}`} fontSize="1.4em" weight="600" color="" spacing="" lineHeight="" classes="no-wrap" />
                                                <Text text={`${loc.Hours}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Box>
                                            <Box width="100%" height="60vh" radius="" paddingV="" paddingH="" classes="">
                                                <Map search={`${loc.Address}`} />
                                            </Box>
                                            </div>
                                        </Box>
                                    </DesktopScreen>
                                </ResponsiveWrapper>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>
            <Footer1 />
        </div>
    )
}