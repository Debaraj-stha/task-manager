"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"]
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const todayIndex = 3 // Thu

export default function Timeline() {
  return (
    <Card className="p-4  w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Online Course Timeline</h2>
          <p className="text-sm text-muted-foreground">
            Manage your tasks and time in just one page
          </p>
        </div>
        <Button variant="outline" className="text-sm rounded-md">
          Everyday
        </Button>
      </div>

      {/* Timeline grid */}
      <div className="relative">
        {/* Grid */}
        <div className="grid grid-cols-8 gap-2">
          <div></div>
          {days.map(day => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-8 gap-2 mt-2">
          {/* Time labels */}
          <div className="space-y-10">
            {hours.map(time => (
              <div key={time} className="text-sm text-muted-foreground">
                {time}
              </div>
            ))}
          </div>

          {/* Slots */}
          <div className="col-span-7 relative border-l border-border">
            {/* Today Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-blue-500"
              style={{ left: `${(todayIndex + 0.5) * (100 / 7)}%` }}
            />

            {/* Today label */}
            <div
              className="absolute -top-4 -translate-x-1/2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full"
              style={{ left: `${(todayIndex + 0.5) * (100 / 7)}%` }}
            >
              Today
            </div>

            {/* Example events */}
            <div className="absolute left-[10%] top-[20%] w-[130px] h-10 bg-white border rounded-md shadow-sm p-2 text-xs">
              Team Meeting
            </div>

            <div className="absolute left-[40%] top-[40%] w-40 h-10 bg-white border rounded-md shadow-sm p-2 text-xs">
              Create Profile Landing Page
            </div>

            <div className="absolute left-[60%] top-[10%] w-40 h-10 bg-white border rounded-md shadow-sm p-2 text-xs">
              Create Home Landing Page
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
