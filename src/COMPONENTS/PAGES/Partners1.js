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

export default function Partners1() {
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

    const partners = [
        {
            Partner: "Partners Bagels",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Link: "https://wearehappycode.com"
        },
        {
            Partner: "Partners Bagels",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Link: "https://wearehappycode.com"
        },
        {
            Partner: "Partners Bagels",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Link: "https://wearehappycode.com"
        },
        {
            Partner: "Partners Bagels",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
            Link: "https://wearehappycode.com"
        },
    ]

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`We only work with the best.`} />
                <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa.\n\n Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                </Box>

                <ResponsiveWrapper>
                <PhoneScreen>
                <Grid orientation="column" template="1fr" gap="1em" classes="">
                    {
                        partners.map((par, i) => {
                            return (
                                <Grid orientation="column" template="1fr" gap="1em" classes="">
                                    <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={img1} alt="" radius="" classes="fill" />
                                    </Box>
                                    <div className='vertical gap'>
                                        <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open(par.Link, '_blank') }} classes="">
                                            <Underline size="" color="" >
                                                <Text text={`Visit Website`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Underline>
                                        </Button>
                                        </Box>
                                        <Text text={`${par.Partner}`} fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${par.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                </PhoneScreen>
                <TabletScreen>
                <Grid orientation="column" template="1fr" gap="1em" classes="">
                    {
                        partners.map((par, i) => {
                            return (
                                <Grid orientation="column" template="1fr" gap="1em" classes="">
                                    <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={img1} alt="" radius="" classes="fill" />
                                    </Box>
                                    <div className='vertical gap'>
                                        <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open(par.Link, '_blank') }} classes="">
                                            <Underline size="" color="" >
                                                <Text text={`Visit Website`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Underline>
                                        </Button>
                                        </Box>
                                        <Text text={`${par.Partner}`} fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${par.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                </TabletScreen>
                <LaptopScreen>
                <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                    {
                        partners.map((par, i) => {
                            return (
                                <Grid orientation="column" template="1fr" gap="1em" classes="">
                                    <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={img1} alt="" radius="" classes="fill" />
                                    </Box>
                                    <div className='vertical gap'>
                                        <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open(par.Link, '_blank') }} classes="">
                                            <Underline size="" color="" >
                                                <Text text={`Visit Website`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Underline>
                                        </Button>
                                        </Box>
                                        <Text text={`${par.Partner}`} fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${par.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                </LaptopScreen>
                <DesktopScreen>
                <Grid orientation="column" template="repeat(3, 1fr)" gap="1em" classes="">
                    {
                        partners.map((par, i) => {
                            return (
                                <Grid orientation="column" template="1fr" gap="1em" classes="">
                                    <Box width="" height="40vh" radius="" paddingV="" paddingH="" classes="">
                                        <Image src={img1} alt="" radius="" classes="fill" />
                                    </Box>
                                    <div className='vertical gap'>
                                        <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open(par.Link, '_blank') }} classes="">
                                            <Underline size="" color="" >
                                                <Text text={`Visit Website`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Underline>
                                        </Button>
                                        </Box>
                                        <Text text={`${par.Partner}`} fontSize="1.6em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${par.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                </DesktopScreen>
                </ResponsiveWrapper>
            </Box>
            <Footer1 />
        </div>
    )
}