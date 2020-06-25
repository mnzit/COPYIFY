import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/themes'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
