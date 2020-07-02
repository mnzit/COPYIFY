import React from 'react'
import Library from '../components/navigator/pages/library'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const mockStore = configureMockStore([thunk])

/* SMOKE TEST */
test('renders without crashing', () => {
    const store = mockStore({
        startup: false,
    })
    shallow(
        <Provider store={store}>
            <Library />
        </Provider>
    )
})
