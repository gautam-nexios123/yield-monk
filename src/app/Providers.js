import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'

const Providers = ({children}) => {
  return (
   <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="light" themes={["light","dark"]}>
        {children}
    </NextThemesProvider>
   </NextUIProvider>
  )
}

export default Providers
