import React from 'react'
import styled from 'styled-components'
import Art from './art'
import Artistes from './artistes'
import Name from './name'
import PropTypes from 'prop-types'

const Info = styled.div`
    display: flex;
    align-items: center;
    max-width: 70%;
`

const Meta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export default function Song({ song }) {
    return (
        <Info>
            <Art art={song.cover} />

            <Meta>
                <Name name={song.title} />

                <Artistes artistes={song.artistes} />
            </Meta>
        </Info>
    )
}

Song.propTypes = {
    song: PropTypes.object,
}
