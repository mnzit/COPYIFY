import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    width: 100px;
    background: red;
    :hover {
        cursor: pointer;
    }
`

export default function SizeSwitch({ inverseMobile }) {
    const handleEvent = () => {
        inverseMobile()
    }

    return <Wrapper onClick={handleEvent}>SWITCH</Wrapper>
}

SizeSwitch.propTypes = {
    inverseMobile: PropTypes.func.isRequired,
}
