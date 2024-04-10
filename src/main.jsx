
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import theme from './theme.jsx'
import App from './App.jsx';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';




// import './index.scs'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>
)