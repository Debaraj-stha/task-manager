"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select"
import { useRouter, useParams } from "next/navigation"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"

const CreateTaskForm = () => {
  const router = useRouter()
  const { workspace } = useParams() // Dynamic workspace from route

  // Form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [notes, setNotes] = useState("")
  const [department, setDepartment] = useState("")
  const [priority, setPriority] = useState("")
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined)
  const [assignedMembers, setAssignedMembers] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  const departments = ["Design", "Development", "Marketing", "HR"]
  const priorities = ["Low", "Medium", "High", "Critical"]
  const members = ["John", "Emma", "Sam", "Sophia", "Alex"]

  const handleAddMember = (member: string) => {
    if (!assignedMembers.includes(member)) setAssignedMembers([...assignedMembers, member])
  }

  const handleRemoveMember = (member: string) => {
    setAssignedMembers(assignedMembers.filter((m) => m !== member))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTask = {
      title,
      description,
      notes,
      workspace: workspace || "General",
      department,
      priority,
      dueDate,
      assignedMembers,
    }
    console.log("Creating Task:", newTask)
    router.push(`/tasks/${workspace}`)
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          Create New Task in "{workspace}" Workspace
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Task Title */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-gray-300">Task Title</Label>
            <Input
              id="title"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="text-gray-300">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500"
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="notes" className="text-gray-300">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Enter additional notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500"
            />
          </div>

          {/* Department & Priority */}
          <div className="flex flex-col md:flex-row gap-4 flex-wrap">
            <div className="flex flex-col gap-2">
              <Label htmlFor="department" className="text-gray-300">Department</Label>
              <Select onValueChange={setDepartment}>
                <SelectTrigger id="department" className="bg-gray-800 text-white border-gray-700">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-white">
                  <SelectGroup>
                    <SelectLabel>Departments</SelectLabel>
                    {departments.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="priority" className="text-gray-300">Priority</Label>
              <Select onValueChange={setPriority}>
                <SelectTrigger id="priority" className="bg-gray-800 text-white border-gray-700">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-white">
                  <SelectGroup>
                    <SelectLabel>Priorities</SelectLabel>
                    {priorities.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="dueDate" className="text-gray-300">Due Date</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-48 justify-between bg-gray-800 text-white hover:bg-gray-700"
                >
                  {dueDate ? dueDate.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dueDate}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDueDate(date)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Assign Members */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="members" className="text-gray-300">Assign Members</Label>
            <Select onValueChange={handleAddMember}>
              <SelectTrigger id="members" className="bg-gray-800 text-white border-gray-700">
                <SelectValue placeholder="Select Member" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 text-white">
                <SelectGroup>
                  <SelectLabel>Members</SelectLabel>
                  {members.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="flex flex-wrap gap-2 mt-2">
              {assignedMembers.map((m) => (
                <span
                  key={m}
                  onClick={() => handleRemoveMember(m)}
                  className="cursor-pointer px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 text-sm hover:bg-blue-500 hover:text-white transition"
                >
                  {m} ✕
                </span>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 w-full py-3 text-lg font-semibold"
          >
            Create Task
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateTaskForm
