import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import { MyContext } from './myContext'

import theme from './styles/theme'

import { Routes } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <MyContext.Provider value={{ email: 'samamedejones@gmail.com'}}>
          <Routes />
        </MyContext.Provider>
    </ThemeProvider> 
  </StrictMode>
)
