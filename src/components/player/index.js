import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Controls from './controls'
import Song from './song'
import { queries } from '../mediaQuery'

const PlayerWrapper = styled.div`
    background-color: purple;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    box-sizing: border-box;
    padding: 25px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
        'HEADER HEADER HEADER'
        '... ... ...'
        'SONG SONG SONG'
        'CONTROLS CONTROLS CONTROLS';

    @media all and (min-width: ${queries.large}px) {
        max-height: 250px;
        max-width: calc(100%);
        background-color: blue;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(10, 1fr);
    }
`

export default function Player() {
    return (
        <PlayerWrapper>
            <Header />
            <Song />
            <Controls />
        </PlayerWrapper>
    )
}
