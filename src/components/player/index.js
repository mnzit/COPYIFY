import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Controls from './controls'
import data from '../../data'
import Song from './song'
import Seeker from './seeker'
import { queries } from '../mediaQuery'
import { useSelector } from 'react-redux'
import { useSpring, animated } from 'react-spring'

const PlayerWrapper = styled(animated.div)`
    justify-content: center;
    background-color: ${(props) => props.playercolor};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 25px;
    width: 100%;
    height: 100%;
    display: grid;

    grid-template-columns: repeat(10, 10%);
    grid-template-rows: repeat(10, 10%);

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
    const playerDown = useSelector((state) => state.playerDown)
    //const currentlyPlaying = useSelector((state) => state.currentlyPlaying)
    const currentlyPlaying = data[1]
    const props = useSpring({
        /*transform: `translateY(${playerDown ? '90%' : '0%'})`,
        opacity: playerDown ? 0 : 1,*/
    })

    return Object.keys(currentlyPlaying).length ? (
        <PlayerWrapper playercolor={playerColor} style={props}>
            <Header />
            <Song song={currentlyPlaying} />
            <Seeker />
            <Controls />
        </PlayerWrapper>
    ) : (
        ''
    )
}
