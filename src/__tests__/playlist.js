import React from 'react'
import Playlist from '../components/navigator/pages/playlist'
import { shallow } from 'enzyme'

test('renders without crashing', () => {
    shallow(<Playlist />)
})
