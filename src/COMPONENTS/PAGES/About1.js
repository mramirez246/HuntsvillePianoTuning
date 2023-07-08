import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock2.jpg'

export default function About1() {
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

    const heading1 = "Everything Bagel"
    const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    const heading2 = "Everything Bagel"
    const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`About`} />
                <Box width="" height="10vh" radius="" paddingV="" paddingH="" classes="">
                </Box>

                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Heading5 text={`${heading1}`} />
                            <Text text={`${text1}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </PhoneScreen>
                    <TabletScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Heading5 text={`${heading1}`} />
                            <Text text={`${text1}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="80vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                <Heading5 text={`${heading2}`} />
                                <Text text={`${text2}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Grid>
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Box width="70vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                <Heading5 text={`${heading1}`} />
                                <Text text={`${text1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Grid>
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
                <Box width="" height="10vh" radius="" paddingV="" paddingH="" classes="">

                </Box>
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Heading5 text={`${heading2}`} />
                            <Text text={`${text2}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </PhoneScreen>
                    <TabletScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Heading5 text={`${heading2}`} />
                            <Text text={`${text2}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="80vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                <Heading5 text={`${heading2}`} />
                                <Text text={`${text2}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Grid>
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Box width="70vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                <Heading5 text={`${heading2}`} />
                                <Text text={`${text2}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Grid>
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
                <Box width="" height="10vh" radius="" paddingV="" paddingH="" classes="">

                </Box>
                <Image src={img1} alt="" radius="" classes="" />
            </Box>
            <Footer1 />
        </div>
    )
}