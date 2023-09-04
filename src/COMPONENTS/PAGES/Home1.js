import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
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
            <Box width="" height="" radius="" backgroundColor="#973228" paddingV="1.4em" paddingH="" classes="">
                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="horizontal center gap">
                {/* <Icon size="26px" color="white">
                <MdOutlinePiano />
                </Icon> */}
            <Text text={`Limited time New Clients Only 20% off first piano tuning. Click BOOK A TUNING and select discounted option.`} fontSize="22px" weight="500" color="white" spacing="" lineHeight="" classes="text-center"/>
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
                        <Text text={`At Huntsville Piano Tuning, your musical journey takes center stage. We know that playing an in-tune piano makes you want to play more! As dedicated owner and skilled technician, Miguel Ramirez believes that every musician should experience the sheer joy of playing their instrument at its finest. With meticulous attention to detail, Miguel is committed to escalating your musical experience. Book a tuning today and let Huntsville Piano Tuning help inspire your musical journey.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes=""/>
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
                        <Text text={`At Huntsville Piano Tuning, your musical journey takes center stage. We know that playing an in-tune piano makes you want to play more! As dedicated owner and skilled technician, Miguel Ramirez believes that every musician should experience the sheer joy of playing their instrument at its finest. With meticulous attention to detail, Miguel is committed to escalating your musical experience. Book a tuning today and let Huntsville Piano Tuning help inspire your musical journey.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes=""/>
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

               <Text text={`At Huntsville Piano Tuning, your musical journey takes center stage. We know that playing an in-tune piano makes you want to play more! As dedicated owner and skilled technician, Miguel Ramirez believes that every musician should experience the sheer joy of playing their instrument at its finest. With meticulous attention to detail, Miguel is committed to escalating your musical experience. Book a tuning today and let Huntsville Piano Tuning help inspire your musical journey.`} fontSize="2vw" weight="" color="" spacing="" lineHeight="" classes=""/>
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

                    <Text text={`At Huntsville Piano Tuning, your musical journey takes center stage. We know that playing an in-tune piano makes you want to play more! As dedicated owner and skilled technician, Miguel Ramirez believes that every musician should experience the sheer joy of playing their instrument at its finest. With meticulous attention to detail, Miguel is committed to escalating your musical experience. Book a tuning today and let Huntsville Piano Tuning help inspire your musical journey.`} fontSize="1.5vw" weight="" color="" spacing="" lineHeight="" classes=""/>
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
                                        <Accordion dictionary={[{ Key: "CLEANING $50-$200", Value: "Cleaning for uprights range in price from $50-$100 and grands range from $150-$200 depending on level of detailing desired. Descriptions of each cleaning level are on the BOOK A TUNING page and you can choose which one you would like there. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level with no exceptions." }]} keyFontSize="6vw" valueFontSize="5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "REPAIRS & RESTORATION $30-$100", Value: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100." }]} keyFontSize="6vw" valueFontSize="5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                                        <Text text={`Mileage: $1 per additional minute if you live 30+ minutes from Madison, AL.`} fontSize="4vw" weight="" color="" spacing="" lineHeight="" classes=""/>
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
                                        <Accordion dictionary={[{ Key: "CLEANING $50-$200", Value: "Cleaning for uprights range in price from $50-$100 and grands range from $150-$200 depending on level of detailing desired. Descriptions of each cleaning level are on the BOOK A TUNING page and you can choose which one you would like there. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level with no exceptions." }]} keyFontSize="3vw" valueFontSize="2vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "REPAIRS & RESTORATION $30-$100", Value: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100." }]} keyFontSize="3vw" valueFontSize="2vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                                        <Text text={`Mileage: $1 per additional minute if you live 30+ minutes from Madison, AL.`} fontSize="2vw" weight="" color="" spacing="" lineHeight="" classes=""/>
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
                                        <Accordion dictionary={[{ Key: "CLEANING $50-$200", Value: "Cleaning for uprights range in price from $50-$100 and grands range from $150-$200 depending on level of detailing desired. Descriptions of each cleaning level are on the BOOK A TUNING page and you can choose which one you would like there. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level with no exceptions." }]} keyFontSize="2.5vw" valueFontSize="1.5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "REPAIRS & RESTORATION $30-$100", Value: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100." }]} keyFontSize="2.5vw" valueFontSize="1.5vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                                        <Text text={`Mileage: $1 per additional minute if you live 30+ minutes from Madison, AL.`} fontSize="1.5vw" weight="" color="" spacing="" lineHeight="" classes=""/>
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
                                        <Accordion dictionary={[{ Key: "CLEANING $50-$200", Value: "Cleaning for uprights range in price from $50-$100 and grands range from $150-$200 depending on level of detailing desired. Descriptions of each cleaning level are on the BOOK A TUNING page and you can choose which one you would like there. If there is any evidence of rodent infestation or other unsanitary conditions, it will automatically require the highest service level with no exceptions." }]} keyFontSize="1.5vw" valueFontSize="1vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1vw" paddingH="0" classes="">
                                        <Accordion dictionary={[{ Key: "REPAIRS & RESTORATION $30-$100", Value: "Sticking keys and other basic repairs generally cost $30-$50. Replacing ivories and other basic restorations generally cost $50-100." }]} keyFontSize="1.5vw" valueFontSize="1vw" padding="" keyClasses="" valueClasses="" classes=""/>
                                    </Box>
                                    
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                                        <Text text={`Mileage: $1 per additional minute if you live 30+ minutes from Madison, AL.`} fontSize="1vw" weight="" color="" spacing="" lineHeight="" classes=""/>
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
                            
                            <Text text={`Miguel Ramirez began tuning pianos in 1998 at age 17 in his native town of San Diego, CA. He apprenticed with the current piano technician of the San Diego Symphony, Jonnel Domilos, and alongside him worked on several pianos at the former Piano Warehouse in San Marcos, CA as well as in private homes and studios. Miguel currently maintains the pianos at Huntsville Strings Shop and is building a network here in the South that includes Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR. Miguel is also a concert violinist and multi-instrumentalist who has played in several orchestras and rock bands, and sings in his church choir. He also runs a successful teaching studio offering lessons in violin and other instruments, with students who have gone on to national achievements. With his detailed ear, he has also engineered and co-engineered audio recordings in the classical and rock genres. In 2021 Miguel moved with his wife and two daughters to the beautiful Huntsville, AL area and has enjoyed helping the wonderful people here with their pianos and all aspects of their musical journey.`} fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                        </Grid>
                        </div>
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="5vw" classes="">
                            <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                             <Heading2 text={`About`} />
                            </Box>
                        
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                <Box width="" height="50vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Image src={img5} alt="" radius="" classes=" fill image-top"/>
                                </Box>
                                <Text text={`Miguel Ramirez began tuning pianos in 1998 at age 17 in his native town of San Diego, CA. He apprenticed with the current piano technician of the San Diego Symphony, Jonnel Domilos, and alongside him worked on several pianos at the former Piano Warehouse in San Marcos, CA as well as in private homes and studios. Miguel currently maintains the pianos at Huntsville Strings Shop and is building a network here in the South that includes Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR. Miguel is also a concert violinist and multi-instrumentalist who has played in several orchestras and rock bands, and sings in his church choir. He also runs a successful teaching studio offering lessons in violin and other instruments, with students who have gone on to national achievements. With his detailed ear, he has also engineered and co-engineered audio recordings in the classical and rock genres. In 2021 Miguel moved with his wife and two daughters to the beautiful Huntsville, AL area and has enjoyed helping the wonderful people here with their pianos and all aspects of their musical journey.`} fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
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
                                                <Text text={`Miguel Ramirez began tuning pianos in 1998 at age 17 in his native town of San Diego, CA. He apprenticed with the current piano technician of the San Diego Symphony, Jonnel Domilos, and alongside him worked on several pianos at the former Piano Warehouse in San Marcos, CA as well as in private homes and studios. Miguel currently maintains the pianos at Huntsville Strings Shop and is building a network here in the South that includes Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR. Miguel is also a concert violinist and multi-instrumentalist who has played in several orchestras and rock bands, and sings in his church choir. He also runs a successful teaching studio offering lessons in violin and other instruments, with students who have gone on to national achievements. With his detailed ear, he has also engineered and co-engineered audio recordings in the classical and rock genres. In 2021 Miguel moved with his wife and two daughters to the beautiful Huntsville, AL area and has enjoyed helping the wonderful people here with their pianos and all aspects of their musical journey.`} fontSize="2vw" weight="" color="" spacing="" lineHeight="" classes=""/>
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
                                    <Text text={`Miguel Ramirez began tuning pianos in 1998 at age 17 in his native town of San Diego, CA. He apprenticed with the current piano technician of the San Diego Symphony, Jonnel Domilos, and alongside him worked on several pianos at the former Piano Warehouse in San Marcos, CA as well as in private homes and studios. Miguel currently maintains the pianos at Huntsville Strings Shop and is building a network here in the South that includes Eric Roberts of Apex Piano Tuning in Nashville, TN, and Jonny Braun of JB Piano Tuning in Bentonville, AR. Miguel is also a concert violinist and multi-instrumentalist who has played in several orchestras and rock bands, and sings in his church choir. He also runs a successful teaching studio offering lessons in violin and other instruments, with students who have gone on to national achievements. With his detailed ear, he has also engineered and co-engineered audio recordings in the classical and rock genres. In 2021 Miguel moved with his wife and two daughters to the beautiful Huntsville, AL area and has enjoyed helping the wonderful people here with their pianos and all aspects of their musical journey.`} fontSize="1.5vw" weight="" color="" spacing="" lineHeight="" classes=""/>
                                </Box>  
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="right">
                                         <Image src={img5} alt="" radius="" classes="fill"/>
                                    </Box>
                                    
                               
                            
                                  
                               
                            </Grid>  
                        </Box>
                    </DesktopScreen>
                </ResponsiveWrapper>
            </Box>
            
            <Footer1 />
        </div>
    )
}