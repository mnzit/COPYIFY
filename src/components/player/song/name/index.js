import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { queries } from '../../../mediaQuery'

const Wrapper = styled.div`
    user-select: none;
    color: ${(props) => props.theme.secColor};
    @media all and (min-width: ${queries.large}px) {
        max-width: 200px;
    }
`

const NameWrapper = styled.div`
    font-size: ${(props) => props.size}px;
    width: calc(100%);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export default function Name({ name, size }) {
    return (
        <Wrapper>
            <NameWrapper size={size ? size : 20}>{name}</NameWrapper>
        </Wrapper>
    )
}

Name.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
}
