import ProcurementTableHeader from './ProcurementTableHeader'
import ProcurementTableRow from './ProcurementTableRow'

interface Procurement {
  title: string
  organization: string
  cpvCodes: string[]
  dueDate: string
  status: string
}

const ProcurementTable = ({ procurements }: { procurements: Procurement[] }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <ProcurementTableHeader />
      
      <tbody className="bg-white divide-y divide-gray-200">
        {procurements.map((procurement, index) => (
          <ProcurementTableRow 
            key={index} 
            title={procurement.title}
            organization={procurement.organization}
            cpvCodes={procurement.cpvCodes}
            dueDate={procurement.dueDate}
            status={procurement.status}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ProcurementTable