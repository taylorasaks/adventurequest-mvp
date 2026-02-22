"use client"

import { useState } from "react"
import { Map, BookOpen } from "lucide-react"
import { MyMap } from "@/components/client/my-map"
import { Journal } from "@/components/client/journal"

export default function ClientApp() {
  const [activeTab, setActiveTab] = useState<"map" | "journal">("map")

  return (
    <div className="flex h-dvh flex-col bg-background">
      {/* Main Content */}
      <main className="flex min-h-0 flex-1 flex-col">
        {activeTab === "map" ? <MyMap /> : <Journal />}
      </main>

      {/* Bottom Tab Bar */}
      <nav className="flex shrink-0 border-t border-[#c8eae4] bg-white" aria-label="Main navigation">
        <button
          onClick={() => setActiveTab("map")}
          className={`flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${
            activeTab === "map"
              ? "text-[#4ECDC4]"
              : "text-[#a0a0a0]"
          }`}
          aria-current={activeTab === "map" ? "page" : undefined}
        >
          <Map className="h-6 w-6" />
          <span className="text-xs font-bold">My Map</span>
        </button>
        <button
          onClick={() => setActiveTab("journal")}
          className={`flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${
            activeTab === "journal"
              ? "text-[#FF9F43]"
              : "text-[#a0a0a0]"
          }`}
          aria-current={activeTab === "journal" ? "page" : undefined}
        >
          <BookOpen className="h-6 w-6" />
          <span className="text-xs font-bold">Journal</span>
        </button>
      </nav>
    </div>
  )
}
