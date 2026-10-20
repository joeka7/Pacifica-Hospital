import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Archivo with both width (62–125%) and weight axes
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import './styles/tokens.css'
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
