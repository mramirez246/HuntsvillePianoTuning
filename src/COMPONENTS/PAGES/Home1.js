import React from 'react'
import { Box, Checkbox, DropDown, Grid, Image, ResponsiveElements, Text, TextField } from '../Elements'

import img1 from '../../PHOTOS/logo.jpg'

export default function Home1() {
    return (
        <div className='roboto container'>
            {
                Box(
                    Grid([
                        Text("Here", "20px", 800, ""),
                        Text("Here", "20px", 800, ""),
                        Text("Here", "20px", 800, ""),
                        Text("Here", "20px", 800, "")
                    ], "column" , 3), "400px", "", "1em", "1em"
                )
            }
        </div>
    )
}
