import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessDesc, c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'

export default function Component() {
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
        <div className='roboto dark'>
            <ResponsiveWrapper>
                <PhoneScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                        <Text text={`${c_businessDesc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        <Grid orientation="row" template="1fr" gap="1.5em" classes="">
                            <div>
                                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                                </Box>
                                <Text text={`Links`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </div>
                            <div>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="">
                                            <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                            <Text text={`Services`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                                            <Text text={`Gallery`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                            </div>

                            <div>
                                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                                </Box>
                                <Text text={`Shop`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </div>
                            <div>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/menu') }} classes="">
                                            <Text text={`Menu`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/products') }} classes="">
                                            <Text text={`Products`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                            </div>
                        </Grid>
                        <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                        </Box>
                        <Text text={`${c_businessName}`} fontSize="10vh" weight="900" color="" spacing="" lineHeight="0.8em" classes="all-caps" />

                    </Box>
                </PhoneScreen>
                <TabletScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                        <Text text={`${c_businessDesc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        <Grid orientation="row" template="1fr" gap="1.5em" classes="">
                            <div>
                                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                                </Box>
                                <Text text={`Links`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </div>
                            <div>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="">
                                            <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                            <Text text={`Services`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                                            <Text text={`Gallery`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                            </div>

                            <div>
                                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                                </Box>
                                <Text text={`Shop`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </div>
                            <div>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/menu') }} classes="">
                                            <Text text={`Menu`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/products') }} classes="">
                                            <Text text={`Products`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                            </div>
                        </Grid>
                        <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                        </Box>
                        <Text text={`${c_businessName}`} fontSize="10vh" weight="900" color="" spacing="" lineHeight="0.8em" classes="all-caps" />

                    </Box>
                </TabletScreen>
                <LaptopScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                        <Grid orientation="column" template="2fr 1fr 1fr" gap="2em" classes="">
                            <Text text={`${c_businessDesc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            <Grid orientation="row" template="1fr" gap="1em" classes="">
                                <Text text={`Links`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <div>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="">
                                                <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                                <Text text={`Services`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                                                <Text text={`Gallery`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                </div>
                            </Grid>
                            <Grid orientation="row" template="1fr" gap="" classes="">
                                <Text text={`Shop`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <div>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/menu') }} classes="">
                                                <Text text={`Menu`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/products') }} classes="">
                                                <Text text={`Products`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                </div>
                            </Grid>
                        </Grid>

                        <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                        </Box>
                        <Text text={`${c_businessName}`} fontSize="13vh" weight="900" color="" spacing="" lineHeight="0.8em" classes="all-caps" />

                    </Box>
                </LaptopScreen>
                <DesktopScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                        <Grid orientation="column" template="2fr 1fr 1fr" gap="2em" classes="">
                            <Box width="75%" height="" radius="" paddingV="" paddingH="" classes="">
                            <Text text={`${c_businessDesc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                            <Grid orientation="row" template="1fr" gap="1em" classes="">
                                <Text text={`Links`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <div>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="">
                                                <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                                <Text text={`Services`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                                                <Text text={`Gallery`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                </div>
                            </Grid>
                            <Grid orientation="row" template="1fr" gap="" classes="">
                                <Text text={`Shop`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <div>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/menu') }} classes="">
                                                <Text text={`Menu`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/products') }} classes="">
                                                <Text text={`Products`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                </div>
                            </Grid>
                        </Grid>

                        <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                        </Box>
                        <Text text={`${c_businessName}`} fontSize="16vh" weight="900" color="" spacing="" lineHeight="0.8em" classes="all-caps" />

                    </Box>
                </DesktopScreen>
            </ResponsiveWrapper>
        </div>
    )
}