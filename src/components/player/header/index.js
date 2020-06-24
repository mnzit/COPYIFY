import React from 'react'
import styled from 'styled-components'
import Menu from './menu'
import Minimizer from './minimizer'
import { queries } from '../../mediaQuery'

const Wrapper = styled.div`
    width: 100%;
    grid-area: HEADER;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
    @media all and (min-width: ${queries.large}px) {
        display: none;
    }
`

export default function Header() {
    return (
        <Wrapper>
            <Minimizer />
            <Menu />
        </Wrapper>
    )
}
