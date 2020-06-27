import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div``

export default function Album({ album }) {
    return <Wrapper>{album}</Wrapper>
}

Album.propTypes = {
    album: PropTypes.string,
}
