import './globals.css'

export const metadata = {
  title: 'Gledli – Sort the Big Jobs from the Small Stuff',
  description: 'Automated software that filters serious jobs only. Stop missing enquiries and reduce time spent on admin work.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
