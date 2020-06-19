import React from 'react'
import Home from '../components/navigator/pages/home'
import { shallow } from 'enzyme'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<Home />)
})
