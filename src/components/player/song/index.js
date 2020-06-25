import React from 'react'
import styled from 'styled-components'
import Art from './art'
import Name from './name'
import Artistes from './artistes'
import Like from './like'
import data from '../../../data'
import { queries } from '../../mediaQuery'

const Wrapper = styled.div`
    @media all and (min-width: ${queries.large}px) {
        justify-content: space-around;
    }

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    @media all and (min-width: ${queries.large}px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        grid-column: 1/3;
        grid-row: 2/3;
    }
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    grid-area: SONG;
`

const BasicInfo = styled.div`
    @media all and (min-width: ${queries.large}px) {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
    }
`

export default function Song() {
    const firstSong = data[7]

    return (
        <Container>
            <Art art={firstSong.cover} />
            <Wrapper>
                <BasicInfo>
                    <Name name={firstSong.title} />
                    <Artistes artistes={firstSong.artistes} />
                </BasicInfo>
                <Like />
            </Wrapper>
        </Container>
    )
}
