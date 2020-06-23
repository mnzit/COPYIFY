import styled from 'styled-components'
import Player from './player'
import Navigator from './navigator'
import SizeSwitch from './sizeSwitch'
import { animated, useSpring } from 'react-spring'
import { GlobalStyles } from '../styles/globalStyles'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setWidth, setHeight } from '../actions'

const AppWrapper = styled(animated.div)`
    width: 100vw;
    background-color: ${(props) => props.theme.priColor};
    position: relative;
`

function App() {
    const mobileWidth = useSelector((state) => state.mobileWidth)
    const mobileHeight = useSelector((state) => state.mobileHeight)
    const isMobile = useSelector((state) => state.mobile)
    const dispatch = useDispatch()

    const convertToPercent = (numerator, denominator) => {
        return (numerator / denominator) * 100
    }

    if (window.innerWidth < mobileWidth) {
        dispatch(setWidth(window.innerWidth))
    }
    if (window.innerHeight < mobileHeight) {
        dispatch(setHeight(window.innerHeight))
    }

    const props = useSpring({
        width: isMobile
            ? `${convertToPercent(mobileWidth, window.innerWidth)}vw`
            : `100vw`,
        height: isMobile
            ? `${convertToPercent(mobileHeight, window.innerHeight)}vh`
            : `100vh`,
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
