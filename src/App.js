import styled from 'styled-components'
import Player from './components/player/index'
import Navigator from './components/navigator/index'
import SizeSwitch from './components/sizeSwitch/index'
import { animated, useSpring } from 'react-spring'
import { GlobalStyles } from './globalStyles'
import React, { useState, useEffect } from 'react'

const AppWrapper = styled(animated.div)`
    width: 100vw;
    background-color: green;
`

function App() {
    const [mobile, setMobile] = useState(false)
    const [mobileSize, setMobileSize] = useState(411)

    if (window.innerWidth < mobileSize) {
        setMobileSize(window.innerWidth)
    }

    const props = useSpring({
        width: mobile ? `${(mobileSize / window.innerWidth) * 100}vw` : `100vw`,
    })

    const inverseMobile = () => {
        setMobile(!mobile)
    }

    useEffect(() => {
        console.log(`mobile width: ${mobileSize}`)
        console.log(`window width: ${window.innerWidth}`)
    }, [mobileSize])

    return (
        <>
            <GlobalStyles />
            <SizeSwitch inverseMobile={inverseMobile} />
            <AppWrapper style={props}>
                <Navigator />
                <Player />
            </AppWrapper>
        </>
    )
}

export default App
