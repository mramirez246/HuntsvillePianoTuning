import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Navigation2 from './UTILITIES/Navigation2'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock1.jpg'

export default function Home1() {
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

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />

            <Box width="" height="2vh" radius="" paddingV="" paddingH="" classes="">
            </Box>

            <ResponsiveWrapper>
                <PhoneScreen>
                    <div className='padding'>
                        <Heading1 text={`${c_businessName}`} />
                        <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. `} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </div>
                    <Image src={img1} alt="" radius="" classes="padding" />
                </PhoneScreen>
                <TabletScreen>
                    <div className='padding'>
                        <Heading1 text={`${c_businessName}`} />
                        <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. `} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </div>
                    <Image src={img1} alt="" radius="" classes="padding" />
                </TabletScreen>
                <LaptopScreen>
                    <Grid orientation="column" template="2fr 3fr" gap="1em" classes="">
                        <div className='padding'>
                            <Heading1 text={`${c_businessName}`} />
                            <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. `} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                        <Image src={img1} alt="" radius="" classes="padding" />
                    </Grid>
                </LaptopScreen>
                <DesktopScreen>
                <Grid orientation="column" template="2fr 3fr" gap="1em" classes="">
                        <div className='vertical v-separate padding'>
                            <Heading1 text={`${c_businessName}`} />
                            <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. `} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                        <Image src={img1} alt="" radius="" classes="padding" />
                    </Grid>
                </DesktopScreen>
            </ResponsiveWrapper>

            <Box width="" height="" radius="" paddingV="1.5em" paddingH="0" classes="">
                <hr />
            </Box>

            <ResponsiveWrapper>
                <PhoneScreen>
                    <Grid orientation="row" template="1fr" gap="1em" classes="">
                        <Heading4 text={`Everything Bagel Now`} />
                        <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Grid>
                </PhoneScreen>
                <TabletScreen>
                    <Box width="80vw" height="" radius="" paddingV="2em" paddingH="0" classes="center">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Heading5 text={`Everything Bagel Now`} />
                            <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </Box>
                </TabletScreen>
                <LaptopScreen>
                    <Box width="80vw" height="" radius="" paddingV="2em" paddingH="0" classes="center">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Heading5 text={`Everything Bagel Now`} />
                            <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </Box>
                </LaptopScreen>
                <DesktopScreen>
                    <Box width="80vw" height="" radius="" paddingV="2em" paddingH="0" classes="center">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Heading5 text={`Everything Bagel Now`} />
                            <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                    </Box>
                </DesktopScreen>
            </ResponsiveWrapper>
            <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

            </Box>
            <Footer1 />
        </div>
    )
}