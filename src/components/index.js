import styled from 'styled-components'
/*import Player from './player'
import Mini from './mini'*/
import Navigator from './navigator'

import { GlobalStyles } from '../styles/globalStyles'
import React from 'react'

const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.priColor};
    position: relative;
`

function App() {
    return (
        <>
            <GlobalStyles />

            <AppWrapper>
                <Navigator />
            </AppWrapper>
        </>
    )
}

export default App
