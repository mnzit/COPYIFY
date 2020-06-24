import React from 'react'
import { directionalStyles } from '../iconStyles'
import { ReactComponent as Icon } from '../../../../svgs/previous.svg'

const IconWrapper = directionalStyles(Icon)

export default function Previous() {
    return <IconWrapper />
}
