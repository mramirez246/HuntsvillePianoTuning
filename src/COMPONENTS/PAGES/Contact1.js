import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessAddress, c_businessEmail, c_businessName, c_businessPhone, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
import { BsFacebook, BsInstagram, BsTwitter, BsYelp } from 'react-icons/bs'
import { firebase_SendContactForm } from '../../FIREBASE/firebase'

export default function Contact1() {
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

    const sendContactForm = () => {
        const name = document.querySelector("#tbName").value
const email = document.querySelector("#tbEmail").value
const subject = document.querySelector("#ddSubject").value
const message = document.querySelector("#taMessage").value

const args = {
    Name: name,
    Email: email,
    Subject: subject,
    Message: message
}
        firebase_SendContactForm(args)
        .then(() => {
            alert("Your form has been submitted.")
        })
    }

    const thing1 = "If you'd like to get in touch, start here using our form. Thanks!"

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="" height="" radius="" paddingV="1em" paddingH="1em" classes="">
                <Box width="fit-content" height="" radius="" paddingV="" paddingH="" classes="center">
                    <Heading1 text={`Keep in touch!`} />
                </Box>

                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                    <Text text={`${thing1}`} fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="text-center" />
                </Box>

                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                </Box>

                <ResponsiveWrapper>
                    <PhoneScreen>
                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                            <Text text={`${c_businessEmail}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${c_businessPhone}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />

                            <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                            </Box>

                            <Text text={`${c_businessAddress}`} fontSize="1.4em" weight="500" color="" spacing="-1px" lineHeight="" classes="" />
                            <Box width="" height="2vh" radius="" paddingV="" paddingH="" classes="">

                            </Box>
                            {/* Socials */}
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

                        {/* FORM */}
                        <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="vertical gap">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Name`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="100vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Email`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="100vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Subject`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="100vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Message`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="100vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                    <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="125px" classes="roboto" />
                                    </Box>
                                </Border>
                            </Box>
                            <Button color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="dark">
                                <Box width="100%" height="" radius="" paddingV="0.8em" paddingH="2em" classes="">
                                    <Text text={`Submit`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                </Box>
                            </Button>
                        </Box>
                    </PhoneScreen>
                    <TabletScreen>
                        <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                            <Text text={`${c_businessEmail}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${c_businessPhone}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />

                            <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                            </Box>

                            <Text text={`${c_businessAddress}`} fontSize="1.4em" weight="500" color="" spacing="-1px" lineHeight="" classes="" />
                            <Box width="" height="2vh" radius="" paddingV="" paddingH="" classes="">

                            </Box>
                            {/* Socials */}
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

                        {/* FORM */}
                        <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="vertical gap">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Name`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="400px" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Email`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="400px" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Subject`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="400px" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Message`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="400px" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                    <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="125px" classes="roboto" />
                                    </Box>
                                </Border>
                            </Box>
                            <Button color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="">
                                <Box width="400px" height="" radius="" paddingV="0.8em" paddingH="2em" classes="dark">
                                    <Text text={`Submit`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                </Box>
                            </Button>
                        </Box>
                    </TabletScreen>
                    <LaptopScreen>
                        <Box width="" height="" radius="" backgroundColor="" paddingV="0" paddingH="2vw" classes="">
                        
                        
                        <Grid orientation="column" template="1fr 1fr" gap="1em" classes="padding">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`${c_businessEmail}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${c_businessPhone}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />

                                <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                                </Box>

                                <Text text={`${c_businessAddress}`} fontSize="1.4em" weight="500" color="" spacing="-1px" lineHeight="" classes="" />
                                <Box width="" height="2vh" radius="" paddingV="" paddingH="" classes="">

                                </Box>
                                {/* Socials */}
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

                            {/* FORM */}
                            <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="vertical gap">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Name`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="50vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Email`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="50vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Subject`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="50vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Message`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="50vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                    <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="125px" classes="roboto" />
                                    </Box>
                                </Border>
                            </Box>
                            <Button color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="dark">
                                <Box width="50vw" height="" radius="" paddingV="0.8em" paddingH="2em" classes="">
                                    <Text text={`Submit`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                </Box>
                            </Button>
                        </Box>
                        </Grid>
                        </Box>
                    </LaptopScreen>
                    <DesktopScreen>
                        <Box width="" height="" radius="" paddingV="0" paddingH="10vw" classes="center">
                            <Grid orientation="column" template="1fr 1fr" gap="1em" classes="padding">
                                <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                    <Text text={`${c_businessEmail}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    <Text text={`${c_businessPhone}`} fontSize="1.4em" weight="500" color="" spacing="" lineHeight="" classes="" />

                                    <Box width="" height="4vh" radius="" paddingV="" paddingH="" classes="">
                                    </Box>

                                    <Text text={`${c_businessAddress}`} fontSize="1.4em" weight="500" color="" spacing="-1px" lineHeight="" classes="" />
                                    <Box width="" height="2vh" radius="" paddingV="" paddingH="" classes="">

                                    </Box>
                                    {/* Socials */}
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

                                {/* FORM */}
                                <Box width="" height="" radius="" paddingV="1em" paddingH="0" classes="vertical gap">
                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Name`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="40vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Email`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="40vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Subject`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="40vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                        <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                    </Box>
                                </Border>
                            </Box>

                            <Box width="" height="" radius="" paddingV="" paddingH="" classes="">
                                <Text text={`Message`} fontSize="1.1em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Border size="1px" color="" radius="">
                                    <Box width="40vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                    <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="125px" classes="roboto" />
                                    </Box>
                                </Border>
                            </Box>
                            <Button color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="dark">
                                <Box width="40vw" height="" radius="" paddingV="0.8em" paddingH="2em" classes="">
                                    <Text text={`Submit`} fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                </Box>
                            </Button>
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