
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
      <body>{children}</body>
    </html>
  )
}
