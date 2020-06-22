import styled from 'styled-components'
import Player from './player'
import Navigator from './navigator'
import SizeSwitch from './sizeSwitch'
import { animated, useSpring } from 'react-spring'
import { GlobalStyles } from '../globalStyles'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMobileSize } from '../actions'

const AppWrapper = styled(animated.div)`
    width: 100vw;
    background-color: green;
    position: relative;
`

function App() {
    const mobileSize = useSelector((state) => state.size)
    const mobile = useSelector((state) => state.mobile)
    const dispatch = useDispatch()

    console.log(mobile)
    console.log(mobileSize)

    if (window.innerWidth < mobileSize) {
        dispatch(setMobileSize(window.innerWidth))
    }

    const props = useSpring({
        width: mobile ? `${(mobileSize / window.innerWidth) * 100}vw` : `100vw`,
    })

    return (
        <>
            <GlobalStyles />
            {/*window.innerWidth <= mobileSize ? '' : <SizeSwitch />*/}
            <SizeSwitch />
            <AppWrapper style={props}>
                <Navigator />
                <Player />
            </AppWrapper>
        </>
    )
}

export default App
