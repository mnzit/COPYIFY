import React from 'react'
import styled from 'styled-components'
import Menu from './menu'
import Minimizer from './minimizer'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Header() {
    return (
        <Wrapper>
            <Minimizer />
            <Menu />
        </Wrapper>
    )
}
