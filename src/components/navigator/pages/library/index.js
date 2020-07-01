import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import Search from './search'
import data from '../../../../data'

const Wrapper = styled.div`
    height: 100vh;
    padding: 20px;
    overflow-y: auto;
    background-color: black;
`

export default function Library() {
    return (
        <Wrapper>
            <Search />
            {data.map((item, key) => (
                <Item item={item} key={key} />
            ))}
        </Wrapper>
    )
}
