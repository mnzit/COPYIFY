import React from 'react'
import styled from 'styled-components'
import Controls from './controls'
import Song from './song'
import Seeker from './seeker'

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.terColor};
    width: 100%;
`
export default function Mini() {
    return (
        <Wrapper>
            <Seeker />
            <InnerWrapper>
                <Song />
                <Controls />
            </InnerWrapper>
        </Wrapper>
    )
}
