import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { queries } from '../../../mediaQuery'

const Wrapper = styled.div`
    margin-top: 5px;
    color: ${(props) => props.theme.secColor};
    opacity: 0.6;
    user-select: none;
    @media all and (min-width: ${queries.large}px) {
        max-width: 200px;
    }
`

const ArtistesWrapper = styled.div`
    font-size: 16px;
    width: calc(100%);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export default function Artistes({ artistes }) {
    return (
        <Wrapper>
            <ArtistesWrapper>{artistes.join(', ')}</ArtistesWrapper>
        </Wrapper>
    )
}

Artistes.propTypes = {
    artistes: PropTypes.array,
}
