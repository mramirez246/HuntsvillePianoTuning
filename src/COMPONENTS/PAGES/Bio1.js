import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock4.jpg'
import img2 from '../../PHOTOS/stock5.jpg'

export default function Bio1() {
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

    const thing1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. "
    const thing2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    const thing3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. "
    const thing4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    const thing5 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. "
    const thing6 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`Here is a bit about me..`} />
                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                </Box>
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing2}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing4}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing5}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing6}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="" />
                        </Grid>
                    </PhoneScreen>
                    <TabletScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing2}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing4}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing5}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing6}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="" />
                        </Grid>
                    </TabletScreen>
                    <LaptopScreen>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing2}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="fill" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="fill" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing4}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing5}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing6}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="" />
                        </Grid>
                    </LaptopScreen>
                    <DesktopScreen>
                    <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="2em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing2}`} fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                            <Image src={img1} alt="" radius="" classes="fill" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="fill" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="2em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing4}`} fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing5}`} fontSize="2em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing6}`} fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="" />
                        </Grid>
                    </DesktopScreen>
                </ResponsiveWrapper>

            </Box>
            <Footer1 />
        </div>
    )
}