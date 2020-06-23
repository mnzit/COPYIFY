import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../svgs/next.svg'

const IconWrapper = styled(Icon)`
    width: ${(props) => props.theme.large};
    fill: ${(props) => props.theme.fill};
`

export default function Next() {
    return <IconWrapper />
}
