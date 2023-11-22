import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryClient } from './shared/reactQuery/QueryClient'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={ReactQueryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)

