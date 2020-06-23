import React from 'react'
import { ReactComponent as Icon } from '../../../../svgs/minimizer.svg'
import { IconStyle } from '../iconStyles'

const IconWrapper = IconStyle(Icon)

export default function Minimizer() {
    const handleEvent = () => {}

    return <IconWrapper onClick={handleEvent} />
}
