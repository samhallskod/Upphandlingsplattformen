import RecentProcurementsTable from '../Table/RecentProcurementsTable'

const RecentProcurements = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Senaste annonserade upphandlingar</h2>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-colors">
          Visa alla upphandlingar
        </button>
      </div>
      <RecentProcurementsTable />
    </div>
  )
}

export default RecentProcurements