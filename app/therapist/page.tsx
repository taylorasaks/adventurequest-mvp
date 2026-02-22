"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function TherapistLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    router.push("/therapist/dashboard")
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#f5f7fa] px-4 font-mono">
      <Card className="w-full max-w-md border-[#dde3eb] bg-white shadow-xl">
        <CardHeader className="flex flex-col items-center gap-3 pb-2 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a2b4a]">
            <span className="text-xl font-bold text-white">TC</span>
          </div>
          <h1 className="text-2xl font-bold text-[#1a2b4a]">TC-Living</h1>
          <p className="text-sm text-[#6b7b94]">Therapist Portal</p>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="flex flex-col gap-5 px-8 py-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-semibold text-[#3a4a64]">
                Therapist Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@clinic.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[#dde3eb] bg-[#f9fafb] text-[#1a2b4a] placeholder:text-[#b0bac9]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="text-sm font-semibold text-[#3a4a64]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[#dde3eb] bg-[#f9fafb] text-[#1a2b4a] placeholder:text-[#b0bac9]"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#1a2b4a] text-white hover:bg-[#243658]"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </Button>
          </CardContent>
        </form>

        <CardFooter className="justify-center pb-8">
          <p className="text-sm text-[#8a96aa]">
            Patient?{" "}
            <Link href="/" className="font-semibold text-[#4a7cca] hover:underline">
              Go to the app.
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
