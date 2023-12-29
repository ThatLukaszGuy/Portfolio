// has to be server component
import { Loader } from '../components/Layout/Loader';
import '../styles/globals.css'
import { Providers } from "./providers";
import {Suspense} from 'react'


export const metadata = {
  title: 'ThatLukaszGuy',
  description: "An interactive, modern Portfolio website showcasing the author's projects",
  author: 'ThatLukaszGuy',
  keywords: ['Portfolio', 'NextJS', 'Developer', 'Webdev', 'Fullstack'],
  icons: {
    icon:[{url: 'favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png'},{url: 'favicon/favicon-16x16.png',sizes: '16x16', type: 'image/png'}],
    other: [
      {rel: 'apple-touch-icon', url: 'favicon/apple-touch-icon.png', sizes: '180x180'},
      {rel: 'mask-icon', url: 'favicon/safari-pinned-tab.svg' ,color: '#5bbad5'}  ],
  
  },
  manifest: 'favicon/site.webmanifest'

}
 
export default function RootLayout({children}) {




    return (
      <html lang="en">
        <head>

        </head>
        <body>
          <header></header>
          <main>
            <Providers>
              <Suspense fallback={<Loader/>}>
                  {children}
              </Suspense>
            </Providers>
          </main>
        </body>
      </html>
    );
  }