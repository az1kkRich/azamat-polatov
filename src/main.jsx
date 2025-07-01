import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider, theme } from 'antd'
import './i18n' // Import i18n configuration

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, }}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
