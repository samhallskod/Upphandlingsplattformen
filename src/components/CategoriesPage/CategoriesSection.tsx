import { useState, useMemo, useCallback, useEffect } from 'react'
import CategoryRow from './CategoryRow'
import CategoryRowLoadingSkeleton from './CategoryRowLoadingSkeleton'
import { useCategories } from '../../hooks/useCategories'
import CopyIcon from '../icons/CopyIcon'

interface CategoryItem {
  id: string
  code: string
  name: string
  description: string
  activeProcurements: number
  children?: CategoryItem[]
  isExpanded?: boolean
}

const CategoriesSection: React.FC = () => {
  const { categories, loading, error } = useCategories()
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const searchParam = urlParams.get('search')
    if (searchParam) {
      setSearchTerm(searchParam)
      setDebouncedSearchTerm(searchParam)
    }
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)
    if (searchTerm.trim()) {
      url.searchParams.set('search', searchTerm)
    } else {
      url.searchParams.delete('search')
    }
    window.history.replaceState({}, '', url.toString())
  }, [searchTerm])

  console.log('CategoriesSection render:', { loading, error, categoriesCount: categories.length })

  // Debounce search term to improve performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const searchLower = useMemo(() => debouncedSearchTerm.toLowerCase().trim(), [debouncedSearchTerm])

  const countMatches = useMemo(() => {
    if (!searchLower) return 0
    
    const isNumericSearch = /^\d+$/.test(searchLower)
    
    const countMatchesInCategory = (category: CategoryItem): number => {
      let count = 0

      if (isNumericSearch) {
        if (category.code.toLowerCase().startsWith(searchLower)) {
          count++
        }
      } else {
        if (category.name.toLowerCase().includes(searchLower)) {
          count++
        }
      }

      if (category.children) {
        count += category.children.reduce((sum, child) => sum + countMatchesInCategory(child), 0)
      }
      
      return count
    }
    
    return categories.reduce((sum, category) => sum + countMatchesInCategory(category), 0)
  }, [categories, searchLower])

  const filteredCategories = useMemo(() => {
    if (!searchLower) return categories
    
    const isNumericSearch = /^\d+$/.test(searchLower)
    
    const filterCategories = (category: CategoryItem): CategoryItem | null => {
      let currentMatches = false
      
      if (isNumericSearch) {
        currentMatches = category.code.toLowerCase().startsWith(searchLower)
      } else {
        currentMatches = category.name.toLowerCase().includes(searchLower)
      }

      if (currentMatches) {
        const matchingChildren = category.children?.map(filterCategories).filter((child): child is CategoryItem => child !== null) || []
        return {
          ...category,
          children: matchingChildren,
          isExpanded: matchingChildren.length > 0
        }
      }

      if (category.children && category.children.length > 0) {
        const filteredChildren = category.children
          .map(filterCategories)
          .filter(Boolean) as CategoryItem[]
        
        if (filteredChildren.length > 0) {
          return {
            ...category,
            children: filteredChildren,
            isExpanded: true
          }
        }
      }
      
      return null
    }
    
    const result: CategoryItem[] = []
    for (const category of categories) {
      const filtered = filterCategories(category)
      if (filtered) {
        result.push(filtered)
      }
    }
    return result
  }, [categories, searchLower])

  const handleToggle = useCallback((categoryId: string, categoryCode: string) => {
    console.log('Category toggled:', categoryId, categoryCode)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, [])

  if (loading) {
    console.log('Rendering loading state')
    return (
      <div className="bg-white rounded-lg shadow-md mb-12">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">CPV-kategorier</h2>
          <p className="text-gray-600 mt-2">Laddar kategorier...</p>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5].map((index) => (
            <CategoryRowLoadingSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    console.log('Rendering error state')
    return (
      <div className="bg-white rounded-lg shadow-md mb-12">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">CPV-kategorier</h2>
        </div>
        <div className="p-6">
          <div className="text-red-600">
            <p>Ett fel uppstod vid laddning av kategorier: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md mb-8 sm:mb-12">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">CPV-kategorier</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">Klicka på en kategori för att se underkategorier.</p>
        <div className="flex items-center gap-1 mt-2">
          <p className="text-xs sm:text-sm text-gray-600">Vill du <span className="font-bold text-purple-600">kopiera</span> en CPV-kod? Klicka på kopieringsikonen:</p>
          <CopyIcon />
        </div>

        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Sök efter kategori eller CPV-kod..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-3 sm:px-4 py-2 pl-8 sm:pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm sm:text-base"
            />
            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          {searchTerm && (
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Hittade {countMatches} träffar
            </p>
          )}
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {filteredCategories.map((category) => (
          <CategoryRow
            key={`${category.id}-${searchLower}`}
            category={category}
            onToggle={handleToggle}
            searchTerm={searchTerm}
          />
        ))}
      </div>
      {searchTerm && countMatches === 0 && (
        <div className="p-6 text-center text-gray-500">
          <p>Inga kategorier hittades för "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}

export default CategoriesSection