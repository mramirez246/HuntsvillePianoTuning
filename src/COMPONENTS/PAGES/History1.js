import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
// 
import img1 from '../../PHOTOS/stock1.jpg'
import img2 from '../../PHOTOS/stock2.jpg'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'


export default function History1() {
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

    const thing1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    const thing2 = "Everything bagel"
    const thing3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa.\n Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    const thing4 = "Everything bagel"
    const thing5 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa.\n Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod."

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="vertical gap">
                <Heading1 text={`It all started here`} />
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Image src={img1} alt="" radius="" classes="" />
                            <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Text text={`${thing2}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing3}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Text text={`${thing4}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing5}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Text text={`${thing4}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing5}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </PhoneScreen>
                    <TabletScreen>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Image src={img1} alt="" radius="" classes="" />
                            <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Text text={`${thing2}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing3}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Text text={`${thing4}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing5}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Text text={`${thing4}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing5}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </TabletScreen>
                    <LaptopScreen>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Image src={img1} alt="" radius="" classes="" />
                            <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Text text={`${thing2}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing3}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Text text={`${thing4}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing5}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Text text={`${thing4}`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${thing5}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Image src={img1} alt="" radius="" classes="" />
                            <Text text={`${thing1}`} fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        <Box width="80vw" height="" radius="" paddingV="2em" paddingH="0" classes="center">
                            <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                            </Box>
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                <Text text={`${thing2}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing3}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Grid>
                            <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                            </Box>
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                <Text text={`${thing4}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing5}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Grid>
                            <Box width="" height="" radius="" paddingV="2em" paddingH="0" classes="">
                            <Image src={img2} alt="" radius="" classes=""/>
                            </Box>
                            <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                            </Box>
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                <Text text={`${thing4}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing5}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Grid>
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
            </Box>
            <Footer1 />
        </div>
    )
}