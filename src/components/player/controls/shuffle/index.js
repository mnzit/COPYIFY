import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../svgs/shuffle.svg'

const IconWrapper = styled(Icon)`
    width: ${(props) => props.theme.small};
    fill: ${(props) => props.theme.fill};
`

export default function Shuffle() {
    return <IconWrapper />
}
