import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './shared/styles/global_UI_styles.css'
import './shared/styles/globalAnimations.css'
import './shared/styles/globalStyles.css'
import './shared/styles/index.css'
import './shared/styles/themeStyles.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
