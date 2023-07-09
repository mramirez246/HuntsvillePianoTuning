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

export default function Careers1() {
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

    const thing1 = "Take the time to look at these open positions and click on the button to apply. It has never been easier!"


    const positions = [
        {
            Title: "Bagel Executive Officer",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
        },
        {
            Title: "Bagel Executive Officer",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
        },
        {
            Title: "Bagel Executive Officer",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
        },
        {
            Title: "Bagel Executive Officer",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
        },
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <div className='padding'>
                <Heading1 text={`We're Hiring!`} />
                <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                </Box>

                <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="">
                    <hr />
                </Box>
            </div>

            <ResponsiveWrapper>
                <PhoneScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            {
                                positions.map((pos, i) => {
                                    return (
                                        <div className='vertical gap'>
                                            <Text text={`${pos.Title}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            <Text text={`${pos.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            <Box width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark">
                                                <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                    <Text text={`Apply Now`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                </Button>
                                            </Box>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </PhoneScreen>
                <TabletScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            {
                                positions.map((pos, i) => {
                                    return (
                                        <div className='vertical gap'>
                                            <Text text={`${pos.Title}`} fontSize="1.6em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            <Text text={`${pos.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            <Box width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark">
                                                <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                    <Text text={`Apply Now`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                </Button>
                                            </Box>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </TabletScreen>
                <LaptopScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            {
                                positions.map((pos, i) => {
                                    return (
                                        <div className='horizontal gap padding'>
                                            <Text text={`${pos.Title}`} fontSize="1.6em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            <div className='vertical gap'>
                                            <Text text={`${pos.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            <Box width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark">
                                                <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                    <Text text={`Apply Now`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                </Button>
                                            </Box>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </LaptopScreen>
                <DesktopScreen>
                    <Box width="" height="" radius="" paddingV="2em" paddingH="2em" classes="">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            {
                                positions.map((pos, i) => {
                                    return (
                                        <div className='horizontal gap padding'>
                                            <Text text={`${pos.Title}`} fontSize="1.6em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            <div className='vertical gap'>
                                            <Text text={`${pos.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            <Box width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark">
                                                <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                    <Text text={`Apply Now`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                </Button>
                                            </Box>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </DesktopScreen>
            </ResponsiveWrapper>

            <Box width="" height="80vh" radius="" paddingV="1em" paddingH="1em" classes="">
                <Image src={img1} alt="" radius="" classes="" />
            </Box>

            <Footer1 />
        </div>
    )
}