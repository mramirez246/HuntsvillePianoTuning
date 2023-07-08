import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../Components'
import { FiMenu } from 'react-icons/fi'
import { HiXMark } from 'react-icons/hi2'
import { c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'
// 
import logo from '../../../PHOTOS/logo.png'

export default function Navigation1() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.pathname

    function openNav() {
        if (window.innerWidth < 600) {
            document.querySelector(".nav-body").style.width = "100vw";
        } else if (window.innerWidth < 800) {
            document.querySelector(".nav-body").style.width = "50vw";
        } else if (window.innerWidth < 1000) {
            document.querySelector(".nav-body").style.width = "40vw";
        } else if (window.innerWidth < 1200) {
            document.querySelector(".nav-body").style.width = "35vw";
        } else {
            document.querySelector(".nav-body").style.width = "20vw";
        }
    }

    function closeNav() {
        document.querySelector(".nav-body").style.width = "0";
    }

    useEffect(() => {
        closeNav()
    }, [])

    return (
        <div className='roboto'>
            <ResponsiveWrapper>
                <PhoneScreen>
                    <div className='separate padding'>
                        <Box width="10vh" height="" radius="" paddingV="" paddingH="" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="">
                                <Image src={logo} alt="" radius="" classes="" />
                            </Button>
                        </Box>
                        <Button color="" backgroundColor="" radius="" func={() => { openNav() }} classes="">
                            <Icon size="2.2em" color="">
                                <FiMenu />
                            </Icon>
                        </Button>
                    </div>
                </PhoneScreen>
                <TabletScreen>
                    <div className='separate padding'>
                        <Box width="10vh" height="" radius="" paddingV="" paddingH="" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="">
                                <Image src={logo} alt="" radius="" classes="" />
                            </Button>
                        </Box>
                        <Button color="" backgroundColor="" radius="" func={() => { openNav() }} classes="">
                            <Icon size="2.2em" color="">
                                <FiMenu />
                            </Icon>
                        </Button>
                    </div>
                </TabletScreen>
                <LaptopScreen>
                    <div className='separate padding'>
                        <Box width="10vh" height="" radius="" paddingV="" paddingH="" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="">
                                <Image src={logo} alt="" radius="" classes="" />
                            </Button>
                        </Box>
                        <div className='horizontal gap'>
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="">
                                <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                <Text text={`Services`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                                <Text text={`Gallery`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                        </div>

                        <Box width="" height="fit-content" radius="" paddingV="0.8em" paddingH="1.2em" classes="dark">
                            <Button color="" backgroundColor="" radius="" func={() => {navigate('/contact') }} classes="">
                                <Text text={`Contact Us`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                        </Box>
                    </div>
                </LaptopScreen>
                <DesktopScreen>
                    <div className='separate padding'>
                        <Box width="10vh" height="" radius="" paddingV="" paddingH="" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="">
                                <Image src={logo} alt="" radius="" classes="" />
                            </Button>
                        </Box>
                        <div className='horizontal gap'>
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="">
                                <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                <Text text={`Services`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                                <Text text={`Gallery`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                        </div>

                        <Box width="" height="fit-content" radius="" paddingV="0.8em" paddingH="1.2em" classes="dark">
                            <Button color="" backgroundColor="" radius="" func={() => {navigate('/contact') }} classes="">
                                <Text text={`Contact Us`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                        </Box>
                    </div>
                </DesktopScreen>
            </ResponsiveWrapper>

            <div className='nav-body v-separate light'>
                <div className='separate padding'>
                    <Box width="18vh" height="" radius="" paddingV="" paddingH="" classes="">
                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="">
                            <Image src={logo} alt="" radius="" classes="" />
                        </Button>
                    </Box>
                    <Button color="" backgroundColor="" radius="" func={() => { closeNav() }} classes="">
                        <Icon size="2.4em" color="">
                            <HiXMark />
                        </Icon>
                    </Button>
                </div>

                <Grid orientation="column" template="1fr" gap="0.2em" classes="padding">
                    <Button color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="">
                        <Text text={`About`} fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Button>
                    <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                        <Text text={`Services`} fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Button>
                    <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                        <Text text={`Gallery`} fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Button>
                    <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="">
                        <Text text={`Contact Us`} fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Button>
                </Grid>

                <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                </Box>

                <Text text={`${c_businessName} 2023. All Rights Reserved.`} fontSize="0.8em" weight="300" color="gray" spacing="" lineHeight="" classes="text-center padding" />
            </div>
        </div>
    )
}