export const metadata = {
  title: 'AIaaS Presentation - AI as a Service',
  description: 'Professional presentation on AI as a Service (AIaaS)',
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
