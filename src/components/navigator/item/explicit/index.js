import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../svgs/explicit.svg'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    max-width: 12px;
    display: flex;
    align-items: center;
    opacity: 0.85;
`

const IconWrapper = styled(Icon)`
    width: 100%;
`

export default function Explicit({ explicit }) {
    return explicit ? (
        <Wrapper>
            <IconWrapper />
        </Wrapper>
    ) : (
        ''
    )
}

Explicit.propTypes = {
    explicit: PropTypes.bool,
}
