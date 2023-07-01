"use client"
import styles from './styles.module.css'
import './globals.css'
import { store } from './store'
import { Provider } from 'react-redux'


export const metadata = {
  title: 'ilud',
  description: 'i link up direct',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Provider store={store}>{children}</Provider></body>
    </html>
  )
}
