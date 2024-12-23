import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import type { PropsWithChildren } from 'react'

import { Root } from '@/components/Root/Root'
import { I18nProvider } from '@/core/i18n/provider'

import Header from '@/app/(telegram)/game/_components/Header'
import NavBar from '@/app/(telegram)/game/_components/NavBar'
import '@/app/_assets/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import 'normalize.css/normalize.css'

export const metadata: Metadata = {
  title: 'Token Giver',
  description: 'Play-to-earn game',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()

  return (
    <html lang={locale} className={'dark'}>
      <body>
        <NextUIProvider>
          <I18nProvider>
            <Root>
              <div className="p-4 flex flex-col gap-4">
                <Header />
                {children}
              </div>
              <NavBar />
            </Root>
          </I18nProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
