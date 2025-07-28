import { getLabelByCPVCode } from 'cpv-eu'
import { useNavigate } from 'react-router-dom'

interface Category {
  code: string
  numberOfAds: number
}

interface CategoriesSectionProps {
  categories: Category[]
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
  const navigate = useNavigate()
  const displayCategories = categories

  const getCPVLabel = (code: string): string => {
    try {
      return getLabelByCPVCode(code, "sv")
    } catch {
      return `Kategori ${code}`
    }
  }

  const handleCategoryClick = (code: string) => {
    navigate(`/kategorier?search=${code}`)
  }

  const handleViewAds = (code: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent category click when clicking button
    navigate(`/kategorier?search=${code}`)
  }

  return (
    <div className="mb-16 mt-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Upphandlingskategorier - CPV-koder</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full"
            onClick={() => handleCategoryClick(category.code)}
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{getCPVLabel(category.code)}</h3>
              <p className="text-gray-600 text-sm mb-4">CPV: {category.code}</p>
            </div>
            <button
              onClick={(e) => handleViewAds(category.code, e)}
              className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-md text-sm transition-colors mt-auto cursor-pointer flex items-center justify-between"
            >
              <span>Se {category.numberOfAds} annonser</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesSection 