import './globals.css'
import TopNavigation from './TopNavigation';
import SideNavigation from './SideNavigation';


export const metadata = {
  title: 'WeTube',
  description: 'Youtube clone - We Tube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className='h-screen'>
          <TopNavigation />
          <div className='flex flex-grow'>
            <SideNavigation />
            {children}
          </div>
          
        </div>
      </body>
    </html>
  )
}
