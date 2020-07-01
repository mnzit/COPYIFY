import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../svgs/menu.svg'

const Wrapper = styled.div`
    width: 15px;
    display: flex;
    align-items: center;
`

const IconWrapper = styled(Icon)`
    fill: ${(props) => props.theme.secColor};
    width: 100%;
    height: 15px;
`

export default function Menu() {
    return (
        <Wrapper>
            <IconWrapper />
        </Wrapper>
    )
}
