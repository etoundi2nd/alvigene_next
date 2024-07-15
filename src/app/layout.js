import './globals.css'
import 'remixicon/fonts/remixicon.css'
import { noto_serif_display, inter } from './fonts'
import Footer from './components/footer'
import React from 'react'
import Navbar from './components/navbar'

const fonts_variables = `${noto_serif_display.className} ${inter.className}`

const metadata = {
    title: 'Alvigène - Soins de beauté',
    description: "Alvigène. Soins de beauté bio à la bave d'escargot"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={fonts_variables} data-controller="marketing--offset-canvas">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
