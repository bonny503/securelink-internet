export const metadata = {
  title: 'SecureLink',
  description: 'Internet and CCTV',
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
