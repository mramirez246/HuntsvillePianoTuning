import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline, Meta } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import {MdOutlinePiano} from 'react-icons/md'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Navigation2 from './UTILITIES/Navigation2'
import Footer1 from './UTILITIES/Footer1'
// 
import img1 from '../../PHOTOS/stock1.jpg'
import img2 from '../../PHOTOS/inspire.png'
import img3 from '../../PHOTOS/family-piano.jpg'
import img4 from '../../PHOTOS/couple.jpg'
import img5 from '../../PHOTOS/about.jpg'

export default function Home1() {
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
        <div className='roboto'>
            <Meta route={c_routes.reduce((found, route) => { if (route.Route === currentPath) { return route; } return found; }, null)} />
            <Box width="" height="" radius="" backgroundColor="#973228" paddingV="1.4em" paddingH="" classes="">
                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="horizontal center gap">
                {/* <Icon size="26px" color="white">
                <MdOutlinePiano />
                </Icon> */}
            <Text text={`Limited time New Clients Only 20% off piano tuning services. Click BOOK A TUNING and select discounted option.`} fontSize="22px" weight="500" color="white" spacing="" lineHeight="" classes="text-center"/>
                </Box>
            </Box>
            <Navigation1 />
            
            <Box width="" height="5vh" radius="" paddingV="" paddingH="" classes="">
            </Box>
{/* Top Section */}
            <ResponsiveWrapper>
                <PhoneScreen>
                <div className='padding'>
                    <Grid orientation="row" template="1fr" gap="2em" classes="">
                        <Heading1 text={`We help inspire your musical journey`} />
                        <Box width="fit-content" height="fit-content" radius="" paddingV="" paddingH="" classes="left">
                            <Border size="1px" color="" radius="">
                                <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                        <Text text={`BOOK A TUNING`} fontSize="6vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                </Button>
                            </Border>
                        </Box>
                        <Box width="" height="40vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Image src={img3} alt="" radius="" classes="fill" />  
                        </Box>
                        <Text text={`At Huntsville Piano Tuning, your musical journey takes center stage. We know that playing an in-tune piano makes you want to play more! As dedicated owner and skilled piano tuner, Miguel Ramirez believes that every musician should experience the sheer joy of playing their instrument at its finest. With meticulous attention to detail, Miguel is committed to escalating your musical experience. Book a tuning today and let Huntsville Piano Tuning help inspire your musical journey.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                        <Box width="" height="40vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Image src={img4} alt="" radius="" classes=" fill"/>
                        </Box>
                        
                    </Grid>
                </div>   
                </PhoneScreen>
                <TabletScreen>
                <Grid orientation="row" template="1fr" gap="2em" classes="padding">
                        <Heading1 text={`We help inspire your musical journey`} />
                        <Box width="fit-content" height="fit-content" radius="" paddingV="" paddingH="" classes="left">
                            <Border size="1px" color="" radius="">
                                <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                        <Text text={`BOOK A TUNING`} fontSize="4vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                    </Box>
                                </Button>
                            </Border>
                        </Box>
                        <Box width="" height="40vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Image src={img3} alt="" radius="" classes="fill" />  
                        </Box>
                        <Text text={`At Huntsville Piano Tuning, your musical journey takes center stage. We know that playing an in-tune piano makes you want to play more! As dedicated owner and skilled piano tuner, Miguel Ramirez believes that every musician should experience the sheer joy of playing their instrument at its finest. With meticulous attention to detail, Miguel is committed to escalating your musical experience. Book a tuning today and let Huntsville Piano Tuning help inspire your musical journey.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                        <Box width="" height="40vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Image src={img4} alt="" radius="" classes=" fill"/>
                        </Box>
                        
                    </Grid>
                    
                </TabletScreen>
                <LaptopScreen>
                <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="5vw" classes="">
                    <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                        <Grid orientation="column" template="1fr 2fr" gap="1em" classes="center">
                            
                            <Grid orientation="row" template="" gap="1em" classes="">
                               <Box width="20vw" height="" radius="" backgroundColor="" paddingV="0" paddingH="" classes="left">
                                    {/* <Image src={img2} alt="" radius="" classes="fit"/> */}
                                    <Heading3 text={`We help inspire your musical journey`} classes={``} />
                               </Box>
                               <Box width="fit-content" height="fit-content" radius="" paddingV="2em" paddingH="0" classes="left">
                                   <Border size="1px" color="" radius="">
                                       <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                           <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                               <Text text={`BOOK A TUNING`} fontSize="2.5vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                           </Box>
                                       </Button>
                                   </Border>
                               </Box>
                            </Grid>
                               
                           <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                               <Image src={img3} alt="" radius="" classes=" fill"/>
                           </Box>
               </Grid>
                    </Box>
                
           <Box width="" height="2em" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
           </Box>
               <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                   <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                       <Layer position="relative" top="0" left="" bottom="" right="" classes="">
                           <Image src={img4} alt="" radius="" classes="fit "/>
                       </Layer>
                       
                   </Box>
               <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
               <Grid orientation="row" template="" gap="1em" classes="">

               <Text text={`At Huntsville Piano Tuning, your musical journey takes center stage. We know that playing an in-tune piano makes you want to play more! As dedicated owner and skilled piano tuner, Miguel Ramirez believes that every musician should experience the sheer joy of playing their instrument at its finest. With meticulous attention to detail, Miguel is committed to escalating your musical experience. Book a tuning today and let Huntsville Piano Tuning help inspire your musical journey.`} fontSize="2vw" weight="" color="" spacing="" lineHeight="" classes=""/>
               </Grid>
               
               </Box>
               
               </Grid>
                </Box>    
                   
                </LaptopScreen>

                {/* testing
                testing
                testing
                testing */}

                <DesktopScreen>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="13vw" classes="">
                    
                    <Grid orientation="column" template="1fr 2fr" gap="1em" classes="center">
                            
                                 <Grid orientation="row" template="" gap="1em" classes="">
                                    <Box width="20vw" height="" radius="" backgroundColor="" paddingV="0" paddingH="" classes="left">
                                         {/* <Image src={img2} alt="" radius="" classes="fit"/> */}
                                         <Heading3 text={`We help inspire your musical journey`} classes={``} />
                                    </Box>
                                    <Box width="fit-content" height="fit-content" radius="" paddingV="2em" paddingH="0" classes="left">
                                        <Border size="1px" color="" radius="">
                                            <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                                <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                    <Text text={`BOOK A TUNING`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                                </Box>
                                            </Button>
                                        </Border>
                                    </Box>
                                 </Grid>
                                    
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                    <Image src={img3} alt="" radius="" classes=" fill"/>
                                </Box>
                    </Grid>
                <Box width="" height="3em" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                </Box>
                    <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <Layer position="relative" top="0" left="" bottom="" right="" classes="">
                                <Image src={img4} alt="" radius="" classes="fit "/>
                            </Layer>
                            
                        </Box>
                    <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                    <Grid orientation="row" template="" gap="1em" classes="">

                    <Text text={`At Huntsville Piano Tuning, your musical journey takes center stage. We know that playing an in-tune piano makes you want to play more! As dedicated owner and skilled piano tuner, Miguel Ramirez believes that every musician should experience the sheer joy of playing their instrument at its finest. With meticulous attention to detail, Miguel is committed to escalating your musical experience. Book a tuning today and let Huntsville Piano Tuning help inspire your musical journey.`} fontSize="1.5vw" weight="" color="" spacing="" lineHeight="" classes=""/>
                    </Grid>
                    
                    </Box>
                    
                    </Grid>
                        
                    </Box> 
                </DesktopScreen>
            </ResponsiveWrapper>

            <Box width="" height="3em" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
            
            </Box>
{/* Pricing section */}
            <Box width="" height="" radius="" backgroundColor="#822E0B" paddingV="" paddingH="" classes="dark">
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <div className='padding'>
                        <Grid orientation="row" template="1fr" gap="1em" classes="">
                        <Heading2 text={`Pricing`} />
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "STANDARD TUNING $165", Value: "Pianos that have been tuned within a year can typically use this option." }]} keyFontSize="6vw" valueFontSize="5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "PITCH CORRECTION & TUNING $250", Value: "Pianos that have not been tuned within a year will likely need a preliminary pitch correction, or leveling out of the pitch across the piano, before being fine-tuned." }]} keyFontSize="6vw" valueFontSize="5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "CLEANING $50-$225", Value: "Upright piano cleaning is $50. Grand piano cleaning is $150. This is a basic service that includes removing dust from inside the piano and cleaning all hard to reach places including under the keys. If there is a higher level of detail desired for heavy dust and/or grime, we will discuss a plan and prices will be adjusted accordingly. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level of 'Mouse Removal and Sanitation: $225' with no exceptions." }]} keyFontSize="6vw" valueFontSize="5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "REPAIRS & RESTORATION $30-$100", Value: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100." }]} keyFontSize="6vw" valueFontSize="5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Text text={`Limited time New Clients Only 20% off piano tuning services. Click BOOK A TUNING and select discounted option.`} fontSize="6vw" weight="" color="" spacing="" lineHeight="" classes=""/>
                                    </Box>
                                    
                                    
                                
                                    <Box width="fit-content" height="fit-content" radius="" paddingV="1em" paddingH="0" classes="right">
                                        <Border size="1px" color="black" radius="">
                                            <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                                <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                    <Text text={`BOOK A TUNING`} fontSize="6vw" weight="400" color="black" spacing="" lineHeight="" classes="" />
                                                </Box>
                                            </Button>
                                        </Border>
                                    </Box>

                                </Box>
                        </Grid>
                        </div>
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="" height="" radius="" paddingV="2em" paddingH="3vw" classes="center">
                        <Grid orientation="column" template="1fr 1fr" gap="" classes="">
                                <Heading2 text={`Pricing`} />
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "STANDARD TUNING $165", Value: "Pianos that have been tuned within a year can typically use this option." }]} keyFontSize="3vw" valueFontSize="2vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "PITCH CORRECTION & TUNING $250", Value: "Pianos that have not been tuned within a year will likely need a preliminary pitch correction, or leveling out of the pitch across the piano, before being fine-tuned." }]} keyFontSize="3vw" valueFontSize="2vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "CLEANING $50-$225", Value: "Upright piano cleaning is $50. Grand piano cleaning is $150. This is a basic service that includes removing dust from inside the piano and cleaning all hard to reach places including under the keys. If there is a higher level of detail desired for heavy dust and/or grime, we will discuss a plan and prices will be adjusted accordingly. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level of 'Mouse Removal and Sanitation: $225' with no exceptions." }]} keyFontSize="3vw" valueFontSize="2vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "REPAIRS & RESTORATION $30-$100", Value: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100." }]} keyFontSize="3vw" valueFontSize="2vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Text text={`Limited time New Clients Only 20% off piano tuning services. Click BOOK A TUNING and select discounted option.`} fontSize="3vw" weight="" color="" spacing="" lineHeight="" classes=""/>
                                    </Box>
                                    
                                
                                    <Box width="fit-content" height="fit-content" radius="" paddingV="1em" paddingH="0" classes="right">
                                        <Border size="1px" color="black" radius="">
                                            <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                                <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                    <Text text={`BOOK A TUNING`} fontSize="4vw" weight="400" color="black" spacing="" lineHeight="" classes="" />
                                                </Box>
                                            </Button>
                                        </Border>
                                    </Box>

                                </Box>
                            </Grid>
                        </Box>
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="" height="" radius="" paddingV="2em" paddingH="5vw" classes="center">
                        <Grid orientation="column" template="1fr 1fr" gap="" classes="">
                                <Heading4 text={`Pricing`} />
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "STANDARD TUNING $165", Value: "Pianos that have been tuned within a year can typically use this option." }]} keyFontSize="2.5vw" valueFontSize="1.5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "PITCH CORRECTION & TUNING $250", Value: "Pianos that have not been tuned within a year will likely need a preliminary pitch correction, or leveling out of the pitch across the piano, before being fine-tuned." }]} keyFontSize="2.5vw" valueFontSize="1.5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "CLEANING $50-$225", Value: "Upright piano cleaning is $50. Grand piano cleaning is $150. This is a basic service that includes removing dust from inside the piano and cleaning all hard to reach places including under the keys. If there is a higher level of detail desired for heavy dust and/or grime, we will discuss a plan and prices will be adjusted accordingly. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level of 'Mouse Removal and Sanitation: $225' with no exceptions." }]} keyFontSize="2.5vw" valueFontSize="1.5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "REPAIRS & RESTORATION $30-$100", Value: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100." }]} keyFontSize="2.5vw" valueFontSize="1.5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Text text={`Limited time New Clients Only 20% off piano tuning services. Click BOOK A TUNING and select discounted option.`} fontSize="2.5vw" weight="" color="" spacing="" lineHeight="" classes=""/>
                                    </Box>
                                    
                                
                                    <Box width="fit-content" height="fit-content" radius="" paddingV="1em" paddingH="0" classes="right">
                                        <Border size="1px" color="black" radius="">
                                            <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                                <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                    <Text text={`BOOK A TUNING`} fontSize="2.5vw" weight="400" color="black" spacing="" lineHeight="" classes="" />
                                                </Box>
                                            </Button>
                                        </Border>
                                    </Box>

                                </Box>
                            </Grid>
                        </Box>
                    </LaptopScreen>

                    {/* testing
                testing 
                testing
                testing */}

                    <DesktopScreen>
                        <Box width="" height="" radius="" paddingV="4em" paddingH="13vw" classes="center">
                            
                            <Grid orientation="column" template="1fr 1fr" gap="" classes="">
                                <Heading5 text={`Pricing`} />
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "STANDARD TUNING $165", Value: "Pianos that have been tuned within a year can typically use this option." }]} keyFontSize="1.5vw" valueFontSize="1vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "PITCH CORRECTION & TUNING $250", Value: "Pianos that have not been tuned within a year will likely need a preliminary pitch correction, or leveling out of the pitch across the piano, before being fine-tuned." }]} keyFontSize="1.5vw" valueFontSize="1vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "CLEANING $50-$225", Value: "Upright piano cleaning is $50. Grand piano cleaning is $150. This is a basic service that includes removing dust from inside the piano and cleaning all hard to reach places including under the keys. If there is a higher level of detail desired for heavy dust and/or grime, we will discuss a plan and prices will be adjusted accordingly. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level of 'Mouse Removal and Sanitation: $225' with no exceptions." }]} keyFontSize="1.5vw" valueFontSize="1vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "REPAIRS & RESTORATION $30-$100", Value: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100." }]} keyFontSize="1.5vw" valueFontSize="1vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Text text={`Limited time New Clients Only 20% off piano tuning services. Click BOOK A TUNING and select discounted option.`} fontSize="1.5vw" weight="" color="" spacing="" lineHeight="" classes=""/>
                                    </Box>
                                    
                                
                                    <Box width="fit-content" height="fit-content" radius="" paddingV="1em" paddingH="0" classes="right">
                                        <Border size="1px" color="black" radius="">
                                            <Button color="" backgroundColor="#fed461" radius="" func={() => { window.open('https://gazelleapp.io/scheduling/vXpvRSzSNZbSgD86wqz3KXHw') }} classes="">
                                                <Box width="" height="" radius="" backgroundColor="" paddingV="0.5vh" paddingH="0.7vw" classes="">
                                                    <Text text={`BOOK A TUNING`} fontSize="1.5vw" weight="400" color="black" spacing="" lineHeight="" classes="" />
                                                </Box>
                                            </Button>
                                        </Border>
                                    </Box>

                                </Box>
                            </Grid>
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
            </Box>
            <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">

            </Box>

{/* About Section */}
            <Box width="" height="" radius="" id="about" backgroundColor="" paddingV="" paddingH="" classes="light">
                <ResponsiveWrapper>
                    <PhoneScreen>
                        <div className='padding'>
                        <Grid orientation="row" template="1fr" gap="1em" classes="">
                            <Heading2 text={`About`} />
                            <Box width="" height="40vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Image src={img5} alt="" radius="" classes=" fill image-top"/>
                            </Box>
                            
                            <Text text={`Miguel Ramirez embarked on his piano tuning journey at the age of 17, back in 1998, in his hometown of San Diego, CA. Under the guidance of Jonnel Domilos, the esteemed piano technician of the San Diego Symphony, Miguel honed his skills. His early experiences involved collaborating with Jonnel on numerous pianos at the Piano Warehouse in San Marcos, CA, in addition to servicing pianos in private residences and studios.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`Currently, Miguel serves as the dedicated piano tuner at Huntsville Strings Shop while actively cultivating professional relationships with piano technicians Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`Miguel's deep-rooted connection to music traces back to his childhood within a musically inclined family. He began his musical journey at the tender age of 3, taught by his father Margarito Ramirez on the piano and violin. As he progressed in his musical career, Miguel achieved the status of a concert violinist and teacher. Along this path, he had the privilege of receiving instruction from many renowned violinists including David Chan, concertmaster of The Metropolitan Opera Orchestra in New York, and Juan Ramirez, an Atlanta Symphony Orchestra violinist who also happens to be Miguel's uncle.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`Miguel's violin talents have graced local stages, including performances with the Shoals Symphony Orchestra in Florence, AL, special guest appearance in the Snead State College faculty recital series in Boaz, AL, and participation in the annual Living Christmas Tree Orchestra at First Baptist Church in Huntsville, AL.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`Beyond his piano tuning and violin performances, Miguel operates a thriving teaching studio at Huntsville Strings Shop, where he imparts knowledge in violin, viola, and cello. Notably, alumni of his studio have achieved remarkable milestones, including performing a violin solo alongside the Principal Ballerina of the Moscow Ballet, Anna Radik, at Copley Symphony Hall in San Diego, CA., and gaining acceptance into prestigious institutions such as the Eastman School of Music, Mannes School of Music, Peabody Institute, and Meadowmount School of Music.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`Singing holds a special place in Miguel's heart, and he regularly sings in his church choir with his beloved church family at St. Michael Orthodox Christian Church. Miguel's finely tuned ear also extends into the audio recording field; he has taken on audio engineering projects in the classical and rock genres.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`In 2021, Miguel embarked on a new chapter in Huntsville, AL, relocating with his wife and two daughters. He finds so much joy in assisting the local community and those in surrounding areas with their pianos. Miguel's commitment to you and your piano is that through careful work and attention to detail, your playing resonates to its fullest potential. Book a tuning with Miguel today!`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes=""/>

                        </Grid>
                        </div>
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="3vw" classes="">
                            <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                             <Heading2 text={`About`} />
                            </Box>
                        
                            <Grid orientation="row" template="1fr" gap="1em" classes="">
                                <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Image src={img5} alt="" radius="" classes=" fill image-top"/>
                                </Box>
                                <Text text={`Miguel Ramirez embarked on his piano tuning journey at the age of 17, back in 1998, in his hometown of San Diego, CA. Under the guidance of Jonnel Domilos, the esteemed piano technician of the San Diego Symphony, Miguel honed his skills. His early experiences involved collaborating with Jonnel on numerous pianos at the Piano Warehouse in San Marcos, CA, in addition to servicing pianos in private residences and studios.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                
                            <Text text={`Currently, Miguel serves as the dedicated piano tuner at Huntsville Strings Shop while actively cultivating professional relationships with piano technicians Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`Miguel's deep-rooted connection to music traces back to his childhood within a musically inclined family. He began his musical journey at the tender age of 3, taught by his father Margarito Ramirez on the piano and violin. As he progressed in his musical career, Miguel achieved the status of a concert violinist and teacher. Along this path, he had the privilege of receiving instruction from many renowned violinists including David Chan, concertmaster of The Metropolitan Opera Orchestra in New York, and Juan Ramirez, an Atlanta Symphony Orchestra violinist who also happens to be Miguel's uncle.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`Miguel's violin talents have graced local stages, including performances with the Shoals Symphony Orchestra in Florence, AL, special guest appearance in the Snead State College faculty recital series in Boaz, AL, and participation in the annual Living Christmas Tree Orchestra at First Baptist Church in Huntsville, AL.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`Beyond his piano tuning and violin performances, Miguel operates a thriving teaching studio at Huntsville Strings Shop, where he imparts knowledge in violin, viola, and cello. Notably, alumni of his studio have achieved remarkable milestones, including performing a violin solo alongside the Principal Ballerina of the Moscow Ballet, Anna Radik, at Copley Symphony Hall in San Diego, CA., and gaining acceptance into prestigious institutions such as the Eastman School of Music, Mannes School of Music, Peabody Institute, and Meadowmount School of Music.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`Singing holds a special place in Miguel's heart, and he regularly sings in his church choir with his beloved church family at St. Michael Orthodox Christian Church. Miguel's finely tuned ear also extends into the audio recording field; he has taken on audio engineering projects in the classical and rock genres.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            <Text text={`In 2021, Miguel embarked on a new chapter in Huntsville, AL, relocating with his wife and two daughters. He finds so much joy in assisting the local community and those in surrounding areas with their pianos. Miguel's commitment to you and your piano is that through careful work and attention to detail, your playing resonates to its fullest potential. Book a tuning with Miguel today!`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes=""/>
                            </Grid>
                        </Box>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="" classes="">
                        
                        </Box>
                        
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="" height="" radius="" paddingV="2em" paddingH="5vw" classes="center">
                            <Heading4 text={`About`} />
                                <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                                    <Grid orientation="column" template="2fr 1fr" gap="1em" classes="center">
                                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="0" classes="">
                                            <Grid orientation="row" template="" gap="1em" classes="">
                                            <Text text={`Miguel Ramirez embarked on his piano tuning journey at the age of 17, back in 1998, in his hometown of San Diego, CA. Under the guidance of Jonnel Domilos, the esteemed piano technician of the San Diego Symphony, Miguel honed his skills. His early experiences involved collaborating with Jonnel on numerous pianos at the Piano Warehouse in San Marcos, CA, in addition to servicing pianos in private residences and studios.`} fontSize="2vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                            <Text text={`Currently, Miguel serves as the dedicated piano tuner at Huntsville Strings Shop while actively cultivating professional relationships with piano technicians Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR.`} fontSize="2vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                            <Text text={`Miguel's deep-rooted connection to music traces back to his childhood within a musically inclined family. He began his musical journey at the tender age of 3, taught by his father Margarito Ramirez on the piano and violin. As he progressed in his musical career, Miguel achieved the status of a concert violinist and teacher. Along this path, he had the privilege of receiving instruction from many renowned violinists including David Chan, concertmaster of The Metropolitan Opera Orchestra in New York, and Juan Ramirez, an Atlanta Symphony Orchestra violinist who also happens to be Miguel's uncle.`} fontSize="2vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                            <Text text={`Miguel's violin talents have graced local stages, including performances with the Shoals Symphony Orchestra in Florence, AL, special guest appearance in the Snead State College faculty recital series in Boaz, AL, and participation in the annual Living Christmas Tree Orchestra at First Baptist Church in Huntsville, AL.`} fontSize="2vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                            <Text text={`Beyond his piano tuning and violin performances, Miguel operates a thriving teaching studio at Huntsville Strings Shop, where he imparts knowledge in violin, viola, and cello. Notably, alumni of his studio have achieved remarkable milestones, including performing a violin solo alongside the Principal Ballerina of the Moscow Ballet, Anna Radik, at Copley Symphony Hall in San Diego, CA., and gaining acceptance into prestigious institutions such as the Eastman School of Music, Mannes School of Music, Peabody Institute, and Meadowmount School of Music.`} fontSize="2vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                            <Text text={`Singing holds a special place in Miguel's heart, and he regularly sings in his church choir with his beloved church family at St. Michael Orthodox Christian Church. Miguel's finely tuned ear also extends into the audio recording field; he has taken on audio engineering projects in the classical and rock genres.`} fontSize="2vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                            <Text text={`In 2021, Miguel embarked on a new chapter in Huntsville, AL, relocating with his wife and two daughters. He finds so much joy in assisting the local community and those in surrounding areas with their pianos. Miguel's commitment to you and your piano is that through careful work and attention to detail, your playing resonates to its fullest potential. Book a tuning with Miguel today!`} fontSize="2vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                            </Grid>
                                            
                                            </Box>   
                                            <Layer position="relative" top="0" left="" bottom="" right="" classes="">
                                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="0" classes="">
                                                    <Image src={img5} alt="" radius="" classes="fill"/>
                                                </Box>
                                            </Layer>  
                                    </Grid>
                                </Box>        
                        </Box>
                    </LaptopScreen>

                    {/* testing
                testing 
                testing
                testing */}

                    <DesktopScreen>
                        <Box width="" height="" radius="" paddingV="2em" paddingH="13vw" classes="">
                            <Heading5 text={`About`} />

                            <Grid orientation="column" template="2fr 1fr" gap="1em" classes="padding-v">
                            
                            <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="" classes="">
                                <Grid orientation="row" template="" gap="1em" classes="">
                                <Text text={`Miguel Ramirez embarked on his piano tuning journey at the age of 17, back in 1998, in his hometown of San Diego, CA. Under the guidance of Jonnel Domilos, the esteemed piano technician of the San Diego Symphony, Miguel honed his skills. His early experiences involved collaborating with Jonnel on numerous pianos at the Piano Warehouse in San Marcos, CA, in addition to servicing pianos in private residences and studios.`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`Currently, Miguel serves as the dedicated piano tuner at Huntsville Strings Shop while actively cultivating professional relationships with piano technicians Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR.`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                 <Text text={`Miguel's deep-rooted connection to music traces back to his childhood within a musically inclined family. He began his musical journey at the tender age of 3, taught by his father Margarito Ramirez on the piano and violin. As he progressed in his musical career, Miguel achieved the status of a concert violinist and teacher. Along this path, he had the privilege of receiving instruction from many renowned violinists including David Chan, concertmaster of The Metropolitan Opera Orchestra in New York, and Juan Ramirez, an Atlanta Symphony Orchestra violinist who also happens to be Miguel's uncle.`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                <Text text={`Miguel's violin talents have graced local stages, including performances with the Shoals Symphony Orchestra in Florence, AL, special guest appearance in the Snead State College faculty recital series in Boaz, AL, and participation in the annual Living Christmas Tree Orchestra at First Baptist Church in Huntsville, AL.`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                <Text text={`Beyond his piano tuning and violin performances, Miguel operates a thriving teaching studio at Huntsville Strings Shop, where he imparts knowledge in violin, viola, and cello. Notably, alumni of his studio have achieved remarkable milestones, including performing a violin solo alongside the Principal Ballerina of the Moscow Ballet, Anna Radik, at Copley Symphony Hall in San Diego, CA., and gaining acceptance into prestigious institutions such as the Eastman School of Music, Mannes School of Music, Peabody Institute, and Meadowmount School of Music.`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                <Text text={`Singing holds a special place in Miguel's heart, and he regularly sings in his church choir with his beloved church family at St. Michael Orthodox Christian Church. Miguel's finely tuned ear also extends into the audio recording field; he has taken on audio engineering projects in the classical and rock genres.`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                <Text text={`In 2021, Miguel embarked on a new chapter in Huntsville, AL, relocating with his wife and two daughters. He finds so much joy in assisting the local community and those in surrounding areas with their pianos. Miguel's commitment to you and your piano is that through careful work and attention to detail, your playing resonates to its fullest potential. Book a tuning with Miguel today!`} fontSize="1.5vw" weight="400" color="" spacing="" lineHeight="" classes=""/>
                                </Grid>
                           
                                </Box>  
                                <Layer position="relative" top="0" left="" bottom="" right="" classes="">
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="right">
                                         <Image src={img5} alt="" radius="" classes="fill"/>
                                    </Box>
                                </Layer>
                                    
                                    
                               
                            
                                  
                               
                            </Grid>  
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
            </Box>
            
            <Footer1 />
        </div>
    )
}