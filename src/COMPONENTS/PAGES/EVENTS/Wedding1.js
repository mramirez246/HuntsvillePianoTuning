import React, { useEffect, useState } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Spacer, Text, TextArea, TextField, Underline, Divider } from '../../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../Components'
import { FiMenu } from 'react-icons/fi'
import { CiMenuFries } from 'react-icons/ci'
import { AiOutlineHeart } from 'react-icons/ai'
import { c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'
import { BsHeart, BsInstagram } from 'react-icons/bs'
import img1 from '../../../PHOTOS/stock6.jpg'
import img2 from '../../../PHOTOS/stock7.jpg'
import img3 from '../../../PHOTOS/stock8.jpg'
import img4 from '../../../PHOTOS/stock9.jpg'
import img5 from '../../../PHOTOS/stock10.jpg'
import img6 from '../../../PHOTOS/stock11.jpg'
import img7 from '../../../PHOTOS/stock12.jpg'
import { HiHeart, HiXMark } from 'react-icons/hi2'

export default function Wedding1() {
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

    const [pageState, setPageState] = useState("home")

    const navCouple = "Jason & Emily"
    const couple = "Jason Everything \n & \n Emily Bagel"
    const date = "Saturday, October 25, 2023"
    const thing1 = "Emily and Jason joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends."
    const thing2 = "jasonemily2023"
    const thing3 = `The wedding will be held on ${date}. We'll start with a nonsectarian ceremony, then move to the hotel for the reception.`
    const thing4 = "10 AM - 12 PM"
    const thing5 = "4 PM - 10 PM"
    const ceremonyAddress = "1234 Bagel Ave,\nBagel City,\n91919"
    const receptionAddress = "5678 Everything Ln,\nEverything City,\n19191"
    const registryMessage = "Many of you are traveling across the globe to celebrate with us in NYC, so your presence means the world to us and is all we ask for. If you'd still like to contribute to our registry or honeymoon funds, please use the link below."
    const registryLink = "https://wearehappycode.com"
    const thing6 = "Memories"
    const thing7 = "Save your spot!"
    const thing8 = "Please save your spot before August, 25, 2023."

    const memoryImages = [
        img1, img2, img3, img4, img5, img6, img7
    ]
    useEffect(() => {
        closeNav()
    }, [])

    return (
        <div className='nanum'>

            {/* NAV */}
            <ResponsiveWrapper>
                <PhoneScreen>
                    <div className='horizontal separate padding'>
                        <Button color="" backgroundColor="" radius="" func={() => { pageState("home") }} classes="">
                            <Text text={`${navCouple}`} fontSize="1.6em" weight="800" color="" spacing="" lineHeight="" classes="" />
                        </Button>

                        <Button color="" backgroundColor="" radius="" func={() => { openNav() }} classes="">
                            <Icon size="2em" color="">
                                <CiMenuFries />
                            </Icon>
                        </Button>
                    </div>
                </PhoneScreen>
                <TabletScreen>
                    <div className='horizontal separate padding'>
                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                            <Text text={`${navCouple}`} fontSize="1.6em" weight="800" color="" spacing="" lineHeight="" classes="" />
                        </Button>

                        <Button color="" backgroundColor="" radius="" func={() => { openNav() }} classes="">
                            <Icon size="2em" color="">
                                <CiMenuFries />
                            </Icon>
                        </Button>
                    </div>
                </TabletScreen>
                <LaptopScreen>
                    <div className='horizontal separate padding'>
                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                            <Icon size="1.4em" color="">
                                <BsInstagram />
                            </Icon>
                        </Button>

                        <Layer position="absolute" top="1em" left="0" bottom="" right="0" classes="center">
                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Button color="" backgroundColor="" radius="" func={() => { setPageState("home") }} classes="">
                                    <Text text={`${navCouple}`} fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />
                                </Button>
                            </Box>
                        </Layer>

                        <Border size="1px" color="" radius="">
                            <Box width="" height="" radius="" backgroundColor="" paddingV="0.8em" paddingH="1em" classes="">
                                <Button color="" backgroundColor="" radius="" func={() => { setPageState("rsvp"); closeNav(); }} classes="">
                                    <Text text={`RSVP`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                </Button>
                            </Box>
                        </Border>
                    </div>
                    <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                        <div className='horizontal gap'>
                            <Button color="" backgroundColor="" radius="" func={() => { setPageState("wedding"); closeNav(); }} classes="">
                                <Text text={`Wedding`} fontSize="1.1em" weight="" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            <Button color="" backgroundColor="" radius="" func={() => { setPageState("registry"); closeNav(); }} classes="">
                                <Text text={`Registry`} fontSize="1.1em" weight="" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            <Button color="" backgroundColor="" radius="" func={() => { setPageState("memories"); closeNav(); }} classes="">
                                <Text text={`Memories`} fontSize="1.1em" weight="" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                        </div>
                    </Box>
                </LaptopScreen>
                <DesktopScreen>
                    <div className='horizontal separate padding'>
                        <Button color="" backgroundColor="" radius="" func={() => { setPageState("home") }} classes="">
                            <Icon size="1.4em" color="">
                                <BsInstagram />
                            </Icon>
                        </Button>

                        <Layer position="absolute" top="1em" left="0" bottom="" right="0" classes="center">
                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Button color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="">
                                    <Text text={`${navCouple}`} fontSize="1.6em" weight="" color="" spacing="" lineHeight="" classes="" />
                                </Button>
                            </Box>
                        </Layer>

                        <Border size="1px" color="" radius="">
                            <Box width="" height="" radius="" backgroundColor="" paddingV="0.8em" paddingH="1em" classes="">
                                <Button color="" backgroundColor="" radius="" func={() => { setPageState("rsvp"); closeNav(); }} classes="">
                                    <Text text={`RSVP`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                </Button>
                            </Box>
                        </Border>
                    </div>
                    <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                        <div className='horizontal gap'>
                            <Button color="" backgroundColor="" radius="" func={() => { setPageState("wedding"); closeNav(); }} classes="">
                                <Text text={`Wedding`} fontSize="1.2em" weight="" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            <Button color="" backgroundColor="" radius="" func={() => { setPageState("registry"); closeNav(); }} classes="">
                                <Text text={`Registry`} fontSize="1.2em" weight="" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                            <Button color="" backgroundColor="" radius="" func={() => { setPageState("memories"); closeNav(); }} classes="">
                                <Text text={`Memories`} fontSize="1.2em" weight="" color="" spacing="" lineHeight="" classes="" />
                            </Button>
                        </div>
                    </Box>
                </DesktopScreen>
            </ResponsiveWrapper>

            {
                pageState == "home" ?
                    <div>
                        {/* BODY */}
                        <ResponsiveWrapper>
                            <PhoneScreen>
                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="horizontal center">
                                    <Icon size="1.4em" color="">
                                        <AiOutlineHeart />
                                    </Icon>
                                    <Icon size="1.4em" color="">
                                        <AiOutlineHeart />
                                    </Icon>
                                </Box>
                                <Text text={`Celebrate with us`} fontSize="1.2em" weight="200" color="" spacing="-1px" lineHeight="" classes="roboto all-caps text-center" />

                                <Box width="80vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Divider size={`1px`} color={`black`} />
                                </Box>

                                <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                                    <Text text={`${couple}`} fontSize="12vw" weight="300" color="" spacing="-1px" lineHeight="" classes="text-center" />
                                </Box>
                                <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                                    <Image src={img1} alt="" radius="" classes="" />
                                </Box>

                            </PhoneScreen>
                            <TabletScreen>
                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="horizontal center">
                                    <Icon size="1.4em" color="">
                                        <AiOutlineHeart />
                                    </Icon>
                                    <Icon size="1.4em" color="">
                                        <AiOutlineHeart />
                                    </Icon>
                                </Box>
                                <Text text={`Celebrate with us`} fontSize="1.2em" weight="200" color="" spacing="-1px" lineHeight="" classes="roboto all-caps text-center" />

                                <Box width="80vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Divider size={`1px`} color={`black`} />
                                </Box>

                                <Box width="" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="">
                                    <Text text={`${couple}`} fontSize="12vw" weight="300" color="" spacing="-1px" lineHeight="" classes="text-center" />
                                </Box>
                                <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                                    <Image src={img1} alt="" radius="" classes="" />
                                </Box>
                            </TabletScreen>
                            <LaptopScreen>
                                <Spacer height={`2vh`} />
                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="horizontal center">
                                    <Icon size="1.4em" color="">
                                        <AiOutlineHeart />
                                    </Icon>
                                    <Icon size="1.4em" color="">
                                        <AiOutlineHeart />
                                    </Icon>
                                </Box>
                                <Text text={`Celebrate with us`} fontSize="1.2em" weight="200" color="" spacing="-1px" lineHeight="" classes="roboto all-caps text-center" />

                                <Box width="80vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Divider size={`1px`} color={`black`} />
                                </Box>

                                <Box width="" height="" radius="" backgroundColor="" paddingV="3em" paddingH="0" classes="">
                                    <Text text={`${couple}`} fontSize="10vw" weight="300" color="" spacing="-1px" lineHeight="" classes="text-center" />
                                </Box>
                                <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                                    <Image src={img1} alt="" radius="" classes="" />
                                </Box>
                            </LaptopScreen>
                            <DesktopScreen>
                                <Spacer height={`2vh`} />
                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="horizontal center">
                                    <Icon size="1.4em" color="">
                                        <AiOutlineHeart />
                                    </Icon>
                                    <Icon size="1.4em" color="">
                                        <AiOutlineHeart />
                                    </Icon>
                                </Box>
                                <Text text={`Celebrate with us`} fontSize="1.2em" weight="200" color="" spacing="-1px" lineHeight="" classes="roboto all-caps text-center" />

                                <Box width="80vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Divider size={`1px`} color={`black`} />
                                </Box>

                                <Box width="" height="" radius="" backgroundColor="" paddingV="3em" paddingH="0" classes="">
                                    <Text text={`${couple}`} fontSize="10vw" weight="300" color="" spacing="-1px" lineHeight="" classes="text-center" />
                                </Box>
                                <Box width="80vw" height="80vh" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="center">
                                    <Image src={img1} alt="" radius="" classes="fill image-bottom" />
                                </Box>
                            </DesktopScreen>
                        </ResponsiveWrapper>
                        {/* INFO */}
                        <Box width="80vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                            <Divider size={`1px`} color={`black`} />
                        </Box>

                        <ResponsiveWrapper>
                            <PhoneScreen>
                                <Text text={`${date}`} fontSize="1.2em" weight="200" color="" spacing="" lineHeight="" classes="text-center roboto all-caps" />
                                <Box width="85vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Text text={`${thing1}`} fontSize="1.7em" weight="200" color="" spacing="" lineHeight="" classes="nanum text-center" />
                                </Box>

                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                        <Underline size="1px" color="" >
                                            <Text text={`RSVP`} fontSize="2em" weight="200" color="" spacing="" lineHeight="" classes="roboto" />
                                        </Underline>
                                    </Button>
                                </Box>
                            </PhoneScreen>
                            <TabletScreen>
                                <Text text={`${date}`} fontSize="1.2em" weight="200" color="" spacing="" lineHeight="" classes="text-center roboto all-caps" />
                                <Box width="85vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Text text={`${thing1}`} fontSize="1.7em" weight="200" color="" spacing="" lineHeight="" classes="nanum text-center" />
                                </Box>

                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                        <Underline size="1px" color="" >
                                            <Text text={`RSVP`} fontSize="2em" weight="200" color="" spacing="" lineHeight="" classes="roboto" />
                                        </Underline>
                                    </Button>
                                </Box>
                            </TabletScreen>
                            <LaptopScreen>
                                <Text text={`${date}`} fontSize="1.2em" weight="200" color="" spacing="" lineHeight="" classes="text-center roboto all-caps" />
                                <Box width="70vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Text text={`${thing1}`} fontSize="1.8em" weight="200" color="" spacing="" lineHeight="" classes="nanum text-center" />
                                </Box>

                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                        <Underline size="1px" color="" >
                                            <Text text={`RSVP`} fontSize="2em" weight="200" color="" spacing="" lineHeight="" classes="roboto" />
                                        </Underline>
                                    </Button>
                                </Box>
                            </LaptopScreen>
                            <DesktopScreen>
                                <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="">
                                    <Text text={`${date}`} fontSize="1.4em" weight="200" color="" spacing="" lineHeight="" classes="text-center roboto all-caps" />
                                </Box>
                                <Box width="50vw" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Text text={`${thing1}`} fontSize="2em" weight="200" color="" spacing="" lineHeight="" classes="nanum text-center" />
                                </Box>

                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="1em" paddingH="0" classes="center">
                                    <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                        <Underline size="1px" color="" >
                                            <Text text={`RSVP`} fontSize="2.2em" weight="200" color="" spacing="" lineHeight="" classes="roboto" />
                                        </Underline>
                                    </Button>
                                </Box>
                            </DesktopScreen>
                        </ResponsiveWrapper>

                        <Spacer height={`2vh`} />

                        <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="horizontal center">
                            <Icon size="2em" color="red">
                                <BsHeart />

                            </Icon>
                            <Icon size="2em" color="red">
                                <BsHeart />

                            </Icon>
                        </Box>
                    </div> :
                    pageState == "wedding" ?
                        <div>
                            <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                                <ResponsiveWrapper>
                                    <PhoneScreen>
                                        <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                            <Image src={img2} alt="" radius="" classes="fill" />
                                        </Box>
                                        <Text text={`${thing3}`} fontSize="1.8em" weight="600" color="" spacing="" lineHeight="" classes="padding" />
                                        <Spacer height={`2vh`} />
                                        <Text text={`Ceremony`} fontSize="1.4em" weight="200" color="" spacing="" lineHeight="" classes="roboto all-caps" />
                                        <Text text={`${thing4}`} fontSize="1.2em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                        <Spacer height={`2vh`} />
                                        <Text text={`${ceremonyAddress}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />

                                        <Spacer height={`4vh`} />
                                        <Text text={`Reception`} fontSize="1.4em" weight="200" color="" spacing="" lineHeight="" classes="roboto all-caps" />
                                        <Text text={`${thing5}`} fontSize="1.2em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                        <Spacer height={`2vh`} />
                                        <Text text={`${receptionAddress}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    </PhoneScreen>
                                    <TabletScreen>
                                        <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                            <Image src={img2} alt="" radius="" classes="fill" />
                                        </Box>
                                        <Text text={`${thing3}`} fontSize="1.8em" weight="600" color="" spacing="" lineHeight="" classes="padding" />
                                        <Spacer height={`2vh`} />
                                        <Text text={`Ceremony`} fontSize="1.4em" weight="200" color="" spacing="" lineHeight="" classes="roboto all-caps" />
                                        <Text text={`${thing4}`} fontSize="1.2em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                        <Spacer height={`2vh`} />
                                        <Text text={`${ceremonyAddress}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />

                                        <Spacer height={`4vh`} />
                                        <Text text={`Reception`} fontSize="1.4em" weight="200" color="" spacing="" lineHeight="" classes="roboto all-caps" />
                                        <Text text={`${thing5}`} fontSize="1.2em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                        <Spacer height={`2vh`} />
                                        <Text text={`${receptionAddress}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    </TabletScreen>
                                    <LaptopScreen>
                                        <Box width="" height="70vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                            <Image src={img2} alt="" radius="" classes="fill" />
                                        </Box>
                                        <Box width="80vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                            <Text text={`${thing3}`} fontSize="1.8em" weight="600" color="" spacing="" lineHeight="" classes="padding" />
                                        </Box>
                                        <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                            <Spacer height={`2vh`} />
                                            <Text text={`Ceremony`} fontSize="1.6em" weight="200" color="" spacing="" lineHeight="" classes="roboto all-caps" />
                                            <Text text={`${thing4}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                            <Spacer height={`2vh`} />
                                            <Text text={`${ceremonyAddress}`} fontSize="1.4em" weight="800" color="" spacing="" lineHeight="" classes="" />

                                            <Spacer height={`4vh`} />
                                            <Text text={`Reception`} fontSize="1.6em" weight="200" color="" spacing="" lineHeight="" classes="roboto all-caps" />
                                            <Text text={`${thing5}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                            <Spacer height={`2vh`} />
                                            <Text text={`${receptionAddress}`} fontSize="1.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                                        </Box>
                                    </LaptopScreen>
                                    <DesktopScreen>
                                        <Box width="70vw" height="70vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                            <Image src={img2} alt="" radius="" classes="fill" />
                                        </Box>
                                        <Box width="60vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                            <Text text={`${thing3}`} fontSize="1.8em" weight="600" color="" spacing="" lineHeight="" classes="padding" />
                                        </Box>
                                        <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                            <Spacer height={`2vh`} />
                                            <Text text={`Ceremony`} fontSize="1.6em" weight="200" color="" spacing="" lineHeight="" classes="roboto all-caps" />
                                            <Text text={`${thing4}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                            <Spacer height={`2vh`} />
                                            <Text text={`${ceremonyAddress}`} fontSize="2em" weight="800" color="" spacing="" lineHeight="" classes="" />

                                            <Spacer height={`4vh`} />
                                            <Text text={`Reception`} fontSize="1.6em" weight="200" color="" spacing="" lineHeight="" classes="roboto all-caps" />
                                            <Text text={`${thing5}`} fontSize="1.6em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                            <Spacer height={`2vh`} />
                                            <Text text={`${receptionAddress}`} fontSize="2em" weight="800" color="" spacing="" lineHeight="" classes="" />
                                        </Box>
                                    </DesktopScreen>
                                </ResponsiveWrapper>
                            </Box>
                        </div> :
                        pageState == "registry" ?
                            <div>
                                <Spacer height={`2vh`} />
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                    <ResponsiveWrapper>
                                        <PhoneScreen>
                                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                    <Icon size="2em" color="">
                                                        <HiHeart />
                                                    </Icon>
                                                </Box>
                                                <Text text={`${registryMessage}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="text-center padding" />

                                                <Spacer height={`2vh`} />

                                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                    <Border size="1px" color="" radius="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1.4em" classes="">
                                                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                                <Text text={`Registry`} fontSize="1.2em" weight="" color="" spacing="" lineHeight="" classes="all-caps" />
                                                            </Button>
                                                        </Box>
                                                    </Border>
                                                </Box>

                                            </Box>
                                        </PhoneScreen>
                                        <TabletScreen>
                                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                    <Icon size="2em" color="">
                                                        <HiHeart />
                                                    </Icon>
                                                </Box>
                                                <Text text={`${registryMessage}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="text-center padding" />

                                                <Spacer height={`2vh`} />

                                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                    <Border size="1px" color="" radius="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1.4em" classes="">
                                                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                                <Text text={`Registry`} fontSize="1.2em" weight="" color="" spacing="" lineHeight="" classes="all-caps" />
                                                            </Button>
                                                        </Box>
                                                    </Border>
                                                </Box>

                                            </Box>
                                        </TabletScreen>
                                        <LaptopScreen>
                                            <Box width="60vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                    <Icon size="2em" color="">
                                                        <HiHeart />
                                                    </Icon>
                                                </Box>
                                                <Text text={`${registryMessage}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="text-center padding" />

                                                <Spacer height={`2vh`} />

                                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                    <Border size="1px" color="" radius="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1.4em" classes="">
                                                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                                <Text text={`Registry`} fontSize="1.2em" weight="" color="" spacing="" lineHeight="" classes="all-caps" />
                                                            </Button>
                                                        </Box>
                                                    </Border>
                                                </Box>

                                            </Box>
                                        </LaptopScreen>
                                        <DesktopScreen>
                                            <Box width="50vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                    <Icon size="2em" color="">
                                                        <HiHeart />
                                                    </Icon>
                                                </Box>
                                                <Text text={`${registryMessage}`} fontSize="2em" weight="400" color="" spacing="" lineHeight="" classes="text-center padding" />

                                                <Spacer height={`2vh`} />

                                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                                    <Border size="1px" color="" radius="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1.4em" classes="">
                                                            <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                                <Text text={`Registry`} fontSize="1.2em" weight="" color="" spacing="" lineHeight="" classes="all-caps" />
                                                            </Button>
                                                        </Box>
                                                    </Border>
                                                </Box>

                                            </Box>
                                        </DesktopScreen>
                                    </ResponsiveWrapper>
                                </Box>
                            </div> :
                            pageState == "memories" ?
                                <div>
                                    <Spacer height={`2vh`} />
                                    <Text text={`${thing6}`} fontSize="3em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                                        <ResponsiveWrapper>
                                            <PhoneScreen>
                                                <Grid orientation="column" template="1fr" gap="1em" classes="">
                                                    {
                                                        memoryImages.map((img, i) => {
                                                            return (
                                                                <Box width="" height="50vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                                    <Image src={img} alt="" radius="" classes="fill" />
                                                                </Box>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </PhoneScreen>
                                            <TabletScreen>
                                                <Grid orientation="column" template="1fr" gap="1em" classes="">
                                                    {
                                                        memoryImages.map((img, i) => {
                                                            return (
                                                                <Box width="" height="70vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                                    <Image src={img} alt="" radius="" classes="fill" />
                                                                </Box>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </TabletScreen>
                                            <LaptopScreen>
                                                <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                                    {
                                                        memoryImages.map((img, i) => {
                                                            return (
                                                                <Box width="" height="65vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                                    <Image src={img} alt="" radius="" classes="fill" />
                                                                </Box>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </LaptopScreen>
                                            <DesktopScreen>
                                                <Grid orientation="column" template="1fr 1fr" gap="1em" classes="">
                                                    {
                                                        memoryImages.map((img, i) => {
                                                            return (
                                                                <Box width="" height="70vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                                    <Image src={img} alt="" radius="" classes="fill" />
                                                                </Box>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </DesktopScreen>
                                        </ResponsiveWrapper>
                                    </Box>
                                </div> :
                                pageState == "rsvp" ?
                                    <div className='padding'>
                                        <Text text={`${thing7}`} fontSize="2.4em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                        <Spacer height={`2vh`} />
                                        <Divider size={`1px`} color={``} />

                                        <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                                            <ResponsiveWrapper>
                                                <PhoneScreen>
                                                    <Text text={`${thing8}`} fontSize="1.4em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                                    <Spacer height={`4vh`} />
                                                    <div className='horizontal gap'>
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Text text={`First Name`} fontSize="0.8em" weight="300" color="" spacing="" lineHeight="" classes="roboto" />
                                                            <Border size="1px" color="" radius="">
                                                                <TextField placeholder="First Name" fontSize="1em" radius="" padding="0.8em" id="tbFirstName" classes="" />
                                                            </Border>
                                                        </Box>
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Text text={`Last Name`} fontSize="0.8em" weight="300" color="" spacing="" lineHeight="" classes="roboto" />
                                                            <Border size="1px" color="" radius="">
                                                                <TextField placeholder="Last Name" fontSize="1em" radius="" padding="0.8em" id="tbLastName" classes="" />
                                                            </Border>
                                                        </Box>
                                                    </div>
                                                    <Spacer height={`2vh`} />
                                                    <div>
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Text text={`Email`} fontSize="0.8em" weight="300" color="" spacing="" lineHeight="" classes="roboto" />
                                                            <Border size="1px" color="" radius="">
                                                                <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                                            </Border>
                                                        </Box>
                                                    </div>
                                                    <Spacer height={`2vh`} />
                                                    <div>
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Text text={`Names of Guests in your Party`} fontSize="0.8em" weight="300" color="" spacing="" lineHeight="" classes="roboto" />
                                                            <Border size="1px" color="" radius="">
                                                                <TextField placeholder="Names" fontSize="1em" radius="" padding="0.8em" id="tbNamesOfGuests" classes="" />
                                                            </Border>
                                                        </Box>
                                                    </div>
                                                    <Spacer height={`2vh`} />
                                                    <div>
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Text text={`Any food restrictions?`} fontSize="0.8em" weight="300" color="" spacing="" lineHeight="" classes="roboto" />
                                                            <Border size="1px" color="" radius="">
                                                                <TextField placeholder="List here" fontSize="1em" radius="" padding="0.8em" id="tbRestrictions" classes="" />
                                                            </Border>
                                                        </Box>
                                                    </div>
                                                    <Spacer height={`2vh`} />
                                                    <div>
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Text text={`Questions or Concerns?`} fontSize="0.8em" weight="300" color="" spacing="" lineHeight="" classes="roboto" />
                                                            <Border size="1px" color="" radius="">
                                                                <TextField placeholder="Questions or concerns..." fontSize="1em" radius="" padding="0.8em" id="tbQuestions" classes="" />
                                                            </Border>
                                                        </Box>
                                                    </div>
                                                    <Spacer height={`2vh`} />
                                                    <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                        <Border size="1px" color="" radius="">
                                                            <Box width="" height="" radius="" backgroundColor="" paddingV="0.8em" paddingH="1.4em" classes="">
                                                                <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                                                                    <Text text={`Submit`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                                                </Button>
                                                            </Box>
                                                        </Border>
                                                    </Box>
                                                </PhoneScreen>
                                                <TabletScreen>

                                                </TabletScreen>
                                                <LaptopScreen>

                                                </LaptopScreen>
                                                <DesktopScreen>

                                                </DesktopScreen>
                                            </ResponsiveWrapper>
                                        </Box>
                                    </div> : <div></div>
            }


            <ResponsiveWrapper>
                <PhoneScreen>
                    <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="center">
                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                            <Icon size="1.6em" color="">
                                <BsInstagram />
                            </Icon>
                        </Button>
                    </Box>
                    <Text text={`${thing2}`} fontSize="2em" weight="200" color="" spacing="" lineHeight="" classes="all-caps roboto text-center" />
                </PhoneScreen>
                <TabletScreen>
                    <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="center">
                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                            <Icon size="1.6em" color="">
                                <BsInstagram />
                            </Icon>
                        </Button>
                    </Box>
                    <Text text={`${thing2}`} fontSize="2em" weight="200" color="" spacing="" lineHeight="" classes="all-caps roboto text-center" />
                </TabletScreen>
                <LaptopScreen>
                    <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="center">
                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                            <Icon size="1.6em" color="">
                                <BsInstagram />
                            </Icon>
                        </Button>
                    </Box>
                    <Text text={`${thing2}`} fontSize="2em" weight="200" color="" spacing="" lineHeight="" classes="all-caps roboto text-center" />
                </LaptopScreen>
                <DesktopScreen>
                    <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="2em" paddingH="0" classes="center">
                        <Button color="" backgroundColor="" radius="" func={() => { }} classes="">
                            <Icon size="1.8em" color="">
                                <BsInstagram />
                            </Icon>
                        </Button>
                    </Box>
                    <Text text={`${thing2}`} fontSize="2em" weight="200" color="" spacing="" lineHeight="" classes="all-caps roboto text-center" />
                </DesktopScreen>
            </ResponsiveWrapper>

            <Spacer height={`4vh`} />

            {/* NAVIGATION */}
            <Layer position="fixed" top="0" left="0" bottom="" right="" classes="light nav-body">
                <Box width="100vw" height="100vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                    <ResponsiveWrapper>
                        <PhoneScreen>
                            <Box width="" height="100vh" radius="" backgroundColor="" paddingV="" paddingH="0" classes="v-separate">
                                <div className='horizontal separate padding'>
                                    <Button color="" backgroundColor="" radius="" func={() => { setPageState("home"); closeNav() }} classes="">
                                        <Text text={`${navCouple}`} fontSize="1.4em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    </Button>
                                    <Button color="" backgroundColor="" radius="" func={() => { closeNav() }} classes="">
                                        <Icon size="2.2em" color="">
                                            <HiXMark />
                                        </Icon>
                                    </Button>
                                </div>

                                <div className='vertical gap'>
                                    <Button color="" backgroundColor="" radius="" func={() => { setPageState("wedding"); closeNav(); }} classes="">
                                        <Text text={`Wedding`} fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="all-caps text-center" />
                                    </Button>
                                    <Button color="" backgroundColor="" radius="" func={() => { setPageState("registry"); closeNav(); }} classes="">
                                        <Text text={`Registry`} fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="all-caps text-center" />
                                    </Button>
                                    <Button color="" backgroundColor="" radius="" func={() => { setPageState("memories"); closeNav(); }} classes="">
                                        <Text text={`Memories`} fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="all-caps text-center" />
                                    </Button>
                                </div>

                                <Spacer height={`2vh`} />

                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="2em" paddingH="" classes="center">
                                    <Border size="1px" color="" radius="">
                                        <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="2em" classes="">
                                            <Button color="" backgroundColor="" radius="" func={() => { setPageState("rsvp"); closeNav(); }} classes="">
                                                <Text text={`RSVP`} fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Box>
                                    </Border>
                                </Box>
                            </Box>
                        </PhoneScreen>
                        <TabletScreen>
                            <Box width="" height="100vh" radius="" backgroundColor="" paddingV="" paddingH="0" classes="v-separate">
                                <div className='horizontal separate padding'>
                                    <Button color="" backgroundColor="" radius="" func={() => { setPageState("home"); closeNav() }} classes="">
                                        <Text text={`${navCouple}`} fontSize="1.4em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                    </Button>
                                    <Button color="" backgroundColor="" radius="" func={() => { closeNav() }} classes="">
                                        <Icon size="2.2em" color="">
                                            <HiXMark />
                                        </Icon>
                                    </Button>
                                </div>

                                <div className='vertical gap'>
                                    <Button color="" backgroundColor="" radius="" func={() => { setPageState("wedding"); closeNav(); }} classes="">
                                        <Text text={`Wedding`} fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="all-caps text-center" />
                                    </Button>
                                    <Button color="" backgroundColor="" radius="" func={() => { setPageState("registry"); closeNav(); }} classes="">
                                        <Text text={`Registry`} fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="all-caps text-center" />
                                    </Button>
                                    <Button color="" backgroundColor="" radius="" func={() => { setPageState("memories"); closeNav(); }} classes="">
                                        <Text text={`Memories`} fontSize="2em" weight="" color="" spacing="" lineHeight="" classes="all-caps text-center" />
                                    </Button>
                                </div>

                                <Spacer height={`2vh`} />

                                <Box width="fit-content" height="" radius="" backgroundColor="" paddingV="2em" paddingH="" classes="center">
                                    <Border size="1px" color="" radius="">
                                        <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="2em" classes="">
                                            <Button color="" backgroundColor="" radius="" func={() => { setPageState("rsvp"); closeNav(); }} classes="">
                                                <Text text={`RSVP`} fontSize="1.4em" weight="" color="" spacing="" lineHeight="" classes="" />
                                            </Button>
                                        </Box>
                                    </Border>
                                </Box>
                            </Box>
                        </TabletScreen>
                        <LaptopScreen>

                        </LaptopScreen>
                        <DesktopScreen>

                        </DesktopScreen>
                    </ResponsiveWrapper>
                </Box>
            </Layer>
        </div>
    )
}