import React from 'react'
import styled from 'styled-components'
import { SharedStyle } from '../styles'
import PropTypes from 'prop-types'

const Wrapper = styled(SharedStyle)``

export default function Name({ name }) {
    return <Wrapper>{name}</Wrapper>
}

Name.propTypes = {
    name: PropTypes.string,
}
