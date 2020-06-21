import React from 'react'
import styled from 'styled-components'
import Player from './components/player/index'
import Navigator from './components/navigator/index'
import SizeSwitch from './components/sizeSwitch/index'
import { animated } from 'react-spring'

const AppWrapper = styled(animated.div)`
    width: 100vw;
    background-color: purple;
`

function App() {
    return (
        <>
            <SizeSwitch />
            <AppWrapper>
                <Navigator />
                <Player />
            </AppWrapper>
        </>
    )
}

export default App
