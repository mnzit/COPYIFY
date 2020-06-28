import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SharedStyle } from '../styles'

const Wrapper = styled(SharedStyle)`
    opacity: 0.6;
    width: calc(100%);
`

export default function Artistes({ artistes }) {
    return <Wrapper>{artistes.join(', ')}</Wrapper>
}

Artistes.propTypes = {
    artistes: PropTypes.array,
}
