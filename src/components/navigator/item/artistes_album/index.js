import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    width: calc(100%);
    overflow: hidden;
    text-overflow: ellipsis;
`

export default function ArtistesAlbum({ artistes, album }) {
    return <Wrapper>{`${artistes.join(', ')} ${album}`}</Wrapper>
}

ArtistesAlbum.propTypes = {
    artistes: PropTypes.array,
    album: PropTypes.string,
}
