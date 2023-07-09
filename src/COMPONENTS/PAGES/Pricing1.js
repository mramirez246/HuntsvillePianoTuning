import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'

export default function Pricing1() {
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

    const prices = [
        {
            Price: "40",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
        },
        {
            Price: "80",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
        },
        {
            Price: "120",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ",
        }
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="vertical gap">
                <Heading1 text={`Pricing`} />
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </PhoneScreen>
                    <TabletScreen>
                        <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="80vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Box width="70vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
                <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="">
                    <hr />
                </Box>
                <ResponsiveWrapper>
                    <PhoneScreen>
                        {
                            prices.map((price, i) => {
                                return (
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Text text={`$${price.Price}`} fontSize="10vh" weight="800" color="" spacing="-1px" lineHeight="" classes="" />
                                        <Text text={`${price.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                )
                            })
                        }
                    </PhoneScreen>
                    <TabletScreen>
                        {
                            prices.map((price, i) => {
                                return (
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Text text={`$${price.Price}`} fontSize="10vh" weight="800" color="" spacing="-1px" lineHeight="" classes="" />
                                        <Text text={`${price.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                )
                            })
                        }
                    </TabletScreen>
                    <LaptopScreen>
                        <Grid orientation="column" template="1fr" gap="2em" classes="">
                            {
                                prices.map((price, i) => {
                                    return (
                                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="horizontal">
                                            <Text text={`$${price.Price}`} fontSize="10vh" weight="800" color="" spacing="-1px" lineHeight="" classes="" />
                                            <Text text={`${price.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Box>
                                    )
                                })
                            }
                        </Grid>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Grid orientation="column" template="1fr" gap="3em" classes="padding">
                            {
                                prices.map((price, i) => {
                                    return (
                                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="horizontal gap">
                                            <Text text={`$${price.Price}`} fontSize="10vh" weight="800" color="" spacing="-1px" lineHeight="" classes="text-right" />
                                            <Text text={`${price.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Box>
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