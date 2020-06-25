import React from 'react'
import styled from 'styled-components'
import Controls from './controls'
import Song from './Song'

const Wrapper = styled.div`
    background-color: chocolate;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export default function Mini() {
    return (
        <Wrapper>
            <Song />
            <Controls />
        </Wrapper>
    )
}
