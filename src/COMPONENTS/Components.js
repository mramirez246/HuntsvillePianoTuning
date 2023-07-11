import { DesktopScreen, LaptopScreen, PhoneScreen, ResponsiveWrapper, TabletScreen, Text } from "./Elements"

// HEADINGS
export const Heading1 = ({ text }) => {
    return (
        <ResponsiveWrapper>
            <PhoneScreen>
                <Text text={`${text}`} fontSize="7vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="" />
            </PhoneScreen>
            <TabletScreen>
                <Text text={`${text}`} fontSize="8vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="" />
            </TabletScreen>
            <LaptopScreen>
                <Text text={`${text}`} fontSize="9vh" weight="500" color="" spacing="-3px" lineHeight="1em" classes="" />
            </LaptopScreen>
            <DesktopScreen>
                <Text text={`${text}`} fontSize="10vh" weight="500" color="" spacing="-3px" lineHeight="1em" classes="" />
            </DesktopScreen>
        </ResponsiveWrapper>
    )
}
export const Heading2 = ({ text }) => {
    return (
        <ResponsiveWrapper>
            <PhoneScreen>
                <Text text={`${text}`} fontSize="6vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="" />
            </PhoneScreen>
            <TabletScreen>
                <Text text={`${text}`} fontSize="7vh" weight="500" color="" spacing="-3px" lineHeight="1em" classes="" />
            </TabletScreen>
            <LaptopScreen>
                <Text text={`${text}`} fontSize="8vh" weight="500" color="" spacing="-3px" lineHeight="1em" classes="" />
            </LaptopScreen>
            <DesktopScreen>
                <Text text={`${text}`} fontSize="9vh" weight="500" color="" spacing="-3px" lineHeight="1em" classes="" />
            </DesktopScreen>
        </ResponsiveWrapper>
    )
}
export const Heading3 = ({ text }) => {
    return (
        <ResponsiveWrapper>
            <PhoneScreen>
                <Text text={`${text}`} fontSize="5vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="" />
            </PhoneScreen>
            <TabletScreen>
                <Text text={`${text}`} fontSize="6vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="" />
            </TabletScreen>
            <LaptopScreen>
                <Text text={`${text}`} fontSize="7vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="" />
            </LaptopScreen>
            <DesktopScreen>
                <Text text={`${text}`} fontSize="8vh" weight="500" color="" spacing="-3px" lineHeight="1em" classes="" />
            </DesktopScreen>
        </ResponsiveWrapper>
    )
}
export const Heading4 = ({ text }) => {
    return (
        <ResponsiveWrapper>
            <PhoneScreen>
                <Text text={`${text}`} fontSize="4vh" weight="500" color="" spacing="-1px" lineHeight="1em" classes="" />
            </PhoneScreen>
            <TabletScreen>
                <Text text={`${text}`} fontSize="5vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="" />
            </TabletScreen>
            <LaptopScreen>
                <Text text={`${text}`} fontSize="6vh" weight="500" color="" spacing="-1px" lineHeight="1em" classes="" />
            </LaptopScreen>
            <DesktopScreen>
                <Text text={`${text}`} fontSize="7vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="" />
            </DesktopScreen>
        </ResponsiveWrapper>
    )
}
export const Heading5 = ({ text }) => {
    return (
        <ResponsiveWrapper>
            <PhoneScreen>
                <Text text={`${text}`} fontSize="3vh" weight="500" color="" spacing="" lineHeight="1em" classes="all-caps" />
            </PhoneScreen>
            <TabletScreen>
                <Text text={`${text}`} fontSize="4vh" weight="500" color="" spacing="-1px" lineHeight="1em" classes="all-caps" />
            </TabletScreen>
            <LaptopScreen>
                <Text text={`${text}`} fontSize="5vh" weight="500" color="" spacing="-1px" lineHeight="1em" classes="all-caps" />
            </LaptopScreen>
            <DesktopScreen>
                <Text text={`${text}`} fontSize="6vh" weight="500" color="" spacing="-2px" lineHeight="1em" classes="all-caps" />
            </DesktopScreen>
        </ResponsiveWrapper>
    )
}
export const Heading6 = ({ text }) => {
    return (
        <ResponsiveWrapper>
            <PhoneScreen>
                <Text text={`${text}`} fontSize="2vh" weight="500" color="" spacing="" lineHeight="1em" classes="" />
            </PhoneScreen>
            <TabletScreen>
                <Text text={`${text}`} fontSize="3vh" weight="500" color="" spacing="" lineHeight="1em" classes="" />
            </TabletScreen>
            <LaptopScreen>
                <Text text={`${text}`} fontSize="4vh" weight="500" color="" spacing="-1px" lineHeight="1em" classes="" />
            </LaptopScreen>
            <DesktopScreen>
                <Text text={`${text}`} fontSize="5vh" weight="500" color="" spacing="-1px" lineHeight="1em" classes="" />
            </DesktopScreen>
        </ResponsiveWrapper>
    )
}

export const Map = ({ search }) => {
    return (
        <iframe style={{ height: "100%", width: "100%" }} id="gmap_canvas" src={`https://maps.google.com/maps?q=${search.replaceAll(" ","%20")}&t=&z=15&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
    </iframe>
    )
}