import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Spacer, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2 } from 'react-icons/tb'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
// 
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 

import img1 from '../../PHOTOS/stock1.jpg'

export default function Quote1() {
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

    const thing1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
    const thing2 = "Pick a service"
    const thing3 = "Tell us a bit about yourself"

    const services = [
        "Service 1",
        "Service 2",
        "Service 3",
        "Service 4"
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`Get a quote today`} />
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </PhoneScreen>
                    <TabletScreen>
                        <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="80vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                            <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Box width="70vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                            <Text text={`${thing1}`} fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
                <Spacer height={`4vh`} />

                {/* FORM */}
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="">
                            <div className='horizontal h-center gap'>
                                <Icon size="2em" color="">
                                    <TbSquareRoundedNumber1 />
                                </Icon>
                                <Text text={`${thing2}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            </div>
                            <Border size="1px" color="" radius="">
                                <DropDown options={[services]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddService" />
                            </Border>
                        </Box>
                        <Spacer height={`2vh`} />
                        <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="">
                            <div className='horizontal h-center gap'>
                                <Icon size="2em" color="">
                                    <TbSquareRoundedNumber2 />
                                </Icon>
                                <Text text={`${thing3}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            </div>
                            <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="vertical gap">
                                <div>
                                    <Text text={`Full Name`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    <Border size="1px" color="" radius="">
                                        <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                    </Border>
                                </div>
                                <div>
                                    <Text text={`Email`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    <Border size="1px" color="" radius="">
                                        <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                    </Border>
                                </div>
                                <div>
                                    <Text text={`Message`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    <Border size="1px" color="" radius="">
                                        <TextArea placeholder="Enter message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="200px" classes="roboto" />
                                    </Border>
                                </div>
                                <Box width="" height="" radius="" backgroundColor="" paddingV="0.8em" paddingH="" classes="dark">
                                    <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                        <Text text={`Submit`} fontSize="1em" weight="" color="" spacing="" lineHeight="" classes="text-center" />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="400px" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                            <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="">
                                <div className='horizontal h-center gap'>
                                    <Icon size="2em" color="">
                                        <TbSquareRoundedNumber1 />
                                    </Icon>
                                    <Text text={`${thing2}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                </div>
                                <Border size="1px" color="" radius="">
                                    <DropDown options={[services]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddService" />
                                </Border>
                            </Box>
                            <Spacer height={`2vh`} />
                            <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="">
                                <div className='horizontal h-center gap'>
                                    <Icon size="2em" color="">
                                        <TbSquareRoundedNumber2 />
                                    </Icon>
                                    <Text text={`${thing3}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                </div>
                                <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="vertical gap">
                                    <div>
                                        <Text text={`Full Name`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        <Border size="1px" color="" radius="">
                                            <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                        </Border>
                                    </div>
                                    <div>
                                        <Text text={`Email`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        <Border size="1px" color="" radius="">
                                            <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                        </Border>
                                    </div>
                                    <div>
                                        <Text text={`Message`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        <Border size="1px" color="" radius="">
                                            <TextArea placeholder="Enter message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="200px" classes="roboto" />
                                        </Border>
                                    </div>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="0.8em" paddingH="" classes="dark">
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Text text={`Submit`} fontSize="1em" weight="" color="" spacing="" lineHeight="" classes="text-center" />
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="400px" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                            <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="">
                                <div className='horizontal h-center gap'>
                                    <Icon size="2em" color="">
                                        <TbSquareRoundedNumber1 />
                                    </Icon>
                                    <Text text={`${thing2}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                </div>
                                <Border size="1px" color="" radius="">
                                    <DropDown options={[services]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddService" />
                                </Border>
                            </Box>
                            <Spacer height={`2vh`} />
                            <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="">
                                <div className='horizontal h-center gap'>
                                    <Icon size="2em" color="">
                                        <TbSquareRoundedNumber2 />
                                    </Icon>
                                    <Text text={`${thing3}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                </div>
                                <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="vertical gap">
                                    <div>
                                        <Text text={`Full Name`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        <Border size="1px" color="" radius="">
                                            <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                        </Border>
                                    </div>
                                    <div>
                                        <Text text={`Email`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        <Border size="1px" color="" radius="">
                                            <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                        </Border>
                                    </div>
                                    <div>
                                        <Text text={`Message`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        <Border size="1px" color="" radius="">
                                            <TextArea placeholder="Enter message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="200px" classes="roboto" />
                                        </Border>
                                    </div>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="0.8em" paddingH="" classes="dark">
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Text text={`Submit`} fontSize="1em" weight="" color="" spacing="" lineHeight="" classes="text-center" />
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Grid orientation="column" template="1fr 1fr" gap="2em" classes="">
                            <Box width="60%" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="">
                                    <div className='horizontal h-center gap'>
                                        <Icon size="2em" color="">
                                            <TbSquareRoundedNumber1 />
                                        </Icon>
                                        <Text text={`${thing2}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    </div>
                                    <Border size="1px" color="" radius="">
                                        <DropDown options={[services]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddService" />
                                    </Border>
                                </Box>
                                <Spacer height={`2vh`} />
                                <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="">
                                    <div className='horizontal h-center gap'>
                                        <Icon size="2em" color="">
                                            <TbSquareRoundedNumber2 />
                                        </Icon>
                                        <Text text={`${thing3}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    </div>
                                    <Box width="" height="" radius="" backgroundColor="#F6F6F8" paddingV="0.8em" paddingH="0.8em" classes="vertical gap">
                                        <div>
                                            <Text text={`Full Name`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            <Border size="1px" color="" radius="">
                                                <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                            </Border>
                                        </div>
                                        <div>
                                            <Text text={`Email`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            <Border size="1px" color="" radius="">
                                                <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                            </Border>
                                        </div>
                                        <div>
                                            <Text text={`Message`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            <Border size="1px" color="" radius="">
                                                <TextArea placeholder="Enter message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="200px" classes="roboto" />
                                            </Border>
                                        </div>
                                        <Box width="" height="" radius="" backgroundColor="" paddingV="0.8em" paddingH="" classes="dark">
                                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                <Text text={`Submit`} fontSize="1em" weight="" color="" spacing="" lineHeight="" classes="text-center" />
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Image src={img1} alt="" radius="" classes="" />
                            </Box>
                        </Grid>
                    </DesktopScreen>
                </ResponsiveWrapper>
                <Spacer height={`2vh`} />
                {/* IMAGE */}
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Box width="" height="40vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Image src={img1} alt="" radius="" classes="fill" />
                        </Box>
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Image src={img1} alt="" radius="" classes="fill" />
                        </Box>
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="" height="70vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Image src={img1} alt="" radius="" classes="fill" />
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>

                    </DesktopScreen>
                </ResponsiveWrapper>

            </Box>
            <Footer1 />
        </div>
    )
}