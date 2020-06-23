import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../svgs/menu.svg'

const IconWrapper = styled(Icon)`
    width: ${(props) => props.theme.small};
    :hover {
        cursor: pointer;
    }
`

export default function Menu() {
    const handleEvent = () => {}

    return <IconWrapper onClick={handleEvent} />
}
