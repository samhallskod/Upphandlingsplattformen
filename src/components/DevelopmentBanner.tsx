const DevelopmentBanner: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-2">
          <div className="flex items-center space-x-2">
            <svg 
              className="w-5 h-5 text-yellow-600" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-sm text-yellow-800 font-medium">
              Denna plattform är under utveckling och endast en förhandsvisning tills alla funktioner är klara.
            </span>
            <a 
              href="https://github.com/samhallskod/Upphandlingsplattformen?tab=readme-ov-file#roadmap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-yellow-700 hover:text-yellow-900 underline font-medium transition-colors"
            >
              Se roadmap →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevelopmentBanner 