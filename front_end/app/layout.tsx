import '../src/index.css'
import '../src/App.css'

export const metadata = {
  title: 'BicoDigital',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
