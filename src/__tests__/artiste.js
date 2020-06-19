import React from 'react'
import Artiste from '../components/navigator/pages/artiste'
import { shallow } from 'enzyme'

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        id: 'MOCKED_VALUE',
    }),
}))

test('renders without crashing', () => {
    shallow(<Artiste />)
})
