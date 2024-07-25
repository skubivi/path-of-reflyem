import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './services/store/store.ts'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme/theme.ts'
import BufsPage from './pages/bufs-page/bufs-page.tsx'
import ConfigurationPage from './pages/configuration-page/configuration-page.tsx'
import SkillPointsPage from './pages/skillpoints-page/skillpoints-page.tsx'
import { EPageRoutes } from './services/enums/page-routes.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: EPageRoutes.BufsPage,
        element: <BufsPage />
      },
      {
        path: EPageRoutes.ConfigurationPage,
        element: <ConfigurationPage />
      },
      {
        path: EPageRoutes.SkillPointsPage,
        element: <SkillPointsPage />
      }
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
