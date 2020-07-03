import React from 'react'
import { ReactComponent as Liked } from '../../../../svgs/like_filled.svg'
import { ReactComponent as Unliked } from '../../../../svgs/like_outline.svg'
import { IconStyles } from './iconStyles'
import { useSelector, useDispatch } from 'react-redux'
import { inverse, set } from '../../../../actions'
import { useSpring, animated, config } from 'react-spring'

const LikedWrapper = IconStyles(Liked)
const UnlikedWrapper = IconStyles(Unliked)

export default function Like() {
    const liked = useSelector((state) => state.liked)
    const clickedLike = useSelector((state) => state.clickedLike)
    const dispatch = useDispatch()

    const clickEvent = () => {
        dispatch(set({ clickedLike: true }))
        dispatch(inverse({ liked }))
    }

    const props = useSpring({
        onRest: () => {
            dispatch(set({ clickedLike: false }))
        },
        width: 30,
        display: 'flex',
        justifyContent: 'center',
        transform: `scale(${clickedLike ? 1.2 : 1})`,
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
                <LikedWrapper liked_ shadow_ onClick={handleEvent} />
            ) : (
                <UnlikedWrapper onClick={handleEvent} />
            )}
        </animated.div>
    )
}
