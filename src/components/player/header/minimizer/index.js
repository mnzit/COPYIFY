import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../svgs/minimizer.svg'

const IconWrapper = styled(Icon)`
    width: ${(props) => props.theme.small};
    :hover {
        cursor: pointer;
    }
`

export default function Minimizer() {
    const handleEvent = () => {}

    return <IconWrapper onClick={handleEvent} />
}
