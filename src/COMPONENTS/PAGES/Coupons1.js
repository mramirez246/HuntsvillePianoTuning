import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock1.jpg'

export default function Coupons1() {
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

    const thing1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. z"

    const coupons = [
        {
            Image: img1,
            Coupon: "40% off",
            Details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. "
        },
        {
            Image: img1,
            Coupon: "40% off",
            Details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. "
        },
        {
            Image: img1,
            Coupon: "40% off",
            Details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. "
        },
        {
            Image: img1,
            Coupon: "40% off",
            Details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. "
        },
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Box width="" height="" radius="" paddingV="" paddingH="" classes="text-center">
                    <Heading1 text={`Check out our new deals!`} />
                </Box>

                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                </Box>

                <Box width="" height="" radius="" paddingV="2em" paddingH="0" classes="">
                    <ResponsiveWrapper>
                        <PhoneScreen>
                            <Grid orientation="column" template="1fr" gap="1em" classes="">
                                {
                                    coupons.map((coup, i) => {
                                        return (
                                            <Border size="1px" color="" radius="">
                                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                        <Image src={coup.Image} alt="" radius="" classes="fill" />
                                                    </Box>
                                                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                                                        <Box width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="">
                                                            <Text text={`${coup.Coupon}`} fontSize="2.8em" weight="700" color="" spacing="" lineHeight="" classes="text-center" />
                                                        </Box>
                                                        <Text text={`${coup.Details}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                    </Box>
                                                </Box>
                                            </Border>
                                        )
                                    })
                                }
                            </Grid>
                        </PhoneScreen>
                        <TabletScreen>
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                {
                                    coupons.map((coup, i) => {
                                        return (
                                            <Border size="1px" color="" radius="">
                                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                        <Image src={coup.Image} alt="" radius="" classes="fill" />
                                                    </Box>
                                                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                                                        <Box width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="">
                                                            <Text text={`${coup.Coupon}`} fontSize="2.8em" weight="700" color="" spacing="" lineHeight="" classes="text-center" />
                                                        </Box>
                                                        <Text text={`${coup.Details}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                    </Box>
                                                </Box>
                                            </Border>
                                        )
                                    })
                                }
                            </Grid>
                        </TabletScreen>
                        <LaptopScreen>
                            <Grid orientation="column" template="repeat(3, 1fr)" gap="1em" classes="">
                                {
                                    coupons.map((coup, i) => {
                                        return (
                                            <Border size="1px" color="" radius="">
                                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                        <Image src={coup.Image} alt="" radius="" classes="fill" />
                                                    </Box>
                                                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                                                        <Box width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="">
                                                            <Text text={`${coup.Coupon}`} fontSize="2.8em" weight="700" color="" spacing="" lineHeight="" classes="text-center" />
                                                        </Box>
                                                        <Text text={`${coup.Details}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                    </Box>
                                                </Box>
                                            </Border>
                                        )
                                    })
                                }
                            </Grid>
                        </LaptopScreen>
                        <DesktopScreen>
                            <Box width="90vw" height="" radius="" paddingV="" paddingH="" classes="center">
                                <Grid orientation="column" template="repeat(4, 1fr" gap="1em" classes="">
                                    {
                                        coupons.map((coup, i) => {
                                            return (
                                                <Border size="1px" color="" radius="">
                                                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                                            <Image src={coup.Image} alt="" radius="" classes="fill" />
                                                        </Box>
                                                        <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                                                            <Box width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="">
                                                                <Text text={`${coup.Coupon}`} fontSize="2.8em" weight="700" color="" spacing="" lineHeight="" classes="text-center" />
                                                            </Box>
                                                            <Text text={`${coup.Details}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                        </Box>
                                                    </Box>
                                                </Border>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </DesktopScreen>
                    </ResponsiveWrapper>
                </Box>
            </Box>
            <Footer1 />
        </div>
    )
}