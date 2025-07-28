const Pill = ({ children, color }: { children: React.ReactNode, color: 'purple' | 'green' | 'yellow' | 'red' }) => {
  const colorStyle = {
    purple: {
      backgroundColor: '#6B287920',
      color: '#6B2879'
    },
    green: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    yellow: {
      backgroundColor: '#fef3c7',
      color: '#92400e'
    },
    red: {
      backgroundColor: '#DC354520',
      color: '#DC3545'
    }
  }

  return (
    <div className="inline-block text-xs px-2 py-1 rounded-full" style={colorStyle[color]}>
      { children }
    </div>
  )
}

export default Pill