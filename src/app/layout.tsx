import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '~/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
    title: 'Grit Resort',
    description: 'A Nice Place to Chill Out ',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${jetbrainsMono.variable}`}>
                {children}
            </body>
        </html>
    )
}