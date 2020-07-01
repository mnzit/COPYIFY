import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import data from '../../../../data'

const Wrapper = styled.div``

export default function Library() {
    return (
        <Wrapper>
            {data.map((item, key) => (
                <Item item={item} key={key} />
            ))}
        </Wrapper>
    )
}
