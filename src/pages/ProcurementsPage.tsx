import React from 'react'
import RecentProcurementsSection from '../components/ProcurementsPage/RecentProcurementsSection'
import CategoriesSection from '../components/ProcurementsPage/CategoriesSection'
import ProcurementsFaqSection from '../components/ProcurementsPage/ProcurementsFaqSection'
import CTASection from '../components/ProcurementsPage/CTASection'

const Upphandlingar: React.FC = () => {
  // Sample categories data with CPV codes - this would typically come from an API
  const categories = [
    { code: '48000000', numberOfAds: 245 }, // Software package and information systems
    { code: '45000000', numberOfAds: 189 }, // Construction work
    { code: '85000000', numberOfAds: 156 }, // Health and social work services
    { code: '60000000', numberOfAds: 98 }   // Transport services (land, water and air)
  ]

  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Upphandlingar
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Hitta och delta i offentliga upphandlingar. Vi hjälper dig att navigera genom processen från start till slut.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col">
        <CTASection />
        <CategoriesSection categories={categories} />
        <RecentProcurementsSection />
        <ProcurementsFaqSection />
      </div>
    </>
  )
}

export default Upphandlingar 