import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Play } from '../../../svgs/mini_play.svg'
import { ReactComponent as Pause } from '../../../svgs/mini_pause.svg'
import { useSelector, useDispatch } from 'react-redux'
import { inverse } from '../../../actions'

const Wrapper = styled.div``

const createIconWrapper = (Icon) => {
    return styled(Icon)`
        max-width: 15px;
        width: 15px;
        fill: white;
        margin-right: 20px;
    `
}

const PlayWrapper = createIconWrapper(Play)
const PauseWrapper = createIconWrapper(Pause)

export default function Controls() {
    const playing = useSelector((state) => state.playing)
    const dispatch = useDispatch()

    const handleEvent = ({ type }) => {
        switch (type) {
            case 'click':
                dispatch(inverse({ playing }))
                break
            default:
                break
        }
    }

    return (
        <Wrapper>
            {playing ? (
                <PauseWrapper onClick={handleEvent} />
            ) : (
                <PlayWrapper onClick={handleEvent} />
            )}
        </Wrapper>
    )
}
