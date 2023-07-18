import React, { useEffect, useState } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Spacer, Text, TextArea, TextField, Underline } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { BsArrowLeft, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'

// 

import blog1img1 from '../../PHOTOS/stock1.jpg'
import blog2img1 from '../../PHOTOS/stock2.jpg'
import blog3img1 from '../../PHOTOS/stock3.jpg'

export default function Blog1() {
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

    const [showBlogPost, setShowBlogPost] = useState(false)
    const [chosenBlogPost, setChosenBlogPost] = useState("")

    const blogs = [
        {
            id: 0,
            Image: blog1img1,
            Title: "The rise and fall of the bagel.",
            Date: new Date(),
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. ",
            HTML: <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                <Spacer height={`4vh`} />
                <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                    <Image src={blog1img1} alt="" radius="" classes="fill" />
                </Box>
                <Spacer height={`4vh`} />
                <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                <Spacer height={`2vh`} />
                <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
            </Box>
        },
        {
            id: 1,
            Image: blog2img1,
            Title: "The rise and fall of the bagel.",
            Date: new Date(),
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. ",
            HTML: <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                <Spacer height={`4vh`} />
                <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                    <Image src={blog2img1} alt="" radius="" classes="fill" />
                </Box>
                <Spacer height={`4vh`} />
                <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                <Spacer height={`2vh`} />
                <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
            </Box>
        },
        {
            id: 2,
            Image: blog3img1,
            Title: "The rise and fall of the bagel.",
            Date: new Date(),
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. ",
            HTML: <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                <Spacer height={`4vh`} />
                <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                    <Image src={blog3img1} alt="" radius="" classes="fill" />
                </Box>
                <Spacer height={`4vh`} />
                <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
                <Spacer height={`2vh`} />
                <Text text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="" />
            </Box>
        },
    ]

    useEffect(() => {
        // closeNav()
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            {
                !showBlogPost ?
                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                        <Heading1 text={`Blog`} classes={``} />
                        <Spacer height={`2vh`} />
                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                            <ResponsiveWrapper>
                                <PhoneScreen>
                                    <Grid orientation="column" template="1fr" gap="2em" classes="">
                                        {
                                            blogs.map((blog, i) => {
                                                return (
                                                    <Button color="" backgroundColor="" radius="" func={() => { setShowBlogPost(true); setChosenBlogPost(blog) }} classes="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Box width="" height="45vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="relative">
                                                                <Image src={blog.Image} alt="" radius="10px" classes="fill" />
                                                                <Layer position="absolute" top="1em" left="" bottom="" right="1em" classes="">
                                                                    <Icon size="2em" color="white">
                                                                        <BsFillArrowUpRightCircleFill />
                                                                    </Icon>
                                                                </Layer>
                                                                <Layer position="absolute" top="1em" left="1em" bottom="" right="" classes="">
                                                                    <Box width="" height="" radius="30px" backgroundColor="white" paddingV="0.5em" paddingH="1em" classes="">
                                                                        <Text text={`${blog.Date.toLocaleDateString()}`} fontSize="0.9em" weight="" color="" spacing="" lineHeight="" classes="" />
                                                                    </Box>
                                                                </Layer>
                                                            </Box>
                                                            <Spacer height={`1vh`} />
                                                            <Text text={`${blog.Title}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                                            <Text text={`${blog.Desc}`} fontSize="0.9em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                        </Box>
                                                    </Button>
                                                )
                                            })
                                        }
                                    </Grid>
                                </PhoneScreen>
                                <TabletScreen>
                                    <Grid orientation="column" template="1fr" gap="2em" classes="">
                                        {
                                            blogs.map((blog, i) => {
                                                return (
                                                    <Button color="" backgroundColor="" radius="" func={() => { setShowBlogPost(true); setChosenBlogPost(blog) }} classes="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Box width="" height="60vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="relative">
                                                                <Image src={blog.Image} alt="" radius="10px" classes="fill" />
                                                                <Layer position="absolute" top="1em" left="" bottom="" right="1em" classes="">
                                                                    <Icon size="2em" color="white">
                                                                        <BsFillArrowUpRightCircleFill />
                                                                    </Icon>
                                                                </Layer>
                                                                <Layer position="absolute" top="1em" left="1em" bottom="" right="" classes="">
                                                                    <Box width="" height="" radius="30px" backgroundColor="white" paddingV="0.5em" paddingH="1em" classes="">
                                                                        <Text text={`${blog.Date.toLocaleDateString()}`} fontSize="0.9em" weight="" color="" spacing="" lineHeight="" classes="" />
                                                                    </Box>
                                                                </Layer>
                                                            </Box>
                                                            <Spacer height={`1vh`} />
                                                            <Text text={`${blog.Title}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                                            <Text text={`${blog.Desc}`} fontSize="0.9em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                        </Box>
                                                    </Button>
                                                )
                                            })
                                        }
                                    </Grid>
                                </TabletScreen>
                                <LaptopScreen>
                                    <Grid orientation="column" template="1fr 1fr" gap="2em" classes="">
                                        {
                                            blogs.map((blog, i) => {
                                                return (
                                                    <Button color="" backgroundColor="" radius="" func={() => { setShowBlogPost(true); setChosenBlogPost(blog) }} classes="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Box width="" height="50vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="relative">
                                                                <Image src={blog.Image} alt="" radius="10px" classes="fill" />
                                                                <Layer position="absolute" top="1em" left="" bottom="" right="1em" classes="">
                                                                    <Icon size="2em" color="white">
                                                                        <BsFillArrowUpRightCircleFill />
                                                                    </Icon>
                                                                </Layer>
                                                                <Layer position="absolute" top="1em" left="1em" bottom="" right="" classes="">
                                                                    <Box width="" height="" radius="30px" backgroundColor="white" paddingV="0.5em" paddingH="1em" classes="">
                                                                        <Text text={`${blog.Date.toLocaleDateString()}`} fontSize="0.9em" weight="" color="" spacing="" lineHeight="" classes="" />
                                                                    </Box>
                                                                </Layer>
                                                            </Box>
                                                            <Spacer height={`1vh`} />
                                                            <Text text={`${blog.Title}`} fontSize="1.5em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                                            <Text text={`${blog.Desc}`} fontSize="1em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                        </Box>
                                                    </Button>
                                                )
                                            })
                                        }
                                    </Grid>
                                </LaptopScreen>
                                <DesktopScreen>
                                    <Grid orientation="column" template="1fr 1fr 1fr" gap="1em" classes="">
                                        {
                                            blogs.map((blog, i) => {
                                                return (
                                                    <Button color="" backgroundColor="" radius="" func={() => { setShowBlogPost(true); setChosenBlogPost(blog) }} classes="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                                            <Box width="" height="50vh" radius="" backgroundColor="" paddingV="" paddingH="" classes="relative">
                                                                <Image src={blog.Image} alt="" radius="10px" classes="fill" />
                                                                <Layer position="absolute" top="1em" left="" bottom="" right="1em" classes="">
                                                                    <Icon size="2em" color="white">
                                                                        <BsFillArrowUpRightCircleFill />
                                                                    </Icon>
                                                                </Layer>
                                                                <Layer position="absolute" top="1em" left="1em" bottom="" right="" classes="">
                                                                    <Box width="" height="" radius="30px" backgroundColor="white" paddingV="0.5em" paddingH="1em" classes="">
                                                                        <Text text={`${blog.Date.toLocaleDateString()}`} fontSize="0.9em" weight="" color="" spacing="" lineHeight="" classes="" />
                                                                    </Box>
                                                                </Layer>
                                                            </Box>
                                                            <Spacer height={`1vh`} />
                                                            <Text text={`${blog.Title}`} fontSize="1.3em" weight="600" color="" spacing="" lineHeight="" classes="" />
                                                            <Text text={`${blog.Desc}`} fontSize="0.9em" weight="300" color="" spacing="" lineHeight="" classes="" />
                                                        </Box>
                                                    </Button>
                                                )
                                            })
                                        }
                                    </Grid>
                                </DesktopScreen>
                            </ResponsiveWrapper>
                        </Box>
                    </Box> :
                    <Box width="" height="" radius="" backgroundColor="" paddingV="1em" paddingH="1em" classes="">
                        <Button color="" backgroundColor="" radius="" func={() => { setShowBlogPost(false); setChosenBlogPost({}) }} classes="">
                            <Icon size="2em" color="">
                                <BsArrowLeft />
                            </Icon>
                        </Button>
                        <ResponsiveWrapper>
                            <PhoneScreen>
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                    <Heading3 text={`${chosenBlogPost.Title}`} classes={``} />
                                    {chosenBlogPost.HTML}
                                </Box>
                            </PhoneScreen>
                            <TabletScreen>
                                <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                    <Heading3 text={`${chosenBlogPost.Title}`} classes={``} />
                                    {chosenBlogPost.HTML}
                                </Box>
                            </TabletScreen>
                            <LaptopScreen>
                            <Box width="85vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                    <Heading3 text={`${chosenBlogPost.Title}`} classes={``} />
                                    {chosenBlogPost.HTML}
                                </Box>
                            </LaptopScreen>
                            <DesktopScreen>
                            <Box width="65vw" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="center">
                                    <Heading3 text={`${chosenBlogPost.Title}`} classes={``} />
                                    {chosenBlogPost.HTML}
                                </Box>
                            </DesktopScreen>
                        </ResponsiveWrapper>
                        <Spacer height={`4vh`} />
                    </Box>
            }
            <Footer1 />
        </div>
    )
}