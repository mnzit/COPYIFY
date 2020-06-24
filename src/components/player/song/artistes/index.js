import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    font-size: 16px;
    margin-top: 5px;
    color: ${(props) => props.theme.secColor};
    opacity: 0.6;
    user-select: none;
`

export default function Artistes({ artistes }) {
    return <Wrapper>{artistes.join(', ')}</Wrapper>
}

Artistes.propTypes = {
    artistes: PropTypes.array,
}
