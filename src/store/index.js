import { createStore } from 'redux'
import reducer from '../reducers'

const initialState = {
    mobile: false,
    mobileWidth: 375,
    mobileHeight: 812,
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
