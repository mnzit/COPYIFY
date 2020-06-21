import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100px;
    background: red;
    :hover {
        cursor: pointer;
    }
`

export default function SizeSwitch() {
    const handleEvent = () => {
        console.log('CLICK EVENT GENERATED')
    }

    return <Wrapper onClick={handleEvent}>SWITCH</Wrapper>
}
