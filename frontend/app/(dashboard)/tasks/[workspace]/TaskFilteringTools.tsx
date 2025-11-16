'use client'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import { TaskStatus } from '@/types/task';
import { capitalize } from '@/utils/helper';
interface TaskFilteringToolsProps{
    selectedWorkspace?:string
    setSelectedWorkspace:(val:string)=>void
}
const TaskFilteringTools = ({selectedWorkspace,setSelectedWorkspace}:TaskFilteringToolsProps) => {


  const [currentSelectedStatus, setCurrentSelectedStatus] = useState<TaskStatus | "all">("all")

  const workspaceNames = ["office", "design", "production"];

  const sortOptions = [
    { label: "Deadline ↑", value: "deadline_asc" },
    { label: "Deadline ↓", value: "deadline_desc" },
    { label: "Priority ↑", value: "priority_asc" },
    { label: "Priority ↓", value: "priority_desc" },
    { label: "Created Date ↑", value: "createdAt_asc" },
    { label: "Created Date ↓", value: "createdAt_desc" },
    { label: "Name A → Z", value: "name_asc" },
    { label: "Name Z → A", value: "name_desc" },
    { label: "Workspace A → Z", value: "workspace_asc" },
    { label: "Workspace Z → A", value: "workspace_desc" },
    { label: "Status A → Z", value: "status_asc" },
    { label: "Status Z → A", value: "status_desc" },
  ];
    const status = ["all", "pending", "review", "in progress", "completed"]

  return (
    <div className="flex flex-col md:flex-row gap-4 ">
         <Select onValueChange={setSelectedWorkspace} value={selectedWorkspace}>
          <SelectTrigger className="min-w-[200px]">
            <SelectValue placeholder="Filter by workspace" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Workspace</SelectLabel>
              {workspaceNames.map((name) => (
                <SelectItem key={name} value={name}>
                  {capitalize(name)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select >
          <SelectTrigger className="min-w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort By</SelectLabel>
              {sortOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <ToggleGroup type="single" value={currentSelectedStatus} onValueChange={(value: any) => setCurrentSelectedStatus(value)} aria-label="Task status">
          {
            status.map((status) => <Toggle value={status} key={status}>{status.toUpperCase()}</Toggle>)
          }
        </ToggleGroup>
   </div>
  )
}

export default TaskFilteringTools