import Pill from '../../Pill'
import { getLabelByCPVCode } from 'cpv-eu'

const ProcurementTableRow = ({ title, organization, cpvCodes, dueDate, status }: { title: string, organization: string, cpvCodes: string[], dueDate: string, status: string }) => {
  const daysLeft = () => {
    const today = new Date()
    const convertedDueDate = new Date(dueDate)
    const timeDiff = convertedDueDate.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    return daysDiff
  }

  const getPillColor = () => {
    if (status === 'Öppen') {
      return 'green'
    } else if (status === 'Snart stängd') {
      return 'yellow'
    } else if (status === 'Stängd') {
      return 'red'
    }
    return 'purple'
  }

  const getCPVLabel = (code: string) => {
    try {
      return getLabelByCPVCode(code, "sv")
    } catch {
      return null
    }
  }

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          { title }
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        { organization }
      </td>
      <td className="px-6 py-4">
        <div className="space-y-1">
          {cpvCodes.map((code, index) => {
            const cpvLabel = getCPVLabel(code)
            
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  <Pill color="purple">
                    {code}
                  </Pill>
                </div>
                <span className="text-sm text-gray-900 break-words">
                  {cpvLabel || 'Okänd kategori'}
                </span>
              </div>
            )
          })}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {daysLeft() > 0 && <div className="text-sm font-medium" style={{ color: '#6B2879' }}>{ daysLeft() } dagar kvar</div>}
        <div className="text-sm text-gray-500">{ dueDate }</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Pill color={getPillColor()}>
          { status }
        </Pill>
      </td>
    </tr>
  )
}

export default ProcurementTableRow