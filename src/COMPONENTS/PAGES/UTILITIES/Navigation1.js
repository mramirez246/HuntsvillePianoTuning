import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Icon, Image, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../../Elements'
import { FiMenu } from 'react-icons/fi'
import { HiXMark } from 'react-icons/hi2'
// 
import logo from '../../../PHOTOS/logo.jpg'
import { c_businessName, c_routes } from '../../../Constants'
import { useLocation, useNavigate } from 'react-router'

export default function Navigation1() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname

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

    useEffect(() => {
        closeNav()
    }, [])


    return (
        <div className='roboto'>
            <ResponsiveElements one={
                <Box comp={
                    <div className='separate'>
                        <Button comp={
                            <Box comp={
                                <Image src={logo} alt="" radius="" classes="" />
                            } width="8vh" height="" radius="" paddingV="0" paddingH="0" />
                        } color="" backgroundColor="" radius="" func={() => {navigate('/')}} classes=""/>
                        <Button comp={
                            <Box comp={
                                <Icon comp={<FiMenu />} size="30px" color="" />
                            } width="" height="" radius="" paddingV="0" paddingH="0" />
                        } color="" backgroundColor="" radius="" func={() => {openNav()}} classes=""/>
                    </div>
                } width="" height="" radius="" paddingV="0.5em" paddingH="0.5em" />
            } two={
                <Button comp={
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
                } color="" backgroundColor="" radius="" func={() => { openNav() }} classes="" />
            } three={
                <div className='separate padding'>
                    <Box comp={
                        <Image src={logo} alt="" radius="" classes="" />
                    } width="9vh" height="" radius="" paddingV="" paddingH="" />
                    <Box comp={
                        <div className='horizontal gap'>
                            <Button comp={
                                <Text text="About" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            <Button comp={
                                <Text text="Services" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            <Button comp={
                                <Text text="Gallery" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                    <Border comp={
                        <Button comp={
                            <Box comp={
                                <Text text="Contact" fontSize="16px" weight="400" color="" spacing="" lineHeight="" classes="fit-height" />
                            } width="" height="" radius="" paddingV="0.8em" paddingH="1em" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="fit-height" />
                    } size="1px" color="black" radius="30px" />
                </div>
            } four={
                <div className='separate padding'>
                    <Box comp={
                        <Image src={logo} alt="" radius="" classes="" />
                    } width="9vh" height="" radius="" paddingV="" paddingH="" />
                    <Box comp={
                        <div className='horizontal gap'>
                            <Button comp={
                                <Text text="About" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            <Button comp={
                                <Text text="Services" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            <Button comp={
                                <Text text="Gallery" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                    <Border comp={
                        <Button comp={
                            <Box comp={
                                <Text text="Contact" fontSize="16px" weight="400" color="" spacing="" lineHeight="" classes="fit-height" />
                            } width="" height="" radius="" paddingV="0.8em" paddingH="1em" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="fit-height" />
                    } size="1px" color="black" radius="30px" />
                </div>
            } five={
                <div className='separate padding'>
                    <Box comp={
                        <Image src={logo} alt="" radius="" classes="" />
                    } width="9vh" height="" radius="" paddingV="" paddingH="" />
                    <Box comp={
                        <div className='horizontal gap'>
                            <Button comp={
                                <Text text="About" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            <Button comp={
                                <Text text="Services" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                            <Button comp={
                                <Text text="Gallery" fontSize="18px" weight="400" color="" spacing="" lineHeight="" classes="" />
                            } color="" backgroundColor="" radius="" func={() => { navigate('/about') }} classes="" />
                        </div>
                    } width="" height="" radius="" paddingV="" paddingH="" classes="" />
                    <Border comp={
                        <Button comp={
                            <Box comp={
                                <Text text="Contact" fontSize="16px" weight="400" color="" spacing="" lineHeight="" classes="fit-height" />
                            } width="" height="" radius="" paddingV="0.8em" paddingH="1em" classes="" />
                        } color="" backgroundColor="" radius="" func={() => { navigate('/contact') }} classes="fit-height" />
                    } size="1px" color="black" radius="30px" />
                </div>
            } />

            <div className='nav-body light v-center'>
                <div className='separate padding'>
                    <Box comp={
                        <Image src={logo} alt="" radius="" classes="" />
                    } width="12vh" height="" radius="" paddingV="" paddingH="" classes="" />
                    <Button comp={
                        <Icon comp={<HiXMark />} size="2em" color="" />
                    } color="" backgroundColor="" radius="" func={() => { closeNav() }} classes="" />
                </div>
                <div className='padding'>
                    <Button comp={
                        <Text text="About" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="" />
                    <Button comp={
                        <Text text="Services" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="" />
                    <Button comp={
                        <Text text="Gallery" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="" />
                    <Button comp={
                        <Text text="Contact Us" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                    } color="" backgroundColor="" radius="" func={() => { navigate('/') }} classes="" />
                </div>
                <Box comp={<div></div>} width="" height="100px" radius="" paddingV="" paddingH="" classes="" />
                <div className='separate padding'>
                    <Text text={`${c_businessName} 2023. All Rights Reserved.`} fontSize="12px" weight="400" color="gray" spacing="" lineHeight="" classes="text-center" />
                </div>
            </div>
        </div>
    )
}
