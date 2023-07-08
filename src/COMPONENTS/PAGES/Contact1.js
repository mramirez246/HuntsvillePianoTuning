import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessAddress, c_businessEmail, c_businessName, c_businessPhone, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

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
        const name = document.querySelector('#tbName').value
        const email = document.querySelector('#tbEmail').value
        const subject = document.querySelector('#ddSubject').value
        const message = document.querySelector('#taMessage').value

        const args = {
            Name: name,
            Email: email,
            Subject: subject,
            Message: message
        }
    }


    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <ResponsiveElements phone={
                <div className='padding'>
                    <Text text="Keep in touch!" fontSize="3em" weight="" color="" spacing="" lineHeight="" classes="" />
                    <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    <Box comp={
                        <div>
                            <Text text={`${c_businessEmail}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${c_businessPhone}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    <Box comp={
                        <div className='vertical'>
                            <Text text={`${c_businessAddress}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />

                            <Box comp={
                                <div className='horizontal gap'>
                                    <Icon comp={<BsInstagram />} size="1.4em" color="" />
                                    <Icon comp={<BsFacebook />} size="1.4em" color="" />
                                    <Icon comp={<BsTwitter />} size="1.4em" color="" />
                                </div>
                            } width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="" />

                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    {/* FORM */}
                    <div className='vertical gap'>
                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                        <Text text="Contact us at any time" fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                        <Box comp={
                            <div>
                                <Text text="Name" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Border comp={
                                    <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                } size="1px" color="black" radius="" />
                            </div>
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={
                            <div>
                                <Text text="Email" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Border comp={
                                    <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                } size="1px" color="black" radius="" />
                            </div>
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={
                            <div>
                                <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Border comp={
                                    <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                } size="1px" color="black" radius="" />
                            </div>
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={
                            <div>
                                <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Border comp={
                                    <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="150px" classes="roboto" />
                                } size="1px" color="black" radius="" />
                            </div>
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                        <Button comp={
                            <Box comp={
                                <Text text="Submit" fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                            } width="" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="dark" />
                    </div>

                </div>
            } smalltablet={
                <div className='padding'>
                    <Text text="Keep in touch!" fontSize="3em" weight="" color="" spacing="" lineHeight="" classes="" />
                    <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    <Box comp={
                        <div>
                            <Text text={`${c_businessEmail}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            <Text text={`${c_businessPhone}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                    <Box comp={
                        <div className='vertical'>
                            <Text text={`${c_businessAddress}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />

                            <Box comp={
                                <div className='horizontal gap'>
                                    <Icon comp={<BsInstagram />} size="1.4em" color="" />
                                    <Icon comp={<BsFacebook />} size="1.4em" color="" />
                                    <Icon comp={<BsTwitter />} size="1.4em" color="" />
                                </div>
                            } width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="" />

                        </div>
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    {/* FORM */}
                    <div className='vertical gap'>
                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                        <Text text="Contact us at any time" fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                        <Box comp={
                            <div>
                                <Text text="Name" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Border comp={
                                    <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                } size="1px" color="black" radius="" />
                            </div>
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={
                            <div>
                                <Text text="Email" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Border comp={
                                    <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                } size="1px" color="black" radius="" />
                            </div>
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={
                            <div>
                                <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Border comp={
                                    <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                } size="1px" color="black" radius="" />
                            </div>
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={
                            <div>
                                <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Border comp={
                                    <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="150px" classes="roboto" />
                                } size="1px" color="black" radius="" />
                            </div>
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                        <Button comp={
                            <Box comp={
                                <Text text="Submit" fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                            } width="" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="dark" />
                    </div>

                </div>
            } tablet={
                <Box comp={
                    <div className='padding'>
                        <Text text="Keep in touch!" fontSize="3em" weight="" color="" spacing="" lineHeight="" classes="" />
                        <Box comp={
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                        <Box comp={
                            <div>
                                <Text text={`${c_businessEmail}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                <Text text={`${c_businessPhone}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                            </div>
                        } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                        <Box comp={
                            <div className='vertical'>
                                <Text text={`${c_businessAddress}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />

                                <Box comp={
                                    <div className='horizontal gap'>
                                        <Icon comp={<BsInstagram />} size="1.4em" color="" />
                                        <Icon comp={<BsFacebook />} size="1.4em" color="" />
                                        <Icon comp={<BsTwitter />} size="1.4em" color="" />
                                    </div>
                                } width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="" />

                            </div>
                        } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                        {/* FORM */}
                        <div className='vertical gap'>
                            <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                            <Text text="Contact us at any time" fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            <Box comp={
                                <div>
                                    <Text text="Name" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Border comp={
                                        <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                    } size="1px" color="black" radius="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <div>
                                    <Text text="Email" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Border comp={
                                        <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                    } size="1px" color="black" radius="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <div>
                                    <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Border comp={
                                        <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                    } size="1px" color="black" radius="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <div>
                                    <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                    <Border comp={
                                        <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="150px" classes="roboto" />
                                    } size="1px" color="black" radius="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                            <Button comp={
                                <Box comp={
                                    <Text text="Submit" fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                } width="" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="dark" />
                        </div>

                    </div>
                } width="450px" height="" radius="" paddingV="" paddingH="" classes="center" />
            } smalllaptop={
                <Box comp={
                    <div className='padding'>
                        <Grid comps={[
                            <div>
                                <Text text="Keep in touch!" fontSize="3em" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Box comp={
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text={`${c_businessEmail}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${c_businessPhone}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    </div>
                                } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                                <Box comp={
                                    <div className='vertical'>
                                        <Text text={`${c_businessAddress}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />

                                        <Box comp={
                                            <div className='horizontal gap'>
                                                <Icon comp={<BsInstagram />} size="1.4em" color="" />
                                                <Icon comp={<BsFacebook />} size="1.4em" color="" />
                                                <Icon comp={<BsTwitter />} size="1.4em" color="" />
                                            </div>
                                        } width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="" />

                                    </div>
                                } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            </div>,
                            <div className='vertical gap'>
                                <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                <Text text="Contact us at any time" fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text="Name" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                        <Border comp={
                                            <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                        } size="1px" color="black" radius="" />
                                    </div>
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text="Email" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                        <Border comp={
                                            <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                        } size="1px" color="black" radius="" />
                                    </div>
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                        <Border comp={
                                            <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                        } size="1px" color="black" radius="" />
                                    </div>
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                        <Border comp={
                                            <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="150px" classes="roboto" />
                                        } size="1px" color="black" radius="" />
                                    </div>
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                <Button comp={
                                    <Box comp={
                                        <Text text="Submit" fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                    } width="" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                } color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="dark" />
                            </div>
                        ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />

                    </div>
                } width="" height="" radius="" paddingV="" paddingH="1em" classes="center" />
            } desktop={
                <Box comp={
                    <div className='padding'>
                        <Grid comps={[
                            <div>
                                <Text text="Keep in touch!" fontSize="3em" weight="" color="" spacing="" lineHeight="" classes="" />
                                <Box comp={
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text={`${c_businessEmail}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                        <Text text={`${c_businessPhone}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />
                                    </div>
                                } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />
                                <Box comp={
                                    <div className='vertical'>
                                        <Text text={`${c_businessAddress}`} fontSize="1.2em" weight="500" color="" spacing="" lineHeight="" classes="" />

                                        <Box comp={
                                            <div className='horizontal gap'>
                                                <Icon comp={<BsInstagram />} size="1.4em" color="" />
                                                <Icon comp={<BsFacebook />} size="1.4em" color="" />
                                                <Icon comp={<BsTwitter />} size="1.4em" color="" />
                                            </div>
                                        } width="" height="" radius="" paddingV="0.4em" paddingH="0" classes="" />

                                    </div>
                                } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            </div>,
                            <div className='vertical gap'>
                                <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                <Text text="Contact us at any time" fontSize="1.5em" weight="400" color="" spacing="" lineHeight="" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text="Name" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                        <Border comp={
                                            <TextField placeholder="Full Name" fontSize="1em" radius="" padding="0.8em" id="tbName" classes="" />
                                        } size="1px" color="black" radius="" />
                                    </div>
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text="Email" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                        <Border comp={
                                            <TextField placeholder="Email" fontSize="1em" radius="" padding="0.8em" id="tbEmail" classes="" />
                                        } size="1px" color="black" radius="" />
                                    </div>
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                        <Border comp={
                                            <DropDown options={["Message", "Question", "Concern"]} fontSize="1em" padding="0.8em" radius="" classes="" id="ddSubject" />
                                        } size="1px" color="black" radius="" />
                                    </div>
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <div>
                                        <Text text="Subject" fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                                        <Border comp={
                                            <TextArea placeholder="Type message here..." fontSize="1em" radius="" padding="0.8em" id="taMessage" minHeight="150px" classes="roboto" />
                                        } size="1px" color="black" radius="" />
                                    </div>
                                } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                <Button comp={
                                    <Box comp={
                                        <Text text="Submit" fontSize="1em" weight="400" color="" spacing="" lineHeight="" classes="text-center" />
                                    } width="" height="" radius="" paddingV="0.8em" paddingH="0" classes="" />
                                } color="" backgroundColor="" radius="" func={() => { sendContactForm() }} classes="dark" />
                            </div>
                        ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />

                    </div>
                } width="" height="" radius="" paddingV="" paddingH="2em" classes="center" />
            } />

            <Footer1 />
        </div>
    )
}