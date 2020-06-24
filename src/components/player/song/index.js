import React from 'react'
import styled from 'styled-components'
import Art from './art'
import Name from './name'
import Artistes from './artistes'
import Like from './like'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export default function Song() {
    return (
        <Wrapper>
            <Like />
            <Artistes />
            <Name />
            <Art />
        </Wrapper>
    )
}
