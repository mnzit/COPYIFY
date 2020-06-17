import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<App />)
})
