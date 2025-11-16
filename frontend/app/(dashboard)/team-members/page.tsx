"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Mail, Trash } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const projects = [
    {
        id: 1,
        name: "Project Alpha",
        members: [
            { name: "John Doe", role: "Project Manager", initials: "JD" },
            { name: "Sarah Lee", role: "UI/UX Designer", initials: "SL" },
        ],
    },
    {
        id: 2,
        name: "Project Beta",
        members: [
            { name: "Mark Smith", role: "Frontend Developer", initials: "MS" },
            { name: "Emma Clark", role: "Backend Developer", initials: "EC" },
            { name: "David Kim", role: "QA Tester", initials: "DK" },
        ],
    },
];

export default function TeamMembersPage() {
    const [selectedProjectName, setProjectName] = useState(projects[0].name)

    const currentProject = projects.find(p => p.name === selectedProjectName)

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Team Members</h1>
                    <p className="text-muted-foreground text-sm">
                        Manage your workspace collaborators
                    </p>
                </div>
                <Button className="flex gap-1">
                    <Plus className="w-4 h-4" /> Add Member
                </Button>
            </div>
        {/* project */}
           <Select value={selectedProjectName} onValueChange={setProjectName}>
  <SelectTrigger>
    <SelectValue placeholder="Select project" />
  </SelectTrigger>
  <SelectContent>
    {projects.map((project) => (
      <SelectItem key={project.id} value={project.name}>
        {project.name}
      </SelectItem>
    ))}
  </SelectContent>
</Select>


            {/* Team Members Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
                {currentProject?.members.map((member, index) => (
                    <Card key={index} className="group transition hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-3">
                            <Avatar className="h-12 w-12">
                                <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="leading-tight">{member.name}</CardTitle>
                                <Badge variant="outline" className="text-xs mt-1">
                                    {member.role}
                                </Badge>
                            </div>
                        </CardHeader>

                        <CardContent className="flex justify-between pt-2">
                            <Button variant="ghost" size="sm" className="gap-1">
                                <Mail className="w-4 h-4" /> Message
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 gap-1 hover:text-red-600"
                            >
                                <Trash className="w-4 h-4" /> Remove
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
