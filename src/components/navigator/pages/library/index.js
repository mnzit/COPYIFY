import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import Search from './search'
import data from '../../../../data'
import { useSelector, useDispatch } from 'react-redux'
import { useTransition, config } from 'react-spring'
import { set } from '../../../../actions'

const Wrapper = styled.div`
    height: 100vh;
    padding: 20px 0px;
    overflow-y: auto;
    background-color: black;
`

export default function Library() {
    const dispatch = useDispatch()

    const libSearchValue = useSelector(
        (state) => state.libSearchValue
    ).toLowerCase()

    const startPlaying = (song) => {
        dispatch(set({ currentlyPlaying: song }))
    }
    const filterItems = (item) => {
        return (
            item.title.toLowerCase().includes(libSearchValue) ||
            item.album.toLowerCase().includes(libSearchValue) ||
            item.artistes.join('').toLowerCase().includes(libSearchValue)
        )
    }

    // eslint-disable-next-line react/prop-types
    const createItems = ({ item, props, key }) => {
        return (
            <Item
                item={item}
                key={key}
                props={props}
                startPlaying={startPlaying}
            />
        )
    }

    const filtered = data.filter(filterItems)

    return (
        <Wrapper>
            <Search />
            {filtered.map(createItems)}
        </Wrapper>
    )
}
