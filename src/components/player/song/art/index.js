import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { queries } from '../../../mediaQuery'

const Wrapper = styled.div`
    width: calc(100%);
    margin-bottom: ${(props) => (props.marginBottom ? `20px` : '0px')};

    max-width: 100%;
    min-width: 50px;

    @media all and (min-width: ${queries.large}px) {
        max-width: 80px;
        min-width: 60px;
        max-height: 80px;
        margin-bottom: 0px;
    }
`
const Image = styled.img`
    max-width: 100%;
    user-select: none;
`

export default function Art({ art, getColor, marginBottom }) {
    const imageRef = useRef(null)

    const onLoad = getColor ? getColor(imageRef) : () => {}

    return (
        <Wrapper marginBottom={marginBottom}>
            <Image
                src={art}
                alt={`music art cover`}
                draggable={false}
                ref={imageRef}
                onLoad={onLoad}
                crossOrigin={'anonymous'}
            />
        </Wrapper>
    )
}

Art.propTypes = {
    art: PropTypes.string,
    getColor: PropTypes.func,
    marginBottom: PropTypes.bool,
}
