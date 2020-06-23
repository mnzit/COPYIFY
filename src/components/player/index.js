import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Controls from './controls'

const PlayerWrapper = styled.div`
    background-color: purple;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    box-sizing: border-box;
    padding: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default function Player() {
    return (
        <PlayerWrapper>
            <Header />
            <Controls />
        </PlayerWrapper>
    )
}
