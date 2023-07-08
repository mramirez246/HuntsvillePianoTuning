import React, { useEffect } from 'react'
import { Accordion, Border, Box, Button, Checkbox, DropDown, Grid, Icon, Image, Layer, RadioButtons, ResponsiveElements, Text, TextArea, TextField, Underline } from '../Elements'
import { FiMenu } from 'react-icons/fi'
import { c_businessName, c_routes } from '../../Constants'
import { useLocation, useNavigate } from 'react-router'
import img1 from '../../PHOTOS/stock1.jpg'
import Navigation1 from './UTILITIES/Navigation1'
import Footer1 from './UTILITIES/Footer1'


export default function Component() {
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

  useEffect(() => {
    closeNav()
  }, [])

  return (
    <div className='roboto'>
      <Navigation1 />
      <ResponsiveElements phone={
        <div className='padding'>
          <Text text="About Me" fontSize="8vh" weight="400" color="" spacing="-2px" lineHeight="" classes="text-center" />
          <Box comp={
            <Image src={img1} alt="" radius="" classes="" />
          } width="" height="40vh" radius="" paddingV="1em" paddingH="0" classes="fit" />
          {/* Heading */}
          <Box comp={
            <div>
              <Text text="My Story" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
            </div>
          } width="" height="" radius="" paddingV="" paddingH="1em" classes="" />
        </div>
      } smalltablet={
        <div className='padding'>
          <Text text="About Me" fontSize="6vh" weight="400" color="" spacing="-2px" lineHeight="" classes="text-center" />
          <Box comp={
            <Image src={img1} alt="" radius="" classes="" />
          } width="" height="60vh" radius="" paddingV="1em" paddingH="0" classes="fit" />
          {/* Heading */}
          <Box comp={
            <div>
              <Text text="My Story" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
              <Box comp={
                <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
              } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
            </div>
          } width="" height="" radius="" paddingV="" paddingH="1em" classes="" />
        </div>
      } tablet={
        <div className='padding'>
          <Text text="About Me" fontSize="7vh" weight="400" color="" spacing="-2px" lineHeight="" classes="text-center" />
          <Box comp={
            <Image src={img1} alt="" radius="" classes="" />
          } width="" height="70vh" radius="" paddingV="1em" paddingH="0" classes="fit" />
          {/* Heading */}

          <Box comp={
            <div>
              <div className='horizontal gap padding-v'>
                <Text text="My Story" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="no-wrap" />
                <Box comp={
                  <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                } width="" height="" radius="" paddingV="0" paddingH="0" classes="" />
              </div>

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <div className='horizontal'>
                <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
                <div>
                  <Box comp={
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                  } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                  <Box comp={
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                  } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                </div>
              </div>

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <div className='horizontal'>
                <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
                <div>
                  <Box comp={
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                  } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                  <Box comp={
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                  } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                </div>
              </div>

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <div className='horizontal'>
                <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="" />
                <div>
                  <Box comp={
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                  } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                  <Box comp={
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                  } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                </div>
              </div>
            </div>
          } width="" height="" radius="" paddingV="" paddingH="1em" classes="" />
        </div>
      } smalllaptop={
        <div className='padding'>
          <Text text="About Me" fontSize="10vh" weight="400" color="" spacing="-2px" lineHeight="" classes="text-center" />
          <Box comp={
            <Image src={img1} alt="" radius="" classes="" />
          } width="" height="80vh" radius="" paddingV="1em" paddingH="0" classes="fit" />
          {/* Heading */}

          <Box comp={
            <div>
              <div className='horizontal gap padding-v'>
                <Text text="My Story" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="no-wrap" />
                <Box comp={
                  <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                } width="" height="" radius="" paddingV="0" paddingH="0" classes="" />
              </div>

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Grid comps={[
                <div>

                  <div className='vertical gap'>
                    <Box comp={
                      <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="no-wrap" />
                    } width="" height="" radius="" paddingV="0" paddingH="0" classes="" />
                    <div>
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                    </div>
                  </div>
                </div>,
                <div>

                  <div className='vertical gap'>
                    <Box comp={
                      <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="no-wrap" />
                    } width="" height="" radius="" paddingV="0" paddingH="1em" classes="" />
                    <div>
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                    </div>
                  </div>
                </div>

              ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />

            </div>
          } width="" height="" radius="" paddingV="" paddingH="1em" classes="" />

        </div>
      } desktop={
        <div className='padding'>
          <Text text="About Me" fontSize="10vh" weight="400" color="" spacing="-2px" lineHeight="" classes="text-center" />
          <Box comp={
            <Image src={img1} alt="" radius="" classes="" />
          } width="" height="80vh" radius="" paddingV="1em" paddingH="0" classes="fit" />
          {/* Heading */}

          <Box comp={
            <div>
              <div className='horizontal gap padding-v'>
                <Text text="My Story" fontSize="2em" weight="300" color="" spacing="" lineHeight="" classes="no-wrap" />
                <Box comp={
                  <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod." fontSize="1.2em" weight="300" color="" spacing="" lineHeight="" classes="" />
                } width="" height="" radius="" paddingV="0" paddingH="0" classes="" />
              </div>

              <Box comp={
                <hr />
              } width="" height="" radius="" paddingV="1em" paddingH="0" classes="" />

              <Grid comps={[
                <Box comp={
                  <div className='vertical gap'>
                    <Box comp={
                      <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="no-wrap" />
                    } width="" height="" radius="" paddingV="0" paddingH="0" classes="" />
                    <div>
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                    </div>
                  </div>
                } width="" height="" radius="" paddingV="0" paddingH="2vw" classes="" />,
                <Box comp={
                  <div className='vertical gap'>
                    <Box comp={
                      <Text text="Everything is bagel" fontSize="1.3em" weight="300" color="" spacing="" lineHeight="" classes="no-wrap" />
                    } width="" height="" radius="" paddingV="0" paddingH="0" classes="" />
                    <div>
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="0" classes="" />
                      <Box comp={
                        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. " fontSize="" weight="300" color="" spacing="" lineHeight="" classes="" />
                      } width="" height="" radius="" paddingV="0.5em" paddingH="" classes="" />
                    </div>
                  </div>
                } width="" height="" radius="" paddingV="0" paddingH="2vw" classes="" />

              ]} orientation="column" template="1fr 1fr" gap="1em" classes="" />

            </div>
          } width="" height="" radius="" paddingV="" paddingH="1em" classes="" />

        </div>
      } />
      <Footer1 />
    </div>
  )
}