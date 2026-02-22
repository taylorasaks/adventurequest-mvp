"use client"

import { useState } from "react"
import { Eye, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const patients = [
  { id: 1, name: "Alex Rivera", landscape: "Savannah", fuel: 75, streak: 12, lastActive: "Today" },
  { id: 2, name: "Jordan Lee", landscape: "Ocean", fuel: 45, streak: 5, lastActive: "Yesterday" },
  { id: 3, name: "Sam Nguyen", landscape: "Savannah", fuel: 90, streak: 21, lastActive: "Today" },
  { id: 4, name: "Taylor Brooks", landscape: "Ocean", fuel: 30, streak: 2, lastActive: "3 days ago" },
  { id: 5, name: "Morgan Chen", landscape: "Savannah", fuel: 60, streak: 8, lastActive: "Today" },
]

const modules = [
  "Deep Breathing",
  "Self-Advocacy",
  "Positive Self-Talk",
]

export function PatientTable() {
  const [assignModalPatient, setAssignModalPatient] = useState<typeof patients[0] | null>(null)
  const [selectedModule, setSelectedModule] = useState("")
  const [notes, setNotes] = useState("")

  function handleSend() {
    setAssignModalPatient(null)
    setSelectedModule("")
    setNotes("")
  }

  return (
    <>
      <div className="rounded-xl border border-[#e2e8f0] bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-[#e2e8f0] hover:bg-transparent">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-[#8a96aa]">
                Patient Name
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-[#8a96aa]">
                Current Landscape
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-[#8a96aa]">
                Fuel Level
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-[#8a96aa]">
                Streak
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-[#8a96aa]">
                Last Active
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-[#8a96aa]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id} className="border-[#e2e8f0]">
                <TableCell className="font-medium text-[#1a2b4a]">
                  {patient.name}
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    patient.landscape === "Savannah"
                      ? "bg-[#fef3c7] text-[#92400e]"
                      : "bg-[#dbeafe] text-[#1e40af]"
                  }`}>
                    {patient.landscape}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={patient.fuel}
                      className="h-2 w-20 bg-[#e2e8f0]"
                    />
                    <span className="text-xs text-[#6b7b94]">{patient.fuel}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-[#1a2b4a]">
                  {patient.streak} days
                </TableCell>
                <TableCell className="text-sm text-[#6b7b94]">
                  {patient.lastActive}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#dde3eb] text-[#4a7cca] hover:bg-[#edf3fb] hover:text-[#3663a8]"
                    >
                      <Eye className="mr-1 h-3.5 w-3.5" />
                      View Progress
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#1a2b4a] text-white hover:bg-[#243658]"
                      onClick={() => setAssignModalPatient(patient)}
                    >
                      <Send className="mr-1 h-3.5 w-3.5" />
                      Assign Quest
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Assign Quest Modal */}
      <Dialog open={!!assignModalPatient} onOpenChange={() => setAssignModalPatient(null)}>
        <DialogContent className="max-w-md border-[#dde3eb] bg-white font-mono">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-[#1a2b4a]">
              Assign Quest
            </DialogTitle>
            <DialogDescription className="text-sm text-[#6b7b94]">
              Assign a new module to {assignModalPatient?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5 py-4">
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-semibold text-[#3a4a64]">
                Select Module
              </Label>
              <Select value={selectedModule} onValueChange={setSelectedModule}>
                <SelectTrigger className="border-[#dde3eb] bg-[#f9fafb] text-[#1a2b4a]">
                  <SelectValue placeholder="Choose a module..." />
                </SelectTrigger>
                <SelectContent>
                  {modules.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-semibold text-[#3a4a64]">
                Therapist Notes
              </Label>
              <Textarea
                placeholder="Add notes for this assignment..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-24 border-[#dde3eb] bg-[#f9fafb] text-[#1a2b4a] placeholder:text-[#b0bac9]"
              />
            </div>
            <Button
              onClick={handleSend}
              className="w-full bg-[#1a2b4a] text-white hover:bg-[#243658]"
            >
              <Send className="mr-2 h-4 w-4" />
              Send to Patient
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
