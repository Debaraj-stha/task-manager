"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const events = [
  { date: 5, title: "Team Meeting", color: "bg-blue-500" },
  { date: 12, title: "UI Design Update", color: "bg-green-500" },
  { date: 19, title: "Content Review", color: "bg-yellow-500" },
  { date: 22, title: "Client Demo", color: "bg-red-500" },
]

export default function CalendarView() {
  const [view, setView] = useState("month")

  return (
    <Card className="p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">Calendar</h2>

        <div className="flex gap-2">
          <Button variant="outline">Today</Button>

          <ToggleGroup
            type="single"
            value={view}
            onValueChange={(value) => value && setView(value)}
          >
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>

          <Button className="bg-blue-600 text-white">+ Add Task</Button>
        </div>
      </div>

      {/* View Renderer */}
      {view === "month" && <MonthView />}
      {view === "week" && <WeekView />}
      {view === "day" && <DayView />}
    </Card>
  )
}

/* Month View */
function MonthView() {
  return (
    <>
      <div className="grid grid-cols-7 text-center text-sm font-medium text-muted-foreground">
        {days.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <ScrollArea className="h-[70vh] border rounded-lg">
        <div className="grid grid-cols-7 gap-2 p-2">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
            const task = events.find((e) => e.date === day)
            return (
              <div key={day} className="border p-2 rounded-md h-28 relative text-sm">
                <span className="text-muted-foreground">{day}</span>
                {task && (
                  <div className={cn(
                    "text-white mt-1 p-1 rounded-md text-xs truncate cursor-pointer",
                    task.color
                  )}>
                    {task.title}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </ScrollArea>
    </>
  )
}

/* Week View */
function WeekView() {
  return (
    <div className="grid grid-cols-7 gap-4 h-40 border rounded-lg p-4 text-center">
      {days.map((d) => (
        <div key={d} className="flex items-center justify-center border rounded-md">
          {d}
        </div>
      ))}
    </div>
  )
}

/* Day View */
function DayView() {
  return (
    <div className="border rounded-lg h-40 p-4 flex items-center justify-center">
      <p className="text-muted-foreground">No events today</p>
    </div>
  )
}
