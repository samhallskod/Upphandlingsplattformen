const AboutSection = ({ children, expandedSections, toggleSection, title, sectionKey }: { children: React.ReactNode, expandedSections: string, toggleSection: (sectionKey: string) => void, title: string, sectionKey: string }) => {
  const isExpanded = expandedSections === sectionKey
  
  return (
    <div id={sectionKey} className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8 relative group">
      {/* Animated top border that expands from left to right */}
      <div className={`absolute top-0 left-0 h-1 w-full bg-purple-600 transform transition-transform duration-300 origin-left ${isExpanded ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
      
      {/* Animated left border that expands from top to bottom */}
      <div className={`absolute top-0 left-0 w-1 h-full bg-purple-600 transform transition-transform duration-300 origin-top ${isExpanded ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}></div>
      
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => toggleSection(sectionKey)}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        <span className="text-gray-400 text-lg">
          {isExpanded ? '▼' : '▶'}
        </span>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-200 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  )
}

export default AboutSection