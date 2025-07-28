import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout 