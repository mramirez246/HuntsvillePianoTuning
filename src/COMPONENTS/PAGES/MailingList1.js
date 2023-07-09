import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import { HiXMark } from 'react-icons/hi2'

export default function MailingList1() {
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


    const thing1 = "Join our mailing list!"
    const thing2 = "There are many reasons to join out mailing list. Give the bagel a chance and enter your email to never miss a newsletter."

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <Layer position="fixed" top="" left="" bottom="" right="" classes="roboto bg-transparent v-separate">
            <Layer position="absolute" top="0.5em" left="" bottom="" right="0.5em" classes="">
                <Button color="" backgroundColor="" radius="" func={() => { }} classes="padding">
                    <Icon size="2.2em" color="white">
                        <HiXMark />
                    </Icon>
                </Button>
            </Layer>
            <Box width="100vw" height="100vh" radius="" paddingV="" paddingH="" classes="v-separate">
                <div></div>
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Box width="80vw" height="" radius="" paddingV="1em" paddingH="1em" classes="center light vertical gap">
                            <Text text={`${thing1}`} fontSize="1.4em" weight="600" color="" spacing="-1px" lineHeight="" classes="text-center" />
                            <Text text={`${thing2}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            <Border size="1px" color="" radius="">
                                <TextField placeholder="Enter email here.." fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                            </Border>
                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="dark">
                                <Box width="" height="" radius="" paddingV="0.8em" paddingH="" classes="">
                                    <Text text={`Join List`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                </Box>
                            </Button>
                        </Box>
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="350px" height="" radius="" paddingV="1em" paddingH="1em" classes="center light vertical gap">
                            <Text text={`${thing1}`} fontSize="1.4em" weight="600" color="" spacing="-1px" lineHeight="" classes="text-center" />
                            <Text text={`${thing2}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            <Border size="1px" color="" radius="">
                                <TextField placeholder="Enter email here.." fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                            </Border>
                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="dark">
                                <Box width="" height="" radius="" paddingV="0.8em" paddingH="" classes="">
                                    <Text text={`Join List`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                </Box>
                            </Button>
                        </Box>
                    </TabletScreen>
                    <LaptopScreen>
                    <Box width="350px" height="" radius="" paddingV="1em" paddingH="1em" classes="center light vertical gap">
                            <Text text={`${thing1}`} fontSize="1.4em" weight="600" color="" spacing="-1px" lineHeight="" classes="text-center" />
                            <Text text={`${thing2}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            <Border size="1px" color="" radius="">
                                <TextField placeholder="Enter email here.." fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                            </Border>
                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="dark">
                                <Box width="" height="" radius="" paddingV="0.8em" paddingH="" classes="">
                                    <Text text={`Join List`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                </Box>
                            </Button>
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                    <Box width="350px" height="" radius="" paddingV="1em" paddingH="1em" classes="center light vertical gap">
                            <Text text={`${thing1}`} fontSize="1.4em" weight="600" color="" spacing="-1px" lineHeight="" classes="text-center" />
                            <Text text={`${thing2}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            <Border size="1px" color="" radius="">
                                <TextField placeholder="Enter email here.." fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                            </Border>
                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="dark">
                                <Box width="" height="" radius="" paddingV="0.8em" paddingH="" classes="">
                                    <Text text={`Join List`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                </Box>
                            </Button>
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
                <div></div>
            </Box>

        </Layer>
    )
}