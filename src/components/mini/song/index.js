import React from 'react'
import styled from 'styled-components'
import Artistes from '../../player/song/artistes'
import Art from '../../player/song/art'
import Name from '../../player/song/name'

import data from '../../../data'

const Info = styled.div`
    display: flex;
`
const ArtWrapper = styled.div`
    margin-right: 20px;
`

const SongMeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Separator = styled.span`
    margin: auto 5px;
    color: white;
`

const Basic = styled.div`
    display: flex;
`

export default function Song() {
    const song = data[7]

    return (
        <Info>
            <ArtWrapper>
                <Art art={song.cover} />
            </ArtWrapper>

            <SongMeta>
                <Basic>
                    <Name name={song.title} size={16} />
                    <Separator>•</Separator>
                    <Artistes artistes={song.artistes} size={16} />
                </Basic>
            </SongMeta>
        </Info>
    )
}
