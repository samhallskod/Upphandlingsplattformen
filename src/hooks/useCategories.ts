import { useState, useEffect } from 'react'
import { getAllCategories } from 'cpv-eu'

interface CategoryItem {
  id: string
  code: string
  name: string
  description: string
  activeProcurements: number
  children?: CategoryItem[]
  isExpanded?: boolean
}

interface CPVCategory {
  code?: string
  label?: string
  children?: CPVCategory[]
}

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadAllCategories = async () => {
      try {
        console.log('Loading categories...')
        setLoading(true)
        setError(null)
        
        // Add a small delay to ensure loading state is visible
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Get root categories with their children
        const rootCategories = getAllCategories("sv", 4)
        console.log('Root categories loaded:', rootCategories.length)
        
        // Transform root categories and their children recursively
        const transformCategory = (cpvCategory: CPVCategory): CategoryItem => ({
          id: cpvCategory.code || 'unknown',
          code: cpvCategory.code || 'N/A',
          name: cpvCategory.label || 'Unknown Category',
          description: `CPV-kod: ${cpvCategory.code || 'N/A'}`,
          activeProcurements: Math.floor(Math.random() * 200) + 50,
          children: cpvCategory.children?.map(transformCategory) || [],
          isExpanded: false
        })

        const transformedCategories = rootCategories.map(transformCategory)
        console.log('Transformed categories:', transformedCategories.length)
        setCategories(transformedCategories)
      } catch (err) {
        console.error('Error loading categories:', err)
        setError(err instanceof Error ? err.message : 'Failed to load categories')
      } finally {
        console.log('Setting loading to false')
        setLoading(false)
      }
    }

    loadAllCategories()
  }, [])

  console.log('useCategories state:', { loading, error, categoriesCount: categories.length })

  return { categories, loading, error }
} 