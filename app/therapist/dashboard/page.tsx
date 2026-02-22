import { DashboardSidebar } from "@/components/therapist/dashboard-sidebar"
import { PatientTable } from "@/components/therapist/patient-table"

export default function TherapistDashboard() {
  return (
    <div className="flex h-dvh bg-[#f5f7fa] font-mono">
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#e2e8f0] bg-white px-8 py-5">
          <div>
            <h1 className="text-xl font-bold text-[#1a2b4a]">My Patients</h1>
            <p className="text-sm text-[#8a96aa]">
              Manage and monitor patient progress
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2b4a] text-sm font-bold text-white">
              DR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#1a2b4a]">Dr. Smith</span>
              <span className="text-xs text-[#8a96aa]">Therapist</span>
            </div>
          </div>
        </header>

        {/* Table Area */}
        <div className="flex-1 overflow-auto p-8">
          <PatientTable />
        </div>
      </main>
    </div>
  )
}
