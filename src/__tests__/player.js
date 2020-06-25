import React from 'react'
import Player from '../components/player/index'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const mockStore = configureMockStore([thunk])

test('renders without crashing', () => {
    const store = mockStore({
        startup: { complete: false },
    })

    shallow(
        <Provider store={store}>
            <Player />
        </Provider>
    )
})
