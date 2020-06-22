import styled from 'styled-components'
import Player from './player'
import Navigator from './navigator'
import SizeSwitch from './sizeSwitch'
import { animated, useSpring } from 'react-spring'
import { GlobalStyles } from '../globalStyles'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMobileSize } from '../actions'

const AppWrapper = styled(animated.div)`
    width: 100vw;
    background-color: green;
    position: relative;
`

function App() {
    const mobileSize = useSelector((state) => state.mobileSize)
    const mobile = useSelector((state) => state.mobile)
    const dispatch = useDispatch()

    if (window.innerWidth < mobileSize) {
        dispatch(setMobileSize(window.innerWidth))
    }

    const props = useSpring({
        width: mobile ? `${(mobileSize / window.innerWidth) * 100}vw` : `100vw`,
    })

    useEffect(() => {
        console.log(`mobile width: ${mobileSize}`)
        console.log(`window width: ${window.innerWidth}`)
    }, [mobileSize])

    return (
        <>
            <GlobalStyles />
            <SizeSwitch />
            <AppWrapper style={props}>
                <Navigator />
                <Player />
            </AppWrapper>
        </>
    )
}

export default App
