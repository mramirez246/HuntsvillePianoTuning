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
import img2 from '../../PHOTOS/violin.jpg'
import img3 from '../../PHOTOS/family.jpg'

export default function Bio1() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname

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

    const thing1 = "Miguel Ramirez embarked on his piano tuning journey at the age of 17, back in 1998, in his hometown of San Diego, CA. Under the guidance of Jonnel Domilos, the esteemed piano technician of the San Diego Symphony, Miguel honed his skills. His early experiences involved collaborating with Jonnel on numerous pianos at the Piano Warehouse in San Marcos, CA, in addition to servicing pianos in private residences and studios. "
    const thing2 = "Currently, Miguel serves as the dedicated piano tuner at Huntsville Strings Shop while actively cultivating professional relationships with piano technicians Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR."

    const thing3 = "Miguel's deep-rooted connection to music traces back to his childhood within a musically inclined family. He began his musical journey at the tender age of 3, taught by his father Margarito Ramirez on the piano and violin. As he progressed in his musical career, Miguel achieved the status of a concert violinist and teacher. Along this path, he had the privilege of receiving instruction from many renowned violinists including David Chan, concertmaster of The Metropolitan Opera Orchestra in New York, and Juan Ramirez, an Atlanta Symphony Orchestra violinist who also happens to be Miguel's uncle. "
    const thing4 = "Miguel's violin talents have graced local stages, including performances with the Shoals Symphony Orchestra in Florence, AL, special guest appearance in the Snead State College faculty recital series in Boaz, AL, and participation in the annual Living Christmas Tree Orchestra at First Baptist Church in Huntsville, AL. "
    const thing5 = " Beyond his piano tuning and violin performances, Miguel operates a thriving teaching studio at Huntsville Strings Shop, where he imparts knowledge in violin, viola, and cello. Notably, alumni of his studio have achieved remarkable milestones, including performing a violin solo alongside the Principal Ballerina of the Moscow Ballet, Anna Radik, at Copley Symphony Hall in San Diego, CA., and gaining acceptance into prestigious institutions such as the Eastman School of Music, Mannes School of Music, Peabody Institute, and Meadowmount School of Music."
    
    const thing6 = "Singing holds a special place in Miguel's heart, and he regularly sings in his church choir with his beloved church family at St. Michael Orthodox Christian Church. Miguel's finely tuned ear also extends into the audio recording field; he has taken on audio engineering projects in the classical and rock genres."
    const thing7 = "In 2021, Miguel embarked on a new chapter in Huntsville, AL, relocating with his wife and two daughters. He finds so much joy in assisting the local community and those in surrounding areas with their pianos. Miguel's commitment to you and your piano is that through careful work and attention to detail, your playing resonates to its fullest potential. Book a tuning with Miguel today!"

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
                                <Text text={`${thing1}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing2}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img1} alt="" radius="" classes="" />
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Image src={img2} alt="" radius="" classes="" />
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                            <Text text={`${thing3}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing4}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing5}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing6}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing7}`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img3} alt="" radius="" classes="" />
                        </Grid>
                        </Box>
                        
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="1em" classes="">
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
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
                                
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                            <Text text={`${thing3}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing4}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing5}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing6}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing7}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img3} alt="" radius="" classes="" />
                        </Grid>
                        </Box>
                        
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="5vw" classes="">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing2}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Image src={img1} alt="" radius="" classes="fill image-top" />
                            </Box>
                            
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Layer position="relative" top="0" left="" bottom="" right="" classes="">
                                <Image src={img2} alt="" radius="" classes="fill" />
                            </Layer>
                            
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing4}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing5}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing6}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing7}`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />

                            </Box>
                            <Image src={img3} alt="" radius="" classes="" />
                        </Grid>
                        </Box>
                        
                    </LaptopScreen>
                    <DesktopScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="13vw" classes="">
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing1}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing2}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            </Box>
                            <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Image src={img1} alt="" radius="" classes="fill image-top" />
                            </Box>
                            
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                            <Layer position="relative" top="0" left="" bottom="" right="" classes="">
                            <Image src={img2} alt="" radius="" classes="fill" />
                            </Layer>
                            
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing3}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                
                            </Box>
                        </Grid>
                        <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                        </Box>
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="vertical gap">
                                <Text text={`${thing4}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing5}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing6}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${thing7}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="" />

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