import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessDesc, c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'
import { BsFacebook, BsInstagram, BsTwitter, BsYelp } from 'react-icons/bs'

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
                        
                        <Grid orientation="row" template="1fr" gap="1.5em" classes="">
                            <Text text={`Welcome to Huntsville Piano Tuning, your premier destination for professional piano tuning services in Huntsville, Alabama as well as the greater Huntsville metropolitan area such as Madison, AL; Athens, AL; Decatur, AL; Hazel Green, AL; Fayetteville, TN; Ardmore, AL; Ardmore, TN; Owens Cross Roads, AL; New Market, AL; Gurley, AL; Guntersville, AL; and Arab, AL. Our expert piano tuner is dedicated to ensuring that your piano sounds its best, delivering exceptional results that bring out the full potential of your instrument. With years of experience and a keen ear for precision, we provide top-notch piano tuning and maintenance solutions tailored to meet your specific needs. Whether you own a grand piano or upright piano, our skilled technician uses state-of-the-art tools and techniques to ensure optimal pitch, tone, and resonance. Experience the joy of playing a perfectly tuned piano by scheduling an appointment with Huntsville Piano Tuning today. Trust us to elevate your musical experience with our unmatched piano tuning expertise.`} fontSize="0.5em" weight="" color="#999a9b" spacing="" lineHeight="" classes=""/>
                            <div>
                                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                                </Box>
                                <Text text={`Links`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </div>
                            <div>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                            <Text text={`Pricing`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/bio') }} classes="">
                                            <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="">
                                            <Text text={`Contact`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="" height="" radius="" backgroundColor="" paddingV=".5em" paddingH="" classes="">
                                
                                </Box>
                                <Box width="fit-content" height="fit-content" radius="" paddingV="" paddingH="" classes="left light">
                                    <Border size="1px" color="" radius="">
                                        <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                            <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                <Text text={`BOOK A TUNING`} fontSize="6vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            </Box>
                                        </Button>
                                    </Border>
                                </Box>
                            </div>
                            <div className='horizontal gap padding-v'>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#D0407B">
                                                <BsInstagram />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#1082E5">
                                                <BsFacebook />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#1D99E5">
                                                <BsYelp />
                                            </Icon>
                                        </Button>
                                    </div>

                            
                        </Grid>
                        <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                        </Box>
                        <Text text={`${c_businessName}`} fontSize="8vh" weight="900" color="" spacing="" lineHeight="0.8em" classes="all-caps" />

                    </Box>
                </PhoneScreen>
                <TabletScreen>
                    <Box width="" height="" radius="" paddingV="" paddingH="" classes="padding">
                        
                        <Grid orientation="row" template="1fr" gap="1.5em" classes="">
                            <Text text={`Welcome to Huntsville Piano Tuning, your premier destination for professional piano tuning services in Huntsville, Alabama as well as the greater Huntsville metropolitan area such as Madison, AL; Athens, AL; Decatur, AL; Hazel Green, AL; Fayetteville, TN; Ardmore, AL; Ardmore, TN; Owens Cross Roads, AL; New Market, AL; Gurley, AL; Guntersville, AL; and Arab, AL. Our expert piano tuner is dedicated to ensuring that your piano sounds its best, delivering exceptional results that bring out the full potential of your instrument. With years of experience and a keen ear for precision, we provide top-notch piano tuning and maintenance solutions tailored to meet your specific needs. Whether you own a grand piano or upright piano, our skilled technician uses state-of-the-art tools and techniques to ensure optimal pitch, tone, and resonance. Experience the joy of playing a perfectly tuned piano by scheduling an appointment with Huntsville Piano Tuning today. Trust us to elevate your musical experience with our unmatched piano tuning expertise.`} fontSize="0.5em" weight="" color="#999a9b" spacing="" lineHeight="" classes=""/>
                            <div>
                                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                                </Box>
                                <Text text={`Links`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </div>
                            <div>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                            <Text text={`Pricing`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/bio') }} classes="">
                                            <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Underline size="1px" color="" >
                                        <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="">
                                            <Text text={`Contact`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        </Button>
                                    </Underline>
                                </Box>
                                <Box width="" height="" radius="" backgroundColor="" paddingV=".5em" paddingH="" classes="">
                                
                                </Box>
                                <Box width="fit-content" height="fit-content" radius="" paddingV="" paddingH="" classes="left light">
                                    <Border size="1px" color="" radius="">
                                        <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                            <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                <Text text={`BOOK A TUNING`} fontSize="4vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            </Box>
                                        </Button>
                                    </Border>
                                </Box>
                                
                            </div>
                            <div className='horizontal gap padding-v'>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#D0407B">
                                                <BsInstagram />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#1082E5">
                                                <BsFacebook />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#1D99E5">
                                                <BsYelp />
                                            </Icon>
                                        </Button>
                                    </div>

                            
                        </Grid>
                        <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                        </Box>
                        <Text text={`${c_businessName}`} fontSize="8vh" weight="900" color="" spacing="" lineHeight="0.8em" classes="all-caps" />

                    </Box>
                </TabletScreen>
                <LaptopScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="5vw" classes="">
                        <Grid orientation="column" template="1fr 1fr" gap="2em" classes="">
                            <Text text={`Welcome to Huntsville Piano Tuning, your premier destination for professional piano tuning services in Huntsville, Alabama as well as the greater Huntsville metropolitan area such as Madison, AL; Athens, AL; Decatur, AL; Hazel Green, AL; Fayetteville, TN; Ardmore, AL; Ardmore, TN; Owens Cross Roads, AL; New Market, AL; Gurley, AL; Guntersville, AL; and Arab, AL. Our expert piano tuner is dedicated to ensuring that your piano sounds its best, delivering exceptional results that bring out the full potential of your instrument. With years of experience and a keen ear for precision, we provide top-notch piano tuning and maintenance solutions tailored to meet your specific needs. Whether you own a grand piano or upright piano, our skilled technician uses state-of-the-art tools and techniques to ensure optimal pitch, tone, and resonance. Experience the joy of playing a perfectly tuned piano by scheduling an appointment with Huntsville Piano Tuning today. Trust us to elevate your musical experience with our unmatched piano tuning expertise.`} fontSize="0.5em" weight="" color="#999a9b" spacing="" lineHeight="" classes=""/>
                            <Grid orientation="row" template="1fr" gap="1em" classes="">
                                <Text text={`Links`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <div>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                                <Text text={`Pricing`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/bio') }} classes="">
                                                <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                </Box>
                                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="">
                                                <Text text={`Contact`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                </Box>
                                </div>
                                
                                <Box width="fit-content" height="fit-content" radius="" paddingV="" paddingH="" classes="left light">
                                         <Border size="1px" color="" radius="">
                                             <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                                 <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                <Text text={`BOOK A TUNING`} fontSize="2.5vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                                 </Box>
                                             </Button>
                                         </Border>
                                </Box>
                                <div className='horizontal gap padding-v'>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#D0407B">
                                                <BsInstagram />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#1082E5">
                                                <BsFacebook />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#1D99E5">
                                                <BsYelp />
                                            </Icon>
                                        </Button>
                                </div>
                                
                            </Grid>
                            
                        </Grid>

                        <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                        </Box>
                        <Text text={`${c_businessName}`} fontSize="8vh" weight="900" color="" spacing="" lineHeight="0.8em" classes="all-caps" />

                    </Box>
                </LaptopScreen>
                <DesktopScreen>
                    <Box width="" height="" radius="" paddingV="1em" paddingH="13vw" classes="">
                        <Grid orientation="column" template="2fr 1fr 1fr" gap="2em" classes="">
                            <Text text={`Welcome to Huntsville Piano Tuning, your premier destination for professional piano tuning services in Huntsville, Alabama as well as the greater Huntsville metropolitan area such as Madison, AL; Athens, AL; Decatur, AL; Hazel Green, AL; Fayetteville, TN; Ardmore, AL; Ardmore, TN; Owens Cross Roads, AL; New Market, AL; Gurley, AL; Guntersville, AL; and Arab, AL. Our expert piano tuner is dedicated to ensuring that your piano sounds its best, delivering exceptional results that bring out the full potential of your instrument. With years of experience and a keen ear for precision, we provide top-notch piano tuning and maintenance solutions tailored to meet your specific needs. Whether you own a grand piano or upright piano, our skilled technician uses state-of-the-art tools and techniques to ensure optimal pitch, tone, and resonance. Experience the joy of playing a perfectly tuned piano by scheduling an appointment with Huntsville Piano Tuning today. Trust us to elevate your musical experience with our unmatched piano tuning expertise.`} fontSize="1em" weight="" color="#999a9b" spacing="" lineHeight="" classes=""/>
                            <Grid orientation="row" template="1fr" gap="1em" classes="">
                                
                                
                                <Text text={`Links`} fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <div>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/services') }} classes="">
                                                <Text text={`Pricing`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/bio') }} classes="">
                                                <Text text={`About`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                    <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="">
                                        <Underline size="1px" color="" >
                                            <Button color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="">
                                                <Text text={`Contact`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Underline>
                                    </Box>
                                </div>
                                <Box width="fit-content" height="fit-content" radius="" paddingV="" paddingH="" classes="left light">
                                         <Border size="1px" color="" radius="">
                                             <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                                 <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                <Text text={`BOOK A TUNING`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                                 </Box>
                                             </Button>
                                         </Border>
                                </Box>
                                <div className='horizontal gap padding-v'>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#D0407B">
                                                <BsInstagram />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#1082E5">
                                                <BsFacebook />
                                            </Icon>
                                        </Button>
                                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                            <Icon size="1.8em" color="#1D99E5">
                                                <BsYelp />
                                            </Icon>
                                        </Button>
                                    </div>
                            </Grid>
                            
                            
                        </Grid>


                        <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">

                        </Box>
                        <Text text={`${c_businessName}`} fontSize="10vh" weight="900" color="" spacing="" lineHeight="0.8em" classes="all-caps" />

                    </Box>
                </DesktopScreen>
            </ResponsiveWrapper>
        </div>
    )
}