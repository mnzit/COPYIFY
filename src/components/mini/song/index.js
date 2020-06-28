import React from 'react'
import styled from 'styled-components'
import Art from '../../player/song/art'
import Artistes from './artistes'
import Name from './name'

import data from '../../../data'

const Info = styled.div`
    display: flex;
    align-items: center;
    max-width: 70%;
`
const ArtWrapper = styled.div`
    margin-right: 20px;
    max-width: calc(15%);
`

const Meta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export default function Song() {
    const song = data[7]

    return (
        <Info>
            <ArtWrapper>
                <Art art={song.cover} />
            </ArtWrapper>
            <Meta>
                <Name name={song.title} />

                <Artistes artistes={[...song.artistes, 'SOME OTHER DUDE']} />
            </Meta>
        </Info>
    )
}
