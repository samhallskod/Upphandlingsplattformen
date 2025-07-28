import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import AboutSection from '../components/AboutPage/AboutSection'

const AboutPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const isInitialLoad = useRef(true)
  
  // Initialize active section from URL parameters
  const getInitialActiveSection = () => {
    const openSection = searchParams.get('open')
    return openSection || ''
  }

  const [activeSection, setActiveSection] = useState<string>(getInitialActiveSection)

  // Update URL when active section changes
  useEffect(() => {
    if (activeSection) {
      setSearchParams({ open: activeSection })
    } else {
      setSearchParams({})
    }
  }, [activeSection, setSearchParams])

  useEffect(() => {
    if (isInitialLoad.current && activeSection) {
      setTimeout(() => {
        const element = document.getElementById(activeSection)
        if (element) {
          const navbarHeight = 80 // Approximate navbar height
          const elementPosition = element.offsetTop - navbarHeight - 20 // Extra 20px padding
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100) // Small delay to ensure content is rendered
      
      // Mark initial load as complete
      isInitialLoad.current = false
    }
  }, [activeSection])

  const toggleSection = (sectionKey: string) => {
    setActiveSection(prev => prev === sectionKey ? '' : sectionKey)
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              Om oss
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Vi tillhandahåller en central, öppen och kostnadsfri plattform för offentliga upphandlingar - för att förenkla processen, minska kostnader och öka transparensen i den offentliga sektorn.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <AboutSection title="Om plattformen" sectionKey="platform" expandedSections={activeSection} toggleSection={toggleSection}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Offentliga upphandlingar - tillgängliga för alla
          </h3>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Vår plattform är skapad för att samla offentliga upphandlingar på ett och samma ställe - tillgängligt, transparent och utan kostnad. Syftet är att göra det möjligt för alla medborgare, företag och organisationer att ta del av hur offentliga medel används, inte bara de som har råd att betala för avancerade system eller dyra utdrag.
            </p>
            
            <p className="text-gray-700 mb-6">
              Idag är historiska uppgifter om upphandlingar ofta utspridda, svåråtkomliga eller förenade med höga administrativa avgifter - ibland upp till flera miljoner kronor för att få ut fullständiga data. Detta motverkar såväl offentlighetsprincipen som LOU:s grundläggande syften.
            </p>
            
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Enligt Lag (2016:1145) om <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20161145-om-offentlig-upphandling_sfs-2016-1145/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">offentlig upphandling (LOU)</a> ska upphandlingar ske med:
            </h4>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Öppenhet</strong></li>
              <li><strong>Likabehandling</strong></li>
              <li><strong>Icke-diskriminering</strong></li>
            </ul>
            
            <p className="text-gray-700 mb-6">
              Och enligt offentlighetsprincipen - en grundpelare i svensk demokrati - har alla rätt att ta del av allmänna handlingar, just för att granska, förstå och utkräva ansvar från det offentliga (källa: <a href="https://www.regeringen.se/sa-styrs-sverige/grundlagar-och-demokratiskt-deltagande/offentlighetsprincipen/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Regeringen.se</a>).
            </p>
            
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Vår plattform främjar dessa principer i praktiken, genom att:
            </h4>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Göra både aktuella och historiska upphandlingar sökbara och tillgängliga.</li>
              <li>Skapa insyn och transparens i hur offentliga medel används.</li>
              <li>Möjliggöra verklig konkurrensneutralitet mellan stora och små aktörer.</li>
              <li>Minska administrativa kostnader för både myndigheter och leverantörer.</li>
            </ul>
          </div>
        </AboutSection>

        <AboutSection title="För myndigheter" sectionKey="authorities" expandedSections={activeSection} toggleSection={toggleSection}>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Vi välkomnar alla myndigheter, kommuner och offentligt ägda bolag att bidra till plattformen genom att ladda upp historiska upphandlingsdata.
            </p>
            
            <p className="text-gray-700 mb-4">
              Genom att tillgängliggöra information centralt på vår plattform:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Stärks den demokratiska insynen</li>
              <li>Får allmänheten och leverantörer enkel åtkomst till historiska uppgifter</li>
              <li>Minskar myndighetens arbetsbörda vid varje enskild begäran enligt offentlighetsprincipen</li>
            </ul>
            
            <p className="text-gray-700 mb-6">
              Ni kan vid framtida förfrågningar hänvisa till plattformen. Ladda upp en gång och dela med dig av upphandlingarna till alla.
            </p>
            
            <p className="text-gray-700 mb-6">
              Kontakta oss gärna om ni vill delta i detta arbete eller få teknisk hjälp.
            </p>
          </div>
        </AboutSection>

        <AboutSection title="Utveckla med oss" sectionKey="development" expandedSections={activeSection} toggleSection={toggleSection}>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Plattformen är ett open source-projekt med all kod tillgänglig på GitHub. Vi drivs ideellt och samarbetar gärna med utvecklare, dataanalytiker, UX-designers, forskare och andra samhällsintresserade som vill bidra till projektet.
            </p>
            
            <p className="text-gray-700 mb-6">
              <a href="https://github.com/samhallskod/upphandlingsplattformen" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline font-semibold">
                Upphandlingsplattformen på GitHub
              </a>
            </p>
            
            <p className="text-gray-700 mb-6">
              Alla är välkomna att bidra - oavsett om det gäller kod, dokumentation, buggrapporter eller idéer. Tillsammans skapar vi en öppen infrastruktur för upphandlingsdata i Sverige.
            </p>
          </div>
        </AboutSection>

        <AboutSection title="Integration och samarbete" sectionKey="integration" expandedSections={activeSection} toggleSection={toggleSection}>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Vi vill inte konkurrera med befintliga upphandlingsplattformar - vi vill samarbeta och integrera.
            </p>
            
            <p className="text-gray-700 mb-6">
              Oavsett om ni representerar en offentlig aktör, en e-upphandlingsleverantör eller ett dataplattformsteam så är vår ambition att komplettera och förstärka ert arbete. Genom öppna standarder och datadelning vill vi bidra till ett transparent, sammanhållet och effektivt ekosystem för offentlig upphandling i Sverige.
            </p>
            
            <p className="text-gray-700 mb-6">
              Vill du integrera ert system med oss? Hör av dig!
            </p>
          </div>
        </AboutSection>

        <AboutSection title="Verktyg och tekniska resurser" sectionKey="tools" expandedSections={activeSection} toggleSection={toggleSection}>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              I samband med utvecklingen av plattformen har vi även tagit fram tekniska hjälpmedel för att förenkla hanteringen av upphandlingsdata. Ett exempel är vårt fristående verktyg för programmatisk tolkning och hämtning av CPV-koder, som används för att klassificera upphandlingar enligt EU-standard.
            </p>
            
            <p className="text-gray-700 mb-6">
              <a href="https://github.com/samhallskod/cpv-eu" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline font-semibold">
                cpv-eu (GitHub)
              </a>
            </p>
            
            <p className="text-gray-700 mb-6">
              Fler API:er och verktyg kommer att göras tillgängliga löpande. Allt är släppt under öppen licens.
            </p>
          </div>
        </AboutSection>

        <AboutSection title="Om föreningen - Samhällskod" sectionKey="organization" expandedSections={activeSection} toggleSection={toggleSection}>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Vi är en ideell och icke-vinstdrivande förening med uppdraget att stärka det demokratiska samhället genom öppen teknik. Vårt fokus ligger på att tillhandahålla mjukvarulösningar till offentlig sektor med minsta möjliga kostnad och största möjliga samhällsnytta.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Finansiering och avgifter
            </h3>
            
            <p className="text-gray-700 mb-6">
              Verksamheten finansieras huvudsakligen genom donationer från privatpersoner, företag och ideella aktörer som stödjer en mer transparent och kostnadseffektiv offentlig sektor. Vi tar inga avgifter från användare, annat än det absolut nödvändiga för att drifta systemen – och vi redovisar våra kostnader öppet. All överskott återinvesteras i utveckling, förbättringar och ökad tillgänglighet.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Våra mål:
            </h3>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Öppenhet för alla</strong> - upphandlingsdata ska inte kosta miljoner att ta del av.</li>
              <li><strong>Likvärdig tillgång</strong> - små företag, journalister och medborgare ska ha samma insyn som stora aktörer.</li>
              <li><strong>Offentlighet i praktiken</strong> - vi realiserar offentlighetsprincipen digitalt.</li>
              <li><strong>Långsiktig förvaltning</strong> - vår plattform är tänkt att övergå i offentlig drift för att integreras i Sveriges digitala infrastruktur.</li>
            </ul>
          </div>
        </AboutSection>
      </div>
    </>
  )
}

export default AboutPage 