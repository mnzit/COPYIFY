import React from 'react'
import styled from 'styled-components'
import { ReactComponent as PlayIcon } from '../../../../svgs/play.svg'
import { ReactComponent as PauseIcon } from '../../../../svgs/pause.svg'
import { useSelector, useDispatch } from 'react-redux'
import { inversePlaying } from '../../../../actions'

const IconStyle = (Icon) => {
    return styled(Icon)`
        width: ${(props) => props.theme.largest};
        fill: ${(props) => props.theme.fill};
        height: ${(props) => props.theme.largest};
        :hover {
            cursor: pointer;
        }
    `
}

const PlayWrapper = IconStyle(PlayIcon)
const PauseWrapper = IconStyle(PauseIcon)

export default function Play() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(inversePlaying())
    }

    const playing = useSelector((state) => state.playing)
    return (
        <span onClick={handleClick}>
            {playing ? <PauseWrapper /> : <PlayWrapper />}
        </span>
    )
}
