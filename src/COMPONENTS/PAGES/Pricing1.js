import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'

export default function Pricing1() {
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
                    <Text text="Pricing" fontSize="8vh" weight="500" color="" spacing="-2px" lineHeight="" classes="" />
                    <Text text="The cost of a bagel is everything. Here are the different plans to get your own." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<div></div>} width="" height="4vh" radius="" paddingV="" paddingH="" classes="" />

                    <div className='vertical gap'>
                        <div>
                            <Text text="$40" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                            <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                        </div>
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                        <Grid comps={[
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        ]} orientation="column/row" template="" gap="" classes="padding-h" />
                        <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                    </div>
                    <div className='vertical gap'>
                        <div>
                            <Text text="$80" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                            <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                        </div>
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        <Grid comps={[
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        ]} orientation="column/row" template="" gap="" classes="padding-h" />
                        <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                    </div>
                    <div className='vertical gap'>
                        <div>
                            <Text text="$120" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                            <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                        </div>
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        <Grid comps={[
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        ]} orientation="column/row" template="" gap="" classes="padding-h" />
                        <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                    </div>

                </div>
            } smalltablet={
                <div className='padding'>
                    <Text text="Pricing" fontSize="8vh" weight="500" color="" spacing="-2px" lineHeight="" classes="" />
                    <Text text="The cost of a bagel is everything. Here are the different plans to get your own." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<div></div>} width="" height="4vh" radius="" paddingV="" paddingH="" classes="" />

                    <div className='vertical gap'>
                        <div>
                            <Text text="$40" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                            <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                        </div>
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />

                        <Grid comps={[
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        ]} orientation="column/row" template="" gap="" classes="padding-h" />
                        <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                    </div>
                    <div className='vertical gap'>
                        <div>
                            <Text text="$80" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                            <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                        </div>
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        <Grid comps={[
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        ]} orientation="column/row" template="" gap="" classes="padding-h" />
                        <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                    </div>
                    <div className='vertical gap'>
                        <div>
                            <Text text="$120" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                            <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                        </div>
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        <Grid comps={[
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                            <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                        ]} orientation="column/row" template="" gap="" classes="padding-h" />
                        <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                    </div>

                </div>
            } tablet={
                <div className='padding'>
                    <Text text="Pricing" fontSize="8vh" weight="500" color="" spacing="-2px" lineHeight="" classes="" />
                    <Text text="The cost of a bagel is everything. Here are the different plans to get your own." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />

                    <Box comp={<div></div>} width="" height="4vh" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Grid comps={[
                                <div>
                                    <Text text="$40" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />
                            <Grid comps={[
                                <div>
                                    <Text text="$80" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />
                            <Grid comps={[
                                <div>
                                    <Text text="$120" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />

                        </div>
                    } width="90vw" height="" radius="" paddingV="0" paddingH="1em" classes="" />
                </div>
            } smalllaptop={
                <div className='padding'>
                    <Box comp={
                        <div>
                            <Text text="Pricing" fontSize="8vh" weight="500" color="" spacing="-2px" lineHeight="" classes="" />
                            <Text text="The cost of a bagel is everything. Here are the different plans to get your own." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="80vw" height="" radius="" paddingV="0" paddingH="4vw" classes="" />

                    <Box comp={<div></div>} width="" height="10vh" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Grid comps={[
                                <div>
                                    <Text text="$40" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />
                            <Grid comps={[
                                <div>
                                    <Text text="$80" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />
                            <Grid comps={[
                                <div>
                                    <Text text="$120" fontSize="2.4em" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />

                        </div>
                    } width="90vw" height="" radius="" paddingV="0" paddingH="1em" classes="" />
                </div>
            } desktop={
                <div className='padding'>
                   <Box comp={
                        <div>
                            <Text text="Pricing" fontSize="8vh" weight="500" color="" spacing="-2px" lineHeight="" classes="" />
                            <Text text="The cost of a bagel is everything. Here are the different plans to get your own." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                        </div>
                    } width="80vw" height="" radius="" paddingV="0" paddingH="4vw" classes="" />

                    <Box comp={<div></div>} width="" height="10vh" radius="" paddingV="" paddingH="" classes="" />

                    <Box comp={
                        <div>
                            <Grid comps={[
                                <div>
                                    <Text text="$40" fontSize="8vh" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />
                            <Grid comps={[
                                <div>
                                    <Text text="$80" fontSize="8vh" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />
                            <Grid comps={[
                                <div>
                                    <Text text="$120" fontSize="8vh" weight="800" color="" spacing="" lineHeight="" classes="" />
                                    <Text text="/a month" fontSize="1.1em" weight="300" color="gray" spacing="" lineHeight="" classes="" />
                                </div>,
                                <div className='vertical gap'>
                                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    <Grid comps={[
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />,
                                        <Text text="- This product comes with a bagel in everything." fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                                    ]} orientation="column/row" template="" gap="" classes="padding-h" />
                                    <Box comp={<div></div>} width="" height="5vh" radius="" paddingV="" paddingH="" classes="" />
                                </div>
                            ]} orientation="column" template="1fr 1fr" gap="2em" classes="" />

                        </div>
                    } width="80vw" height="" radius="" paddingV="0" paddingH="1em" classes="center" />
                </div>
            } />
            <Footer1 />
        </div>
    )
}