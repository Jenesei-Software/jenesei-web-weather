import { ITokenData } from '@api/auth'

export interface AxiosProviderProps {
  children: React.ReactNode
}

export interface AxiosContextProps {
  isAuthorized: boolean
  saveToLocalStorage: (data: ITokenData) => void
}
