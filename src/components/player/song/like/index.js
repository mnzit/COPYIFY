import React from 'react'
import { ReactComponent as Liked } from '../../../../svgs/like_filled.svg'
import { ReactComponent as Unliked } from '../../../../svgs/like_outline.svg'
import { IconStyles } from './iconStyles'
import { useSelector, useDispatch } from 'react-redux'
import { inverseLiked, setClickedLike } from '../../../../actions'
import { useSpring, animated, config } from 'react-spring'
import { theme } from '../../../../styles/themes'

const LikedWrapper = IconStyles(Liked)
const UnlikedWrapper = IconStyles(Unliked)

export default function Like() {
    const liked = useSelector((state) => state.liked)
    const clicked = useSelector((state) => state.clickedLike)
    const dispatch = useDispatch()

    const clickEvent = () => {
        dispatch(setClickedLike(true))
        dispatch(inverseLiked())
    }

    const props = useSpring({
        onRest: () => {
            dispatch(setClickedLike(false))
        },
        width: clicked ? theme.medium : theme.small,
        config: config.stiff,
    })

    const handleEvent = ({ type }) => {
        switch (type) {
            case 'click':
                clickEvent()
                break
            default:
                break
        }
    }

    return (
        <animated.div style={props}>
            {liked ? (
                <LikedWrapper onClick={handleEvent} liked={liked} />
            ) : (
                <UnlikedWrapper onClick={handleEvent} liked={liked} />
            )}
        </animated.div>
    )
}
