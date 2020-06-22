import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { inverseMobileAction } from '../../actions'
import { useDispatch } from 'react-redux'

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

export default function SizeSwitch() {
    const dispatch = useDispatch()

    const handleEvent = () => {
        dispatch(inverseMobileAction())
    }

    const props = useSpring({})

    return (
        <Wrapper style={props} onClick={handleEvent}>
            SWITCH
        </Wrapper>
    )
}
