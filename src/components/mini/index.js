import React from 'react'
import styled from 'styled-components'
import Controls from './controls'
import Song from './song'
import Seeker from './seeker'
import { queries } from '../mediaQuery'
import { useSelector, useDispatch } from 'react-redux'
import { inverse } from '../../actions'
import { useSpring, animated } from 'react-spring'

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wrapper = styled(animated.div)`
    position: absolute;
    transform: translateY(0%);
    background-color: ${({ theme }) => theme.terColor};
    width: 100%;
    display: none;
    top: 100%;
    @media all and (max-width: ${queries.large}px) {
        display: block;
        background-color: ${({ theme }) => theme.terColor};
    }
`
export default function Mini() {
    const playerDown = useSelector((state) => state.playerDown)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(inverse({ playerDown }))
    }

    const props = useSpring({
        transform: `translateY(${playerDown ? '-100%' : '0%'})`,
    })

    return (
        <Wrapper style={props} onClick={handleClick}>
            <Seeker />
            <InnerWrapper>
                <Song />
                <Controls />
            </InnerWrapper>
        </Wrapper>
    )
}
