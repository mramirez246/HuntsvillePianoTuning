import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../Components'
import { FiMenu } from 'react-icons/fi'
import { HiXMark } from 'react-icons/hi2'
import { c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'
import { BsFacebook, BsInstagram, BsTwitter, BsYelp } from 'react-icons/bs'
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
                        <Box width="50vw" height="" radius="" paddingV="" paddingH="" classes="">
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
                        <Box width="30vw" height="" radius="" paddingV="" paddingH="" classes="">
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
                        <Box width="25vw" height="" radius="" paddingV="0" paddingH="3vw" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="">
                                <Image src={logo} alt="" radius="" classes="" />
                            </Button>
                        </Box>
                        <div className='horizontal gap'>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="1.5vh" paddingH="0" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                <Text text={`Pricing`} fontSize="1.8vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            </Box>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="1.5vh" paddingH="0" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/bio') }} classes="">
                                <Text text={`About`} fontSize="1.8vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            </Box>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="1.5vh" paddingH="0" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="">
                                <Text text={`Contact`} fontSize="1.8vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            </Box>
                            {/* <Box width="" height="" radius="" backgroundColor="" paddingV="1.5vh" paddingH="0" classes=""> 
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                                <Text text={`FAQ`} fontSize="1.8vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            </Box> */}
                            
                            
                        </div>

                        <Box width="fit-content" height="fit-content" radius="" paddingV=".5vh" paddingH="3vw" classes="fill">
                            <Border size="1px" color="" radius="">
                                <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                        <Text text={`BOOK A TUNING`} fontSize="2.5vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                </Button>
                            </Border>
                        </Box>
                    </div>
                </LaptopScreen>
                <DesktopScreen>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="2vh" paddingH="13vw" classes="">
                    <div className='separate'>


                        <Box width="15vw" height="" radius="" paddingV="" paddingH="" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="">
                                <Image src={logo} alt="Huntsville Piano Tuning" radius="" classes="" />
                            </Button>
                        </Box>

                        <div className='horizontal gap'>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="1.5vh" paddingH="0" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                <Text text={`Pricing`} fontSize="1.2vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            </Box>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="1.5vh" paddingH="0" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/bio') }} classes="">
                                <Text text={`About`} fontSize="1.2vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            </Box>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="1.5vh" paddingH="0" classes="">
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="">
                                <Text text={`Contact`} fontSize="1.2vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            </Box>
                            {/* <Box width="" height="" radius="" backgroundColor="" paddingV="1.5vh" paddingH="0" classes=""> 
                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/gallery') }} classes="">
                                <Text text={`FAQ`} fontSize="1.2vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            </Box> */}
                            
                            
                        </div>
                        <div className='horizontal gap'>
                                    <div className='horizontal gap padding-v'>
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open('https://www.instagram.com/huntsvillepianotuning/')}} classes="">
                                            <Icon size="1.2vw" color="#D0407B">
                                                <BsInstagram />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open('https://www.facebook.com/huntsvillepianotuning/')}} classes="">
                                            <Icon size="1.2vw" color="#1082E5">
                                                <BsFacebook />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open('https://www.yelp.com/biz/huntsville-piano-tuning-triana')}} classes="">
                                            <Icon size="1.2vw" color="red">
                                                <BsYelp />
                                            </Icon>
                                        </Button>
                                    </div>
                            
                        <Box width="fit-content" height="fit-content" radius="" paddingV=".5vh" paddingH="0" classes="">
                            <Border size="1px" color="" radius="">
                                <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                        <Text text={`BOOK A TUNING`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                </Button>
                            </Border>
                        </Box>
                        </div>
                    </div>
                    </Box>
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
                    <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                        <Text text={`Pricing`} fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Button>
                    <Button color="" backgroundColor="" radius="" func={() => { navigate('/bio') }} classes="">
                        <Text text={`About`} fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Button>
                    <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="">
                        <Text text={`Contact`} fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Button>
                    {/* <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes=""> 
                        <Text text={`FAQ`} fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    </Button> */}
                    <Box width="fit-content" height="fit-content" radius="" paddingV=".5vh" paddingH="0" classes="">
                            <Border size="1px" color="" radius="">
                                <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                        <Text text={`BOOK A TUNING`} fontSize="1.6em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                </Button>
                            </Border>
                        </Box>
                </Grid>


                <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                </Box>
                <Grid orientation="row" template="1fr" gap="4em" classes="">
                    <Box width="30vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="left padding">
                    <div className='horizontal gap'>
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open('https://www.instagram.com/huntsvillepianotuning/')}} classes="">
                                            <Icon size="1.8em" color="#D0407B">
                                                <BsInstagram />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open('https://www.facebook.com/huntsvillepianotuning/')}} classes="">
                                            <Icon size="1.8em" color="#1082E5">
                                                <BsFacebook />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { window.open('https://www.yelp.com/biz/huntsville-piano-tuning-triana')}} classes="">
                                            <Icon size="1.8em" color="red">
                                                <BsYelp />
                                            </Icon>
                                        </Button>
                                    </div>
                    </Box>
                    <Text text={`${c_businessName} 2023. All Rights Reserved.`} fontSize="0.8em" weight="300" color="gray" spacing="" lineHeight="" classes="text-left padding" />
                </Grid>
                
                
                        
                            
                          
                            
                    
               
                            
                
                            
            </div>
        </div>
    )
}