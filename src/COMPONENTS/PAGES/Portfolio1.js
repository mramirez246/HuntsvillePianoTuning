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

export default function Portfolio1() {
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

    const projects = [
        {
            Project: "Project Bagel 1",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Link: "https://wearehappycode.com",
            Image: img1
        },
        {
            Project: "Project Bagel 1",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Link: "https://wearehappycode.com",
            Image: img1
        },
        {
            Project: "Project Bagel 1",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Link: "https://wearehappycode.com",
            Image: img1
        },
        {
            Project: "Project Bagel 1",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Link: "https://wearehappycode.com",
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
                <Heading1 text={`My Portfolio`} />
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </PhoneScreen>
                    <TabletScreen>
                        <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="80vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Text text={`${thing1}`} fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Box width="70vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Text text={`${thing1}`} fontSize="1.4em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>

                <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="">
                    <ResponsiveWrapper>
                        <PhoneScreen>
                            <Grid orientation="column" template="1fr" gap="1em" classes="">
                                {
                                    projects.map((proj, i) => {
                                        return (
                                            <Grid orientation="column" template="1fr" gap="1em" classes="dark padding">
                                                <div className='vertical gap'>
                                                    <Text text={`${proj.Project}`} fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />
                                                    <Text text={`${proj.Desc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                            <Underline size="1px" color="" >
                                                                <Text text={`Learn more`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                            </Underline>
                                                        </Button>
                                                    </Box>
                                                </div>
                                                <Image src={proj.Image} alt="" radius="" classes="" />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </PhoneScreen>
                        <TabletScreen>
                            <Grid orientation="column" template="1fr" gap="1em" classes="">
                                {
                                    projects.map((proj, i) => {
                                        return (
                                            <Grid orientation="column" template="1fr" gap="1em" classes="dark padding">
                                                <div className='vertical gap'>
                                                    <Text text={`${proj.Project}`} fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />
                                                    <Text text={`${proj.Desc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                            <Underline size="1px" color="" >
                                                                <Text text={`Learn more`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                            </Underline>
                                                        </Button>
                                                    </Box>
                                                </div>
                                                <Image src={proj.Image} alt="" radius="" classes="" />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </TabletScreen>
                        <LaptopScreen>
                            <Grid orientation="column" template="1fr" gap="1em" classes="">
                                {
                                    projects.map((proj, i) => {
                                        return (
                                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="dark padding">
                                                <div className='vertical gap'>
                                                    <Text text={`${proj.Project}`} fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />
                                                    <Text text={`${proj.Desc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                            <Underline size="1px" color="" >
                                                                <Text text={`Learn more`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                            </Underline>
                                                        </Button>
                                                    </Box>
                                                </div>
                                                <Image src={proj.Image} alt="" radius="" classes="" />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </LaptopScreen>
                        <DesktopScreen>
                            <Grid orientation="column" template="1fr 1fr 1fr" gap="1em" classes="">
                                {
                                    projects.map((proj, i) => {
                                        return (
                                            <Grid orientation="column" template="1fr" gap="1em" classes="dark padding">
                                                <div className='vertical gap'>
                                                    <Text text={`${proj.Project}`} fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />
                                                    <Text text={`${proj.Desc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                            <Underline size="1px" color="" >
                                                                <Text text={`Learn more`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                            </Underline>
                                                        </Button>
                                                    </Box>
                                                </div>
                                                <Image src={proj.Image} alt="" radius="" classes="" />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </DesktopScreen>
                    </ResponsiveWrapper>
                </Box>
            </Box>

            <Footer1 />
        </div>
    )
}