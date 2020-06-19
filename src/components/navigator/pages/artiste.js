import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Wrapper = styled.div``

export default function Artiste() {
    const { id = '123' } = useParams()
    return (
        <Wrapper>
            <h2>{`Artiste ID: ${id}`}</h2>
        </Wrapper>
    )
}
