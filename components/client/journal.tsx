"use client"

import { useState } from "react"
import { Mic } from "lucide-react"

export function Journal() {
  const [isRecording, setIsRecording] = useState(false)

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center bg-gradient-to-b from-[#FFF5E6] via-[#FFF0D9] to-[#FFE8C8] px-6 py-8">
      {/* Greeting */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#5a3e1b]">
          Good Morning! 🌅
        </h1>
        <p className="mt-1 text-base text-[#8a6d4a]">
          {"Let's check in with yourself today."}
        </p>
      </div>

      {/* Question Card */}
      <div className="mb-10 w-full max-w-sm rounded-3xl bg-white/80 px-8 py-10 text-center shadow-lg backdrop-blur-sm">
        <span className="mb-4 block text-5xl">😊</span>
        <h2 className="text-xl font-bold leading-relaxed text-[#5a3e1b]">
          What are you excited for today?
        </h2>
      </div>

      {/* Mic Button */}
      <div className="mb-8 flex flex-col items-center gap-3">
        <button
          onMouseDown={() => setIsRecording(true)}
          onMouseUp={() => setIsRecording(false)}
          onMouseLeave={() => setIsRecording(false)}
          onTouchStart={() => setIsRecording(true)}
          onTouchEnd={() => setIsRecording(false)}
          className={`flex h-24 w-24 items-center justify-center rounded-full shadow-xl transition-all ${
            isRecording
              ? "scale-110 bg-[#FF6B6B] ring-4 ring-[#FF6B6B]/40"
              : "bg-[#4ECDC4] hover:bg-[#3dbdb5]"
          }`}
          aria-label="Hold to record"
        >
          <Mic className="h-10 w-10 text-white" />
        </button>
        <span className="text-sm font-bold text-[#8a6d4a]">
          {isRecording ? "Recording... 🎙️" : "Hold to Record 🎙️"}
        </span>
      </div>

      {/* Streak Counter */}
      <div className="flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 shadow-md">
        <span className="text-2xl">🔥</span>
        <span className="text-lg font-bold text-[#5a3e1b]">5 Day Streak!</span>
      </div>
    </div>
  )
}
