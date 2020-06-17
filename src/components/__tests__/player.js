import React from 'react'
import Player from '../player.js'
import { shallow } from 'enzyme'

/* SMOKE TEST */
test('renders without crashing', () => {
    shallow(<Player />)
})
