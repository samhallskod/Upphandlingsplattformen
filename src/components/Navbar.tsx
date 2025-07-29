import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              <div>
                <div>Upphandlingsplattformen</div>
                <div className="text-xs text-gray-500 font-normal">- utvecklat av Samhällskod</div>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Hem
              </Link>
              <Link
                to="/upphandlingar"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Upphandlingar
              </Link>
              <Link
                to="/kategorier"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Kategorier
              </Link>
              <Link
                to="/om-oss"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Om oss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 