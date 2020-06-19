import React from 'react'
import Library from '../components/navigator/pages/library'
import { shallow } from 'enzyme'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<Library />)
})
