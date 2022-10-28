import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { merge } from 'lodash'

import { defaultTheme } from '@/src/constants/common'
import { ThemeType } from '@/src/constants/types'
import { usePersistedState } from '@/src/hooks/usePersistedState'
import { commonTheme } from '@/src/theme/common'
import { darkTheme } from '@/src/theme/dark'
import { GlobalStyles } from '@/src/theme/globalStyles'
import { lightTheme } from '@/src/theme/light'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeContext = createContext({} as any)

const ThemeContextProvider: React.FC = ({ children }) => {
  const DEFAULT_THEME =
    defaultTheme === ThemeType.dark || defaultTheme === ThemeType.light
      ? defaultTheme
      : ThemeType.light

  const [currentThemeName, setCurrentThemeName] = usePersistedState(
    'stored-theme-name',
    DEFAULT_THEME,
  )

  const isLightTheme = useMemo(() => currentThemeName === ThemeType.light, [currentThemeName])

  const [currentThemeJSON, setCurrentThemeJSON] = useState(
    isLightTheme ? merge({}, commonTheme, lightTheme) : merge({}, commonTheme, darkTheme),
  )

  const switchTheme = useCallback(() => {
    setCurrentThemeName(isLightTheme ? ThemeType.dark : ThemeType.light)
  }, [isLightTheme, setCurrentThemeName])

  useEffect(() => {
    setCurrentThemeJSON(
      isLightTheme ? merge({}, commonTheme, lightTheme) : merge({}, commonTheme, darkTheme),
    )
  }, [isLightTheme])

  const values = {
    switchTheme,
    currentThemeName,
  }

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={currentThemeJSON}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export function useThemeContext() {
  return useContext(ThemeContext)
}
