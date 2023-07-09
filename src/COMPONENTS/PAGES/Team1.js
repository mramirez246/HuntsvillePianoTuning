import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline, Spacer } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock4.jpg'

export default function Team1() {
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

    const teamMembers = [
        {
            Name: "Mr Bagel Esquire",
            Position: "CEO of Everything",
            Image: img1
        },
        {
            Name: "Mr Bagel Esquire",
            Position: "CEO of Everything",
            Image: img1
        },
        {
            Name: "Mr Bagel Esquire",
            Position: "CEO of Everything",
            Image: img1
        },
        {
            Name: "Mr Bagel Esquire",
            Position: "CEO of Everything",
            Image: img1
        },
    ]

    const thing1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`Meet our team`} />
                <Spacer height={`4vh`} />
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                {
                                    teamMembers.map((member, i) => {
                                        return (
                                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                <Image src={member.Image} alt="" radius="" classes="fill" />
                                                <Text text={`${member.Name}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="" classes="text-center" />
                                                <Text text={`${member.Position}`} fontSize="1.1em" weight="400" color="gray" spacing="" lineHeight="" classes="text-center" />
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Grid>
                    </PhoneScreen>
                    <TabletScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                {
                                    teamMembers.map((member, i) => {
                                        return (
                                            <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="">
                                                <Image src={member.Image} alt="" radius="" classes="fill" />
                                                <Text text={`${member.Name}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="" classes="text-center" />
                                                <Text text={`${member.Position}`} fontSize="1.1em" weight="400" color="gray" spacing="" lineHeight="" classes="text-center" />
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Grid>
                    </TabletScreen>
                    <LaptopScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="">
                    <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                    {
                                    teamMembers.map((member, i) => {
                                        return (
                                            <Box width="" height="" radius="" paddingV="" paddingH="0" classes="">
                                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                <Image src={member.Image} alt="" radius="" classes="fill" />
                                                </Box>
                                                <Text text={`${member.Name}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="" classes="text-center" />
                                                <Text text={`${member.Position}`} fontSize="1.1em" weight="400" color="gray" spacing="" lineHeight="" classes="text-center" />
                                            </Box>
                                        )
                                    })
                                }
                        </Grid>
                    </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                    <Grid orientation="column" template="1fr 1fr 1fr" gap="1em" classes="">
                    {
                                    teamMembers.map((member, i) => {
                                        return (
                                            <Box width="" height="" radius="" paddingV="" paddingH="0" classes="">
                                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                <Image src={member.Image} alt="" radius="" classes="fill" />
                                                </Box>
                                                <Text text={`${member.Name}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="" classes="text-center" />
                                                <Text text={`${member.Position}`} fontSize="1.1em" weight="400" color="gray" spacing="" lineHeight="" classes="text-center" />
                                            </Box>
                                        )
                                    })
                                }
                        </Grid>
                    </DesktopScreen>
                </ResponsiveWrapper>
            </Box>

            <Box width="80vw" height="" radius="" paddingV="2em" paddingH="0" classes="center">
                <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
            </Box>

            <Footer1 />
        </div>
    )
}