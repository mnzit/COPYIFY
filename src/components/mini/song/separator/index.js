import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    color: white;
    align-self: center;
    margin: 0 4px;
`

export default function Separator() {
    return <Wrapper>{'•'}</Wrapper>
}
