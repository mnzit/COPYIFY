import React from 'react'
import Cancel from './cancel'
import Filter from './filter'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../../../../../../actions'
import PropTypes from 'prop-types'

export default function SearchButton({ reset }) {
    const searchFocus = useSelector((state) => state.searchFocus)
    const dispatch = useDispatch()

    const cancel = (e) => {
        e.preventDefault()
        dispatch(set({ searchFocus: false }))
        reset()
    }

    return searchFocus ? <Cancel handleClick={cancel} /> : <Filter />
}

SearchButton.propTypes = {
    reset: PropTypes.func,
}
