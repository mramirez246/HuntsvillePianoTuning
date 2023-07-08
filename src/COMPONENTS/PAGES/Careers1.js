import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'

export default function Careers1() {
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
            <Navigation1 />
            <ResponsiveElements phone={
                <div className='padding'>
                    <Text text="Careers" fontSize="10vw" weight="" color="" spacing="" lineHeight="" classes="" />
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Box comp={
                        <Grid comps={[
                            <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <div>
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <Button comp={
                                        <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                            </div>
                        ]} orientation="column" template="1fr" gap="1em" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Box comp={
                        <Grid comps={[
                            <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <div>
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <Button comp={
                                        <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                            </div>
                        ]} orientation="column" template="1fr" gap="1em" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Box comp={
                        <Grid comps={[
                            <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <div>
                                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                <Box comp={
                                    <Button comp={
                                        <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                            </div>
                        ]} orientation="column" template="1fr" gap="1em" classes="" />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                </div>
            } smalltablet={
                <div className='padding'>
                    <Text text="Careers" fontSize="10vw" weight="" color="" spacing="" lineHeight="" classes="" />
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr" gap="1em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr" gap="1em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr" gap="1em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="1em" classes="" />
                </div>
            } tablet={
                <div className='padding'>
                    <Text text="Careers" fontSize="8vw" weight="" color="" spacing="" lineHeight="" classes="" />
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.5em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="1em" classes="" />
                </div>
            } smalllaptop={
                <div className='padding'>
                    <Box comp={
                        <div>
                            <Text text="Careers" fontSize="6vw" weight="" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="80vw" height="" radius="" paddingV="0" paddingH="5vw" classes="" />
                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="2em" paddingH="0" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="2em" classes="" />
                </div>
            } desktop={
                <div className='padding'>
                    <Box comp={
                        <div>
                            <Text text="Careers" fontSize="6vw" weight="" color="" spacing="" lineHeight="" classes="" />
                            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="75vw" height="" radius="" paddingV="0" paddingH="1em" classes="" />
                    <Box comp={
                        <hr />
                    } width="" height="" radius="" paddingV="2em" paddingH="0" classes="" />

                    <Box comp={
                        <div>
                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                            <Box comp={
                                <Grid comps={[
                                    <Text text="Everyting Bagel Officer" fontSize="1.6em" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                    <div>
                                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.  " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                        <Box comp={<div></div>} width="" height="2vh" radius="" paddingV="" paddingH="" classes="" />
                                        <Box comp={
                                            <Button comp={
                                                <Text text="Apply Now" fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                            } color="" backgroundColor="" radius="" func={() => { }} classes="" />
                                        } width="fit-content" height="" radius="" paddingV="0.8em" paddingH="1em" classes="dark right" />
                                    </div>
                                ]} orientation="column" template="1fr 2fr" gap="2em" classes="" />
                            } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

                        </div>
                    } width="75vw" height="" radius="" paddingV="" paddingH="" classes="center" />
                </div>
            } />
            <Footer1 />
        </div>
    )
}