import React from 'react'
import { ReactComponent as Icon } from '../../../../svgs/minimizer.svg'
import { IconStyle } from '../iconStyles'
import { useSelector, useDispatch } from 'react-redux'
import { inverse } from '../../../../actions'

const IconWrapper = IconStyle(Icon)

export default function Minimizer() {
    const dispatch = useDispatch()
    const playerDown = useSelector((state) => state.playerDown)
    const handleEvent = () => {
        dispatch(inverse({ playerDown }))
    }

    return <IconWrapper onClick={handleEvent} />
}
