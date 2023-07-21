import React, { useEffect, useState } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveWrapper, PhoneScreen, TabletScreen, LaptopScreen, DesktopScreen, Spacer, Text, TextArea, TextField, Underline, DatePicker, TimePicker } from '../Elements'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../Components'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
// 
import { firebase_GetScheduleBlocks, firebase_GetScheduleOptions, firebase_GetScheduleSettings, firebase_GetScheduledThings } from '../../FIREBASE/firebase'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'
import { getJSDate } from '../../Global'

export default function Schedule1() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.pathname

    const [options, setOptions] = useState([])
    const [types, setTypes] = useState([])
    const [things, setThings] = useState([])
    const [screenSize, setScreenSize] = useState(0)
    const [scheduledThings, setScheduledThings] = useState([])
    const [scheduleBlocks, setScheduleBlocks] = useState([])
    const [scheduleSettings, setScheduleSettings] = useState([])
    // 
    const [showThings, setShowThings] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [showBlocks, setShowBlocks] = useState([])

    const heading1 = "Categories"
    const heading2 = "Services"
    const heading3 = "Pick a date"
    const buttonText = "Get Schedule"

    const selectType = (selectedType) => {
        setShowThings(false)
        setShowDatePicker(false)
        setShowButton(false)
        const filteredArray = options.filter(item => item.Type === selectedType)
        setThings(filteredArray)
        setShowThings(true)
        console.log(filteredArray)
    }

    const selectDate = () => {
        const date = document.querySelector("#dpDate").value
        // GET RESERVED TIMES
        firebase_GetScheduledThings(setScheduledThings)
        // GET SCHEDULE BLOCKS AS WELL
        firebase_GetScheduleBlocks(setScheduleBlocks)
        //  GET SCHEDULE SETTINGS
        firebase_GetScheduleSettings(setScheduleSettings)
        setShowButton(true)
    }

    const getBlocks = () => {
        var blocks = []

        // SETTINGS
        for (let index = 0; index < scheduleSettings.length; index++) {
            const thing = scheduleSettings[index]
            const newThing = {
                Start: getJSDate(new Date(), thing.StartTime),
                End: getJSDate(new Date(), thing.EndTime)
            }
            console.log(newThing)
        }
        // BLOCKS
        for (let index = 0; index < scheduleBlocks.length; index++) {
            const thing = scheduleBlocks[index]
            const newThing = {
                Start: getJSDate(new Date(), thing.StartTime),
                End: getJSDate(new Date(), thing.EndTime)
            }
            console.log(newThing)
        }
        // THINGS
        for (let index = 0; index < scheduledThings.length; index++) {
            const thing = scheduledThings[index]
            const newThing = {
                Start: getJSDate(thing.Date, thing.StartTime),
                End: getJSDate(thing.Date, thing.EndTime)
            }
            console.log(newThing)
        }

    }

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        setScreenSize(screenWidth)
    };

    useEffect(() => {
        // closeNav()
        firebase_GetScheduleOptions(setOptions, setTypes)

        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div className='roboto'>
            <Navigation1 />
            <Box width="90vw" height="" radius="" backgroundColor="" paddingV="4vh" paddingH="0" classes="center">
                <Heading3 text={`Schedule`} classes={``} />
                <Spacer height={`4vh`} />
                {
                    screenSize < 600 ?
                        <Grid orientation="column" template="1fr" gap="1em" classes="">
                            <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                <Heading5 text={`${heading1}`} classes={``} />
                                <Spacer height={`2vh`} />
                                <Grid orientation="column" template="1fr" gap="0.5em" classes="">
                                    {
                                        types.map((thing, i) => {
                                            return (
                                                <Border size="1px" color="" radius="">
                                                    <Button color="" backgroundColor="" radius="" func={() => { selectType(thing) }} classes="">
                                                        <Box width="" height="" radius="" backgroundColor="" paddingV="0.5em" paddingH="" classes="">
                                                            <Text text={`${thing}`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="text-center" />
                                                        </Box>
                                                    </Button>
                                                </Border>
                                            )
                                        })
                                    }
                                </Grid>

                                {
                                    showThings ?
                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                            <Spacer height={`4vh`} />
                                            <Heading5 text={`${heading2}`} classes={``} />
                                            <Spacer height={`2vh`} />
                                            <Grid orientation="column" template="1fr" gap="0.5em" classes="">
                                                {
                                                    things.map((thing, i) => {
                                                        return (
                                                            <Border size="1px" color="" radius="">
                                                                <Button color="" backgroundColor="" radius="" func={() => { setShowDatePicker(true) }} classes="">
                                                                    <Box width="" height="" radius="" backgroundColor="" paddingV="0.5em" paddingH="" classes="">
                                                                        <Text text={`${thing.Thing}`} fontSize="" weight="" color="" spacing="" lineHeight="" classes="text-center" />
                                                                    </Box>
                                                                </Button>
                                                            </Border>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Box> : <div></div>
                                }

                                {
                                    showDatePicker ?
                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                            <Spacer height={`4vh`} />
                                            <Heading5 text={`${heading3}`} classes={``} />
                                            <Spacer height={`2vh`} />
                                            <Border size="1px" color="" radius="">
                                                <DatePicker id={`dpDate`} fontSize={`1em`} padding={`0.8em`} classes="roboto" func={() => { selectDate() }} />
                                            </Border>

                                        </Box> : <div></div>
                                }
                                {
                                    showButton ?
                                        <Box width="" height="" radius="" backgroundColor="" paddingV="" paddingH="" classes="">
                                            <Spacer height={`4vh`} />
                                            <Button color="" backgroundColor="" radius="" func={() => { getBlocks() }} classes="dark">
                                                <Box width="100%" height="" radius="" backgroundColor="" paddingV="0.8em" paddingH="" classes="">
                                                    <Text text={`${buttonText}`} fontSize="1em" weight="" color="" spacing="" lineHeight="" classes="text-center" />
                                                </Box>
                                            </Button>
                                        </Box> : <div></div>
                                }
                            </Box>
                        </Grid> : <div></div>
                }
            </Box>
            <Footer1 />
        </div >
    )
}