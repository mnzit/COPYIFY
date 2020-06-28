import React from 'react'
import styled from 'styled-components'
import Art from './art'
import Name from './name'
import Artistes from './artistes'
import Like from './like'
import data from '../../../data'
import { queries } from '../../mediaQuery'
import { useDispatch } from 'react-redux'
import { set } from '../../../actions'
import COLORTHIEF from 'color-thief'

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
    max-width: ${({ theme }) => theme.maxWidth};
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
    const dispatch = useDispatch()

    function getColorFromImage(imageRef) {
        return () => {
            const thief = new COLORTHIEF()

            const colorValues = thief.getColor(imageRef.current)

            const colorHex = `#${colorValues
                .map((x) => {
                    let hex = x.toString(16)
                    return hex.length === 1 ? '0' + hex : hex
                })
                .join('')}`

            dispatch(set({ playerColor: colorHex }))
        }
    }

    return (
        <Container>
            <Art
                art={firstSong.cover}
                getColor={getColorFromImage}
                marginBottom
            />
            <Wrapper>
                <BasicInfo>
                    <Name name={firstSong.title} size={20} />
                    <Artistes artistes={firstSong.artistes} />
                </BasicInfo>
                <Like />
            </Wrapper>
        </Container>
    )
}
