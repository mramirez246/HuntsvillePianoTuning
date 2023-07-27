import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/about.jpg'
import img2 from '../../PHOTOS/stock5.jpg'
import img3 from '../../PHOTOS/family.jpg'

export default function Bio1() {
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

    const thing1 = "  "
    const thing2 = "Miguel Ramirez began tuning pianos in 1998 at age 17 in his native town of San Diego, CA. He apprenticed with the current piano technician of the San Diego Symphony, Jonnel Domilos, and alongside him worked on several pianos at the former Piano Warehouse in San Marcos, CA as well as in private homes and studios. Miguel currently maintains the pianos at Huntsville Strings Shop and is building a network here in the South that includes Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR."

    const thing3 = " "
    const thing4 = "Miguel is also a concert violinist and multi-instrumentalist who has played in several orchestras and rock bands, and sings in his church choir. He also runs a successful teaching studio offering lessons in violin and other instruments, with students who have gone on to national achievements. With his detailed ear, he has also engineered and co-engineered audio recordings in the classical and rock genres."

    const thing5 = " "
    const thing6 = "In 2021 Miguel moved with his wife and two daughters to the beautiful Huntsville, AL area and has enjoyed helping the wonderful people here with their pianos and all aspects of their musical journey."

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
            <ResponsiveWrapper>
                <PhoneScreen>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                    <Heading1 text={`Here is a bit about me..`} />
                        
                    </Box>
                
                </PhoneScreen>
                <TabletScreen>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                    <Heading1 text={`Here is a bit about me..`} />
                        
                    </Box>
                
                </TabletScreen>
                <LaptopScreen>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="5vw" classes="">
                    <Heading1 text={`Here is a bit about me..`} />
                        
                    </Box>
                </LaptopScreen>
                <DesktopScreen>
                <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="13vw" classes="">
                <Heading1 text={`Here is a bit about me..`} />
                    
                </Box>
                
                </DesktopScreen>
                </ResponsiveWrapper>
                
                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

                </Box>
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="1em" classes="">
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing2}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing4}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing5}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing6}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img3} alt="" radius="" classes="" />
                        </Grid>
                        </Box>
                        
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="1em" classes="">
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing2}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Image src={img1} alt="" radius="" classes="fill image-top" />
                            </Box>
                            
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing4}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing5}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing6}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img3} alt="" radius="" classes="" />
                        </Grid>
                        </Box>
                        
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="5vw" classes="">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing2}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Image src={img1} alt="" radius="" classes="fill image-top" />
                            </Box>
                            
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="fill" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing4}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing5}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing6}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img3} alt="" radius="" classes="" />
                        </Grid>
                        </Box>
                        
                    </LaptopScreen>
                    <DesktopScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="13vw" classes="">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="2em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing2}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                            <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Image src={img1} alt="" radius="" classes="fill image-top" />
                            </Box>
                            
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="fill" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="2em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing4}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing5}`} fontSize="2em" weight="600" color="" spacing="" lineHeight="1em" classes="" />
                                <Text text={`${thing6}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img3} alt="" radius="" classes="" />
                        </Grid>
                        </Box>
                    
                    </DesktopScreen>
                </ResponsiveWrapper>

            </Box>
            <Footer1 />
        </div>
    )
}