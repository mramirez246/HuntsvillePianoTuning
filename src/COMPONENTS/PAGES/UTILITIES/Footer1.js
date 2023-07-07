import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessDesc, c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'

export default function Footer1() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.pathname

    useEffect(() => {

    }, [])

    return (
        <div className='roboto padding'>
            <ResponsiveElements phone={
                <div className='vertical gap'>
                    <Box comp={
                        <Text text={`${c_businessDesc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <Text text="Links" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Button comp={
                                    <Text text="Services" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Gallery" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Portfolio" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Contact Us" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <Text text="Shop" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Button comp={
                                    <Text text="Menu" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Products" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <Text text="Get in touch" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Button comp={
                                    <Text text="Instagram" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Facebook" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Yelp" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <Text text={`${c_businessName}`} fontSize="4em" weight="800" color="" spacing="-2px" lineHeight="0.8em" classes="all-caps" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                </div>
            } smalltablet={
                <div className='vertical gap'>
                    <Box comp={
                        <Text text={`${c_businessDesc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <Text text="Links" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Button comp={
                                    <Text text="Services" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Gallery" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Portfolio" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Contact Us" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <Text text="Shop" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Button comp={
                                    <Text text="Menu" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Products" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <Text text="Get in touch" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Button comp={
                                    <Text text="Instagram" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Facebook" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                            <Box comp={
                                <Button comp={
                                    <Text text="Yelp" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <Text text={`${c_businessName}`} fontSize="4em" weight="800" color="" spacing="-2px" lineHeight="0.8em" classes="all-caps" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                </div>
            } tablet={
                <div className='vertical gap'>
                    <div className='horizontal gap'>
                        <Box comp={
                            <Text text={`${c_businessDesc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        <div>
                            <Box comp={
                                <Text text="Links" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Services" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Services" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Portfolio" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Contact Us" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>
                        <div>
                            <Box comp={
                                <Text text="Shop" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Menu" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Products" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>
                        <div>
                            <Box comp={
                                <Text text="Get in touch" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Instagram" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Facebook" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Yelp" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>

                    </div>
                    <Box comp={
                        <Text text={`${c_businessName}`} fontSize="6em" weight="800" color="" spacing="-3px" lineHeight="0.8em" classes="all-caps" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                </div>
            } smalllaptop={
                <div className='vertical gap'>
                    <div className='horizontal gap'>
                        <Box comp={
                            <Text text={`${c_businessDesc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        } width="70vw" height="" radius="" paddingV="" paddingH="" classes="" />

                        <div>
                            <Box comp={
                                <Text text="Links" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Services" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Gallery" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Portfolio" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Contact Us" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>
                        <div>
                            <Box comp={
                                <Text text="Shop" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Menu" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Products" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>
                        <div>
                            <Box comp={
                                <Text text="Get in touch" fontSize="1.2em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Instagram" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Facebook" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Yelp" fontSize="" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>

                    </div>
                    <Box comp={
                        <Text text={`${c_businessName}`} fontSize="7.5em" weight="800" color="" spacing="-4px" lineHeight="0.8em" classes="all-caps" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                </div>
            } desktop={
                <div className='vertical gap'>
                    <div className='horizontal gap'>
                        <Box comp={
                            <Text text={`${c_businessDesc}`} fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        } width="40vw" height="" radius="" paddingV="" paddingH="" classes="" />

                        <div>
                            <Box comp={
                                <Text text="Links" fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Services" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Services" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Portfolio" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Contact Us" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>
                        <div>
                            <Box comp={
                                <Text text="Shop" fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Menu" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Products" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>
                        <div>
                            <Box comp={
                                <Text text="Get in touch" fontSize="1.4em" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } width="15vw" height="" radius="" paddingV="" paddingH="" classes="" />

                            <Box comp={
                                <div>
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Instagram" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Facebook" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                    <Box comp={
                                        <Button comp={
                                            <Text text="Yelp" fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="underline" />
                                        } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                                    } width="fit-content" height="" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                        </div>

                    </div>
                    <Box comp={<div></div>} width="" height="" radius="" paddingV="2vh" paddingH="" classes="" />
                    <Box comp={
                        <Text text={`${c_businessName}`} fontSize="12vw" weight="800" color="" spacing="-5px" lineHeight="0.8em" classes="all-caps" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />

                </div>
            } />

        </div>
    )
}