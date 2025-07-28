import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const IntegrityPolicyPage: React.FC = () => {
  const location = useLocation()

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        const navbarHeight = 80 // Approximate navbar height
        const elementPosition = element.offsetTop - navbarHeight - 20 // Extra 20px padding
        setTimeout(() => {
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }, 100) // Small delay to ensure content is rendered
      }
    }
  }, [location.hash])

  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              Integritetspolicy
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Vi värnar om din personliga integritet och transparens i hur vi hanterar data på Upphandlingsplattformen.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vår integritetspolicy</h2>
            
            <p className="text-gray-700 mb-6">
              Denna integritetspolicy beskriver hur Upphandlingsplattformen - utvecklat av Samhällskod - hanterar din personliga information när du använder vår plattform.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Viktigt: Begränsad datainsamling</h3>
              <p className="text-green-700">
                Vi samlar endast in data som är relaterad till offentliga upphandlingar och som är tillgänglig enligt lag. För vanliga webbplatsbesökare sparas ingen personlig information.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Data vi samlar in</h3>
            <p className="text-gray-700 mb-4">
              Vi samlar endast in data som är:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Relaterad till upphandlingar:</strong> Kontaktinformation och relevant information kopplad till specifika upphandlingar</li>
              <li><strong>Offentligt tillgänglig:</strong> Data som är tillgänglig enligt lag om offentlig upphandling</li>
              <li><strong>Nödvändig för tjänsten:</strong> Endast information som krävs för att tillhandahålla upphandlingstjänster</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Vanliga webbplatsbesök</h3>
            <p className="text-gray-700 mb-6">
              Om du använder webbplatsen utan att ha gjort ett anbud på en upphandling samlar vi inte in eller sparar någon personlig information om dig. Du kan söka, bläddra och läsa innehåll utan att någon data sparas.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Upphandlingsrelaterad data</h3>
            <p className="text-gray-700 mb-6">
              När du deltar i en offentlig upphandling kan vi samla in kontaktinformation och annan relevant information som är nödvändig för upphandlingsprocessen. Denna data är den som är offentligt tillgänglig enligt lag och används endast för upphandlingsändamål.
            </p>

            <h3 id="cookies" className="text-xl font-semibold text-gray-800 mb-4">4. Cookies</h3>
            <p className="text-gray-700 mb-6">
              Vi använder inte cookies på vår webbplats. Ingen spårning eller lagring av användardata sker via cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Teknisk information</h3>
            <p className="text-gray-700 mb-6">
              När du besöker plattformen kan din webbläsare automatiskt skicka teknisk information till våra servrar (som IP-adress, webbläsartyp, operativsystem). Denna information används endast för att leverera innehållet till din enhet och sparas inte permanent.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Datasäkerhet</h3>
            <p className="text-gray-700 mb-6">
              All data som samlas in skyddas med lämpliga säkerhetsåtgärder. Upphandlingsrelaterad data hanteras enligt gällande lagstiftning om offentlig upphandling och datasäkerhet.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Dina rättigheter</h3>
            <p className="text-gray-700 mb-6">
              Du har rätt att begära tillgång till, korrigera eller radera personlig information som vi har om dig. För vanliga webbplatsbesökare finns ingen sådan data att hantera.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Transparens</h3>
            <p className="text-gray-700 mb-6">
              Vi är transparenta i vårt arbete. All kod för plattformen är öppen och tillgänglig på GitHub, så du kan själv verifiera våra datapraxis.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Kontaktinformation</h3>
            <p className="text-gray-700 mb-6">
              Om du har frågor om denna integritetspolicy eller hur vi hanterar data, kontakta oss via:
            </p>
                               <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                     <li><strong>GitHub:</strong> <a href="https://github.com/samhallskod/Upphandlingsplattformen" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Upphandlingsplattformen på GitHub</a></li>
                     <li><strong>E-post:</strong> samhallskod@proton.me</li>
                   </ul>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Senast uppdaterad</h4>
              <p className="text-gray-600">
                Denna integritetspolicy senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntegrityPolicyPage 