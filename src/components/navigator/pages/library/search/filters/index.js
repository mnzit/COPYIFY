import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    width: 20%;
    border-radius: 5px;
    border: none;
    background-color: hsla(360, 100%, 100%, 0.35);
    outline: none;
    color: white;
`

export default function Filters() {
    const handleClick = (e) => {
        e.preventDefault()
    }

    return <Wrapper onClick={handleClick}>Filters</Wrapper>
}
