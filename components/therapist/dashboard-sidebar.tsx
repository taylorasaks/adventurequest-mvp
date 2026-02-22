"use client"

import { Users, ClipboardList, BarChart3, LogOut } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "My Patients", icon: Users, active: true },
  { label: "Assign Modules", icon: ClipboardList, active: false },
  { label: "Progress Reports", icon: BarChart3, active: false },
]

export function DashboardSidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-[#e2e8f0] bg-[#f8fafc]">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-[#e2e8f0] px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a2b4a]">
          <span className="text-sm font-bold text-white">TC</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#1a2b4a]">TC-Living</span>
          <span className="text-xs text-[#8a96aa]">Therapist Portal</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              item.active
                ? "bg-[#1a2b4a] text-white"
                : "text-[#6b7b94] hover:bg-[#edf0f5] hover:text-[#1a2b4a]"
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-[#e2e8f0] px-3 py-4">
        <Link
          href="/therapist"
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[#6b7b94] transition-colors hover:bg-[#edf0f5] hover:text-[#1a2b4a]"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </Link>
      </div>
    </aside>
  )
}
