const ProcurementsFaq = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Behöver du hjälp?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Vanliga frågor</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <a href="https://www.upphandlingsmyndigheten.se/inkopsprocessen/" target="_blank" className="text-gray-600 hover:text-purple-700 transition-colors">
                Hur fungerar inköpsprocessen?
              </a>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <a href="https://www.upphandlingsmyndigheten.se/gora-affarer-med-offentlig-sektor/" target="_blank" className="text-gray-600 hover:text-purple-700 transition-colors">
                Hur kan ditt företag förbereda sig?
              </a>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <a href="https://www.upphandlingsmyndigheten.se/regler-och-lagstiftning/" target="_blank" className="text-gray-600 hover:text-purple-700 transition-colors">
                Vilka regler och lagar gäller?
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
  )
}

export default ProcurementsFaq