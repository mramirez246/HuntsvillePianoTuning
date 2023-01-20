import React, { useEffect } from 'react'
// 
import '../STYLESHEETS/MailingList.css'
// 

export default function MailingList() {

    useEffect(() => {
    }, [])
    return (
        <div className='main'>
            {/* BODY */}
            <div className="mailinglist bg1 color2 font1">
                <h1>Stay updated with the latest news coming from this business. Never miss a beat.</h1>
                <div className='mailinglist-block'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. </p>
                    <div className='mailinglist-btns'>
                        <button className="mailinglist-btn no-border bg2 color1">Join List</button>
                        <button className="mailinglist-btn border1 no-bg color2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
