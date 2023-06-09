import StyledComponentsRegistry from './lib/registry';
import localFont from 'next/font/local'
import { Roboto } from 'next/font/google';
import { GlobalStyle } from './GlobalStyle';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const lemonMilk = localFont({
  display: 'swap',
  src: [
    {
      path: './font/LemonMilkLight.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: './font/LemonMilkRegular.otf',
      weight: '500',
      style: 'normal'
    },
  ],
  variable: '--font-lemon-milk'
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['500', '300']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={`${lemonMilk.variable} ${roboto.variable}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
