import React from 'react'
import Navigator from '../components/navigator/index'
import { shallow } from 'enzyme'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<Navigator />)
})
