import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../svgs/repeat.svg'

const IconWrapper = styled(Icon)`
    width: ${(props) => props.theme.small};
    fill: ${(props) => props.theme.fill};
`

export default function Repeat() {
    return <IconWrapper />
}
