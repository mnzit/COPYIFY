import React from 'react'
import { directionalStyles } from '../iconStyles'
import { ReactComponent as Icon } from '../../../../svgs/next.svg'

const IconWrapper = directionalStyles(Icon)

export default function Next() {
    return <IconWrapper />
}
