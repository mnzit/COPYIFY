import React from 'react'
import Playlist from '../components/navigator/pages/playlist'
import { shallow } from 'enzyme'

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        id: 'MOCKED_VALUE',
    }),
}))

test('renders without crashing', () => {
    shallow(<Playlist />)
})
