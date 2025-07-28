import React from 'react'
import CategoriesSection from '../components/CategoriesPage/CategoriesSection'

const CategoriesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              Upphandlingskategorier
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Utforska olika områden inom offentliga upphandlingar och hitta relevanta möjligheter för ditt företag.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <CategoriesSection />

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Behöver hjälp med kategorier?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Vanliga frågor</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <a href="https://www.upphandlingsmyndigheten.se/inkopsprocessen-steg-for-steg/" target="_blank" className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors">
                    Hur väljer jag rätt kategori för min upphandling?
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <a href="https://www.upphandlingsmyndigheten.se/gora-affarer-med-offentlig-sektor/" target="_blank" className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors">
                    Kan jag delta i flera kategorier samtidigt?
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <a href="https://www.upphandlingsmyndigheten.se/regler-och-lagstiftning/" target="_blank" className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors">
                    Vilka krav gäller för olika kategorier?
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Fråga Upphandlingsmyndigheten</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Har du frågor om specifika kategorier eller behöver hjälp med att hitta rätt område?
              </p>
              <a target="_blank" href="https://www.upphandlingsmyndigheten.se/frageportalen/" className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 sm:px-6 rounded-md transition-colors text-sm sm:text-base">
                Kontakta support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesPage 