import { i18n } from '@assets/i18n'
import { queryClient } from '@core/query'
import NiceModal from '@ebay/nice-modal-react'
import { AppProvider } from '@providers/app-provider'
import { AxiosProvider } from '@providers/axios-provider'
import { LanguageProvider } from '@providers/language-provider'
import { theme } from '@styles/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <AxiosProvider>
            <LanguageProvider>
              <BrowserRouter>
                <NiceModal.Provider>
                  <AppProvider />
                </NiceModal.Provider>
              </BrowserRouter>
            </LanguageProvider>
          </AxiosProvider>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
