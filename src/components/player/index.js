import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Controls from './controls'
import Song from './song'
import Seeker from './seeker'
import { queries } from '../mediaQuery'
import { useSelector } from 'react-redux'

const PlayerWrapper = styled.div`
    background-color: ${(props) => props.playerColor};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 25px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-areas:
        'HEADER HEADER HEADER'
        '... ... ...'
        'SONG SONG SONG'
        'SEEKER SEEKER SEEKER'
        'CONTROLS CONTROLS CONTROLS';

    @media all and (min-width: ${queries.large}px) {
        max-height: 140px;
        max-width: calc(100%);
        background-color: ${(props) => props.theme.terColor};
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(10, 1fr);
    }
`

export default function Player() {
    const playerColor = useSelector((state) => state.playerColor)

    return (
        <PlayerWrapper playerColor={playerColor}>
            <Header />
            <Song />
            <Seeker />
            <Controls />
        </PlayerWrapper>
    )
}
