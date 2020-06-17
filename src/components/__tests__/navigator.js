import React from 'react'
import { shallow } from 'enzyme'
import Navigator from '../navigator'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<Navigator />)
})
