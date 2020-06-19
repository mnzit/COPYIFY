import React from 'react'
import RouteHandler from '../components/navigator/routeHandler'
import { shallow } from 'enzyme'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<RouteHandler />)
})
