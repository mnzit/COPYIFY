import React from 'react'
import NavBar from '../components/navigator/navBar'
import { shallow } from 'enzyme'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<NavBar />)
})
