import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Wrapper = styled.div``

export default function Playlist() {
    const { id = '123' } = useParams()
    return (
        <Wrapper>
            <h2>{`Playlist ID: ${id}`}</h2>
        </Wrapper>
    )
}
