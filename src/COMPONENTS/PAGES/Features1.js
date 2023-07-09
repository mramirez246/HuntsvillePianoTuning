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

export default function Features1() {
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

    const features = [
        {
            Feature: "Bagel Feature Plus",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Subject: "Technology"
        },
        {
            Feature: "Bagel Feature Plus",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Subject: "Technology"
        },
        {
            Feature: "Bagel Feature Plus",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Subject: "Technology"
        },
        {
            Feature: "Bagel Feature Plus",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Subject: "Technology"
        },
        {
            Feature: "Bagel Feature Plus",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Subject: "Technology"
        },
        {
            Feature: "Bagel Feature Plus",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. \n Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Subject: "Technology"
        },
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />

            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Heading1 text={`Check out our latest features. 2023.`} />

                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                </Box>

                <ResponsiveWrapper>
                    <PhoneScreen>
                        {
                            features.map((feat, i) => {
                                return (
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap padding">
                                        <Text text={`${feat.Feature}`} fontSize="1.8em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${feat.Subject}`} fontSize="1.3em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${feat.Desc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                )
                            })
                        }
                    </PhoneScreen>
                    <TabletScreen>
                        {
                            features.map((feat, i) => {
                                return (
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap padding">
                                        <Text text={`${feat.Feature}`} fontSize="1.8em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${feat.Subject}`} fontSize="1.3em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${feat.Desc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                )
                            })
                        }
                    </TabletScreen>
                    <LaptopScreen>
                        {
                            features.map((feat, i) => {
                                return (
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="horizontal gap padding">
                                        <div className='vertical gap'>
                                            <Text text={`${feat.Feature}`} fontSize="1.8em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                            <Text text={`${feat.Subject}`} fontSize="1.3em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        </div>
                                        <Text text={`${feat.Desc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                )
                            })
                        }
                    </LaptopScreen>
                    <DesktopScreen>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                        {
                            features.map((feat, i) => {
                                return (
                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="horizontal gap padding">
                                        <div className='vertical gap'>
                                            <Text text={`${feat.Feature}`} fontSize="1.8em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                            <Text text={`${feat.Subject}`} fontSize="1.3em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                        </div>
                                        <Text text={`${feat.Desc}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                )
                            })
                        }
                        </Grid>
                    </DesktopScreen>
                </ResponsiveWrapper>
<Image src={img1} alt="" radius="" classes=""/>

            </Box>

            <Footer1 />
        </div>
    )
}