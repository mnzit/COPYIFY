import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { queries } from '../../../mediaQuery'

const Wrapper = styled.div`
    margin-top: ${(props) => props.marginTop}px;
    color: ${(props) => props.theme.secColor};
    opacity: 0.6;
    user-select: none;
    @media all and (min-width: ${queries.large}px) {
        max-width: 90%;
    }
`

const ArtistesWrapper = styled.div`
    font-size: ${(props) => props.size}px;
    width: calc(100%);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export default function Artistes({ artistes, size }) {
    return (
        <Wrapper>
            <ArtistesWrapper size={size ? size : 16}>
                {artistes.join(', ')}
            </ArtistesWrapper>
        </Wrapper>
    )
}

Artistes.propTypes = {
    artistes: PropTypes.array,
    size: PropTypes.number,
}
