import { createStore } from 'redux'
import reducer from '../reducers'

const initialState = {
    mobile: false,
    mobileSize: 411,
}

const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)

export default store
