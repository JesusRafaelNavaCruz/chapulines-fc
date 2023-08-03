import './globals.css'
import Navbar from '@/app/components/Navbar/Navbar';

export const metadata = {
  title: 'Chapulines F.C.',
  description: 'Chapulines F.C. es un equipo formado de ingenieros en Tecnologías de la Información',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
