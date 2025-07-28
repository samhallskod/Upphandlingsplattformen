import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-1">Upphandlingsplattformen</h3>
            <p className="text-sm text-gray-400 mb-4">- utvecklat av Samhällskod</p>
            <p className="text-gray-300 mb-4">
              Vi tillhandahåller en central, öppen och kostnadsfri plattform för offentliga upphandlingar - för att förenkla processen, minska kostnader och öka transparensen i den offentliga sektorn.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/samhallskod/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/samhallskod" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/upphandlingar" className="text-gray-300 hover:text-white transition-colors">
                  Upphandlingar
                </Link>
              </li>
              <li>
                <Link to="/kategorier" className="text-gray-300 hover:text-white transition-colors">
                  Kategorier
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="text-gray-300 hover:text-white transition-colors">
                  Om oss
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © {currentYear} Upphandlingsplattformen - utvecklat av Samhällskod. Alla rättigheter förbehållna.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/integritetspolicy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Integritetspolicy
              </Link>
              <Link to="/integritetspolicy#cookies" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 