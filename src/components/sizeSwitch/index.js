import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled(animated.div)`
    width: 100px;
    background: red;
    position: absolute;
    right: 0;
    z-index: 10;
    :hover {
        cursor: pointer;
    }
`

export default function SizeSwitch({ inverseMobile }) {
    const handleEvent = () => {
        inverseMobile()
    }

    const props = useSpring({})

    return (
        <Wrapper style={props} onClick={handleEvent}>
            SWITCH
        </Wrapper>
    )
}

SizeSwitch.propTypes = {
    inverseMobile: PropTypes.func.isRequired,
}
