'use cient'
import { ThemeProvider } from 'next-themes'

import React from 'react'

export const Providers = ({children}) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='darkmode'>
        <div>
            {children}
        </div>
    </ThemeProvider>

  )
}
