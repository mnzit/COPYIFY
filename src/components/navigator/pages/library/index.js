import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import Search from './search'
import data from '../../../../data'
import { useSelector } from 'react-redux'
import { useTransition, config } from 'react-spring'

const Wrapper = styled.div`
    height: 100vh;
    padding: 20px 0px;
    overflow-y: auto;
    background-color: black;
`

export default function Library() {
    const libSearchValue = useSelector(
        (state) => state.libSearchValue
    ).toLowerCase()

    const filterItems = (item) => {
        return (
            item.title.toLowerCase().includes(libSearchValue) ||
            item.album.toLowerCase().includes(libSearchValue) ||
            item.artistes.join('').toLowerCase().includes(libSearchValue)
        )
    }

    // eslint-disable-next-line react/prop-types
    const createItems = ({ item, props, key }) => {
        return <Item item={item} key={key} props={props} />
    }

    const filtered = data.filter(filterItems)

    const itemsWithTransitions = useTransition(filtered, (item, key) => key, {
        unique: true,
        enter: { opacity: 1, width: '100%' },
        leave: { opacity: 0, width: '0%' },
        trail: 100 / filtered.length,
        config: config.gentle,
    })

    return (
        <Wrapper>
            <Search />
            {itemsWithTransitions.map(createItems)}
        </Wrapper>
    )
}
