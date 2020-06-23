import React from 'react'
import { ReactComponent as Icon } from '../../../../svgs/menu.svg'
import { IconStyle } from '../iconStyles'

const IconWrapper = IconStyle(Icon)

export default function Menu() {
    const handleEvent = () => {}

    return <IconWrapper onClick={handleEvent} />
}
