import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { queries } from '../../../mediaQuery'

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: ${(props) => (props.marginBottom ? `20px` : '0px')};
    display: flex;
    max-width: 100%;
    min-width: 50px;

    @media all and (min-width: ${queries.large}px) {
        max-width: 80px;
        min-width: 60px;
        margin-bottom: 0px;
    }
`
const Image = styled.img`
    width: 100%;
    height: auto;
    user-select: none;
`

export default function Art({ art, getColor, marginBottom }) {
    const imageRef = useRef(null)
    const googleProxy = `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=`
    const src = googleProxy + art

    const onLoad = getColor ? getColor(imageRef) : () => {}

    return (
        <Wrapper marginBottom={marginBottom}>
            <Image
                src={src}
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
