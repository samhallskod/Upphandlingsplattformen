import ProcurementTable from './ProcurementTable'

const RecentProcurementsTable = () => {
  const procurements = [
    {
      title: 'IT-system för digitalisering',
      organization: 'IT-avdelningen',
      cpvCodes: ['48000000', '72000000'],
      dueDate: '2025-08-15',
      status: 'Öppen'
    },
    {
      title: 'Renovering av skolbyggnad',
      organization: 'Fastighetskontoret',
      cpvCodes: ['45000000', '45200000'],
      dueDate: '2025-08-30',
      status: 'Snart stängd'
    },
    {
      title: 'Vårdpersonal för äldreboende',
      organization: 'Äldreförvaltningen',
      cpvCodes: ['85000000', '85100000'],
      dueDate: '2025-09-28',
      status: 'Öppen'
    }
  ]
  
  return (
    <div className="mb-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <ProcurementTable procurements={procurements} />
      </div>
    </div>
  )
}

export default RecentProcurementsTable