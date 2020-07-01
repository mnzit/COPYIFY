import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../svgs/menu.svg'

const Wrapper = styled.div`
    width: 15px;
    display: flex;
    justify-self: end;
    align-self: center;
    grid-column: 10/11;
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
