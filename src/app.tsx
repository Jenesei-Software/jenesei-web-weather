import { i18n } from '@assets/i18n'
import { queryClient } from '@core/query'
import NiceModal from '@ebay/nice-modal-react'
import { ProviderApp } from '@providers/provider-app'
import { ProviderAxios } from '@providers/provider-axios'
import { ProviderLanguage } from '@providers/provider-language'
import { QueryClientProvider } from '@tanstack/react-query'
import { JeneseiTheme } from 'jenesei-react-ui'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={JeneseiTheme}>
          <ProviderAxios>
            <ProviderLanguage>
              <BrowserRouter>
                <NiceModal.Provider>
                  <ProviderApp />
                </NiceModal.Provider>
              </BrowserRouter>
            </ProviderLanguage>
          </ProviderAxios>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
