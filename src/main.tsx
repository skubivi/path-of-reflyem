import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './services/store/store.ts'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme/theme.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
