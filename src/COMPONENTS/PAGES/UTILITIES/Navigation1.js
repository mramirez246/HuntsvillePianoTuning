import React from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, RadioButtons, ResponsiveElements, Text, TextArea, TextField , Underline} from '../../Elements'
import { FiMenu } from 'react-icons/fi'
// 
import logo from '../../../PHOTOS/logo.jpg'
import { c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'

export default function Navigation1() {
    const navigate = useNavigate()

    return (
        <div className='roboto'>
            <ResponsiveElements one={
                <Box comp={
                    <div className='separate'>
                        <Box comp={
                            <Image src={logo} alt="" radius="" classes="" />
                        } width="8vh" height="" radius="" paddingV="0" paddingH="0" />
                        <Box comp={
                            <Icon comp={<FiMenu />} size="30px" color="" />
                        } width="" height="" radius="" paddingV="0" paddingH="0" />
                    </div>
                } width="" height="" radius="" paddingV="0.5em" paddingH="0.5em" />
            } two={
                <Box comp={
                    <div className='separate'>
                        <Box comp={
                            <Image src={logo} alt="" radius="" classes="" />
                        } width="9vh" height="" radius="" paddingV="0" paddingH="0" />
                        <Box comp={
                            <Icon comp={<FiMenu />} size="30px" color="" />
                        } width="" height="" radius="" paddingV="0" paddingH="0" />
                    </div>
                } width="" height="" radius="" paddingV="0.5em" paddingH="0.5em" />
            } three={
                <div className='separate padding'>
                    <Box comp={
                        <Image src={logo} alt="" radius="" classes="" />
                    } width="9vh" height="" radius="" paddingV="" paddingH="" />
                    <Box comp={
                        <Grid comps={[
                            <Button comp={
                                <Text text="About" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />,
                            <Button comp={
                                <Text text="Services" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />,
                            <Button comp={
                                <Text text="Gallery" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                        ]} orientation="column" count="3" gap="1em" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                    <Border comp={
                        <Button comp={
                            <Box comp={
                                <Text text="Contact" fontSize="16px" weight="400" color="" spacing="" lineHeight="" classes="fit-height" />
                            } width="" height="" radius="" paddingV="0.8em" paddingH="1em" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="fit-height" />
                    } size="1px" color="black" radius="30px"/>
                </div>
            } four={
                <div className='separate padding'>
                    <Box comp={
                        <Image src={logo} alt="" radius="" classes="" />
                    } width="9vh" height="" radius="" paddingV="" paddingH="" />
                    <Box comp={
                        <Grid comps={[
                            <Button comp={
                                <Text text="About" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />,
                            <Button comp={
                                <Text text="Services" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />,
                            <Button comp={
                                <Text text="Gallery" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                        ]} orientation="column" count="3" gap="1em" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                    <Border comp={
                        <Button comp={
                            <Box comp={
                                <Text text="Contact" fontSize="16px" weight="400" color="" spacing="" lineHeight="" classes="fit-height" />
                            } width="" height="" radius="" paddingV="0.8em" paddingH="1em" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="fit-height" />
                    } size="1px" color="black" radius="30px"/>
                </div>
            } five={
                <div className='separate padding'>
                    <Box comp={
                        <Image src={logo} alt="" radius="" classes="" />
                    } width="9vh" height="" radius="" paddingV="" paddingH="" />
                    <Box comp={
                        <Grid comps={[
                            <Button comp={
                                <Text text="About" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />,
                            <Button comp={
                                <Text text="Services" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />,
                            <Button comp={
                                <Text text="Gallery" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                        ]} orientation="column" count="3" gap="1em" />
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                    <Border comp={
                        <Button comp={
                            <Box comp={
                                <Text text="Contact" fontSize="16px" weight="400" color="" spacing="" lineHeight="" classes="fit-height" />
                            } width="" height="" radius="" paddingV="0.8em" paddingH="1em" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="fit-height" />
                    } size="1px" color="black" radius="30px"/>
                </div>
            } />
        </div>
    )
}
