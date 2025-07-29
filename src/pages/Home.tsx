import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Upphandlingsplattformen
            </h1>
            <p className="text-lg sm:text-xl mb-4">- utvecklat av Samhällskod</p>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8">
              En central, öppen och kostnadsfri plattform för offentliga upphandlingar - för att förenkla processen, minska kostnader och öka transparensen i den offentliga sektorn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/upphandlingar" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Utforska upphandlingar
              </Link>
              <Link 
                to="/kategorier" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Bläddra kategorier
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Varför Upphandlingsplattformen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tillhandahåller en plattform som främjar öppenhet, transparens och tillgänglighet inom offentliga upphandlingar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Öppenhet för alla</h3>
              <p className="text-gray-600">
                Upphandlingsdata ska inte kosta miljoner att ta del av. Vi gör information tillgänglig för alla - företag, journalister och medborgare.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Likvärdig tillgång</h3>
              <p className="text-gray-600">
                Små företag, journalister och medborgare ska ha samma insyn som stora aktörer. Vi skapar en jämlik spelplan.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparens i praktiken</h3>
              <p className="text-gray-600">
                Vi realiserar offentlighetsprincipen digitalt. All data är öppen, sökbar och tillgänglig för alla på riktigt - utan administrativa avgifter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Så fungerar det
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enkel och transparent process för att hitta och delta i offentliga upphandlingar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sök upphandlingar</h3>
              <p className="text-gray-600">
                Bläddra genom kategorier eller sök efter specifika upphandlingar som passar ditt företag.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Analysera möjligheter</h3>
              <p className="text-gray-600">
                Granska detaljer, krav och villkor för att bedöma om upphandlingen passar ditt företag.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Följ processen</h3>
              <p className="text-gray-600">
                Håll dig uppdaterad om deadlines, ändringar och viktiga händelser i upphandlingsprocessen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Delta aktivt</h3>
              <p className="text-gray-600">
                Lämna anbud och delta i offentliga upphandlingar med full transparens och insyn.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-600 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Redo att börja?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Utforska offentliga upphandlingar och hitta möjligheter för ditt företag. Allt är gratis och öppet för alla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/upphandlingar" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Utforska upphandlingar
            </Link>
            <Link 
              to="/om-oss" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Läs mer om oss
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home 