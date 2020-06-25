import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { queries } from '../../../mediaQuery'
import { useDispatch } from 'react-redux'
import { setPlayerColor } from '../../../../actions'
import COLORTHIEF from 'color-thief'

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;

    @media all and (min-width: ${queries.large}px) {
        max-width: 80px;
        min-width: 80px;
        margin-bottom: 0px;
    }
`
const Image = styled.img`
    width: 100%;
    height: auto;
    user-select: none;
`

export default function Art({ art }) {
    const dispatch = useDispatch()
    const imageRef = useRef(null)
    const googleProxy = `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=`
    const src = googleProxy + art

    const getColorFromImage = () => {
        const thief = new COLORTHIEF()
        const colorValues = thief.getColor(imageRef.current)

        const colorHex = `#${colorValues
            .map((x) => {
                let hex = x.toString(16)
                return hex.length === 1 ? '0' + hex : hex
            })
            .join('')}`

        dispatch(setPlayerColor(colorHex))
    }

    return (
        <Wrapper>
            <Image
                src={src}
                alt={`music art cover`}
                draggable={false}
                ref={imageRef}
                onLoad={getColorFromImage}
                crossOrigin={'anonymous'}
            />
        </Wrapper>
    )
}

Art.propTypes = {
    art: PropTypes.string,
}
