import React from 'react'
import styled from 'styled-components'
//import NavBar from './navBar'
import RouteHandler from './routeHandler'
import { BrowserRouter as Router } from 'react-router-dom'

const NavigatorWrapper = styled.div``

export default function Navigator() {
    return (
        <Router>
            <NavigatorWrapper>
                {/*<NavBar />*/}
                <RouteHandler />
            </NavigatorWrapper>
        </Router>
    )
}
