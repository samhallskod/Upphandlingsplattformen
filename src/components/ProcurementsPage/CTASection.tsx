const CTASection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: '#8AB24220' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8AB242' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 ml-3">Sök Upphandlingar</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Hitta aktuella upphandlingar inom ditt område med vårt avancerade söksystem.
        </p>
        <button className="w-full text-white py-2 px-4 rounded-md transition-colors" style={{ backgroundColor: '#8AB242' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7A9F3A'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8AB242'}>
          Sök nu
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: '#208B3120' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#208B31' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 ml-3">Skapa Anbud</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Skapa och skicka in ditt anbud enkelt och säkert genom vår plattform.
        </p>
        <button className="w-full text-white py-2 px-4 rounded-md transition-colors" style={{ backgroundColor: '#208B31' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1A7A2A'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#208B31'}>
          Skapa anbud
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: '#6B287920' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#6B2879' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 ml-3">Statistik</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Se statistik och trender inom offentliga upphandlingar.
        </p>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors">
          Visa statistik
        </button>
      </div>
    </div>
  )
}

export default CTASection