import React, { useState, useCallback, useMemo } from 'react'

interface CategoryItem {
  id: string
  code: string
  name: string
  description: string
  activeProcurements: number
  children?: CategoryItem[]
  isExpanded?: boolean
}

interface CategoryRowProps {
  category: CategoryItem
  level?: number
  onToggle: (categoryId: string, categoryCode: string) => void
  searchTerm?: string
}

const CategoryRow: React.FC<CategoryRowProps> = ({ 
  category, 
  level = 0, 
  onToggle,
  searchTerm = ''
}) => {
  const [localExpanded, setLocalExpanded] = useState(category.isExpanded || false)
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false)

  const isExpanded = localExpanded

  const hasChildren = useMemo(() => category.children && category.children.length > 0, [category.children])
  
  const getIndentationClass = useCallback((level: number): string => {
    switch (level) {
      case 0: return ''
      case 1: return 'ml-3 sm:ml-6'
      case 2: return 'ml-6 sm:ml-12'
      case 3: return 'ml-9 sm:ml-18'
      case 4: return 'ml-12 sm:ml-24'
      default: return 'ml-12 sm:ml-24'
    }
  }, [])

  const highlightText = useCallback((text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text
    
    const isNumericSearch = /^\d+$/.test(searchTerm.toLowerCase())
    const searchLower = searchTerm.toLowerCase()
    const textLower = text.toLowerCase()
    
    if (isNumericSearch) {
      if (textLower.startsWith(searchLower)) {
        const before = text.substring(0, searchTerm.length)
        const after = text.substring(searchTerm.length)
        return (
          <>
            <span style={{ backgroundColor: '#fef3c7' }}>{before}</span>
            {after}
          </>
        )
      }
    } else {
      const index = textLower.indexOf(searchLower)
      if (index !== -1) {
        const before = text.substring(0, index)
        const match = text.substring(index, index + searchTerm.length)
        const after = text.substring(index + searchTerm.length)
        return (
          <>
            {before}
            <span style={{ backgroundColor: '#fef3c7' }}>{match}</span>
            {after}
          </>
        )
      }
    }
    
    return text
  }, [])

  const handleToggle = useCallback(() => {
    setLocalExpanded(!localExpanded)
    onToggle(category.id, category.code)
  }, [localExpanded, category.id, category.code, onToggle])

  const handleCopy = useCallback((e: React.MouseEvent) => {
    e.stopPropagation() // Prevent row toggle when clicking copy
    navigator.clipboard.writeText(category.code).then(() => {
      setShowCopiedTooltip(true)
      setTimeout(() => {
        setShowCopiedTooltip(false)
      }, 1000)
    }).catch(err => {
      console.error('Failed to copy: ', err)
    })
  }, [category.code])

  const handleViewAds = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(`/procurements?category=${category.code}`, '_blank')
  }, [category.code])

  return (
    <div className={`border-b border-gray-200 last:border-b-0 border-l-4 pl-2 sm:pl-4 transition-colors relative ${
      isExpanded ? 'border-l-purple-600' : 'border-l-transparent hover:border-l-purple-600'
    }`}>
      {isExpanded && (
        <div className="absolute top-0 left-0 h-1 bg-purple-600 animate-top-border"></div>
      )}
      <div 
        className={`flex items-center justify-between p-3 sm:p-4 transition-colors ${getIndentationClass(level)} ${
          hasChildren ? 'cursor-pointer' : 'cursor-default'
        }`}
        onClick={hasChildren ? handleToggle : undefined}
      >
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
          <div className="flex items-center space-x-1 sm:space-x-2">
            {hasChildren && (
              <span className="text-gray-400 text-xs sm:text-sm">
                {isExpanded ? '▼' : '▶'}
              </span>
            )}
            <span className="font-mono text-xs sm:text-sm text-gray-600 min-w-[60px] sm:min-w-[80px]">
              {highlightText(category.code, searchTerm)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-lg font-semibold text-gray-900 truncate">{highlightText(category.name, searchTerm)}</h3>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <p className="text-xs sm:text-sm text-gray-600 truncate">{category.description}</p>
              <div className="relative flex-shrink-0">
                <button
                  onClick={handleCopy}
                  className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  title="Kopiera CPV-kod"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                {showCopiedTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 whitespace-nowrap">
                    Kopierade "{category.code}" till urklipp
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          <div className="text-right">
            <p className="text-lg sm:text-2xl font-bold text-purple-600">{category.activeProcurements}</p>
            <p className="text-xs text-gray-500">aktiva annonser</p>
          </div>
          <button
            onClick={handleViewAds}
            className="text-white bg-purple-600 hover:bg-purple-700 transition-colors cursor-pointer p-1.5 sm:p-2 rounded-md flex-shrink-0"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {isExpanded && hasChildren && (
        <div className="-ml-4 -mr-4 px-4">
          {category.children?.map(child => (
            <CategoryRow
              key={child.id}
              category={child}
              level={level + 1}
              onToggle={onToggle}
              searchTerm={searchTerm}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryRow