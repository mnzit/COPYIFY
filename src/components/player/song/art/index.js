import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { queries } from '../../../mediaQuery'

const Wrapper = styled.div`
    width: 100%;

    @media all and (min-width: ${queries.large}px) {
        max-width: 80px;
        min-width: 80px;
    }
`
const Image = styled.img`
    width: 100%;
    height: auto;
    user-select: none;
`

export default function Art({ art }) {
    return (
        <Wrapper>
            <Image src={art} alt={`music art cover`} draggable={false} />
        </Wrapper>
    )
}

Art.propTypes = {
    art: PropTypes.string,
}
