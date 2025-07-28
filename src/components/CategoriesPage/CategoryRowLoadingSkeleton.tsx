const CategoryRowLoadingSkeleton = () => {
  return (
    <div className="border-b border-gray-200 last:border-b-0 pl-4">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-100"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
          </div>
        </div>
        <div className="text-right">
          <div className="h-8 bg-gray-200 rounded animate-pulse mb-1"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
        </div>
      </div>
    </div>
  )
}

export default CategoryRowLoadingSkeleton 