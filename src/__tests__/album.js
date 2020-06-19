import React from 'react'
import Album from '../components/navigator/pages/album'
import { shallow } from 'enzyme'

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        id: 'MOCKED_VALUE',
    }),
}))

test('renders without crashing', () => {
    shallow(<Album />)
})
