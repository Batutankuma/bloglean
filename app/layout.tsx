import { Metadata } from 'next'
import Header from '../components/header'
import './globals.css'

export const metadata: Metadata = {
    title:'leerop',
    description: "C'est un site web lean nextjs, je clone le site de ronbinson pour apprendre nextjs"
}

export default function RootLayout({children}:{children:React.ReactNode}){
    return (
        <html lang="fr">
            <body className='px-56 pt-16  bg-black text-gray-300'>
                <Header/>
                {children}
            </body>
        </html>
    )
}