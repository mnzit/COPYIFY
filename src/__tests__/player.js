import React from 'react'
import Player from '../components/player/index'
import { shallow } from 'enzyme'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<Player />)
})
