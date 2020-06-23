import React from 'react'
import { shallow } from 'enzyme'
import App from '../components'
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
            <App />
        </Provider>
    )
})
