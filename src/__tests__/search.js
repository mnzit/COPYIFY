import React from 'react'
import Search from '../components/navigator/pages/search'
import { shallow } from 'enzyme'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<Search />)
})
