import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.img`
    max-width: 50px;
    margin-right: 5%;
`

export default function Art({ art }) {
    return <Image src={art} />
}

Art.propTypes = {
    art: PropTypes.string,
}
