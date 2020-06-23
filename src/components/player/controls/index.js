import React from 'react'
import styled from 'styled-components'
import Play from './play'
import Next from './next'
import Previous from './previous'
import Repeat from './repeat'
import Shuffle from './shuffle'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Controls() {
    return (
        <Wrapper>
            <Shuffle />
            <Previous />
            <Play playing={true} />
            <Next />
            <Repeat />
        </Wrapper>
    )
}
