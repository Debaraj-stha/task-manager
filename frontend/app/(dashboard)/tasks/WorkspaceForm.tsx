"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const WorkspaceForm = () => {
    const [members, setMembers] = useState<string[]>([])
  
    const availableMembers = ["John", "Emma", "Sam", "Sophia", "Alex"]
    const organizations = ["XYZ Corp", "ABC Pvt", "PQR Ltd"]
    const departments = ["Design", "Development", "Marketing", "HR"]

    const handleAddMember = (value: string) => {
        if (!members.includes(value)) {
            setMembers([...members, value])
        }
    }

    const removeMember = (value: string) => {
        setMembers(members.filter(m => m !== value))
    }

    return (
        <form className="space-y-6 p-4 bg-gray-900 rounded-xl text-white">
            
            {/* Workspace Name */}
            <div className="flex flex-col gap-2">
                <Label htmlFor="workspace-name" className="text-gray-200">Workspace Name</Label>
                <Input
                    id="workspace-name"
                    name="workspace-name"
                    placeholder="e.g. Office, Design Team"
                    className="bg-gray-800 border-gray-700"
                />
            </div>

            {/* Organization */}
            <div className="flex flex-col gap-2">
                <Label className="text-gray-200">Select Organization</Label>
                <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Choose organization" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white">
                        <SelectGroup>
                            <SelectLabel>Organizations</SelectLabel>
                            {organizations.map((org, idx) => (
                                <SelectItem key={idx} value={org}>{org}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Department */}
            <div className="flex flex-col gap-2">
                <Label className="text-gray-200">Select Department</Label>
                <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Choose department" />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-gray-800">
                        <SelectGroup>
                            <SelectLabel>Departments</SelectLabel>
                            {departments.map((d, idx) => (
                                <SelectItem key={idx} value={d}>{d}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Add Members */}
            <div className="flex flex-col gap-2">
                <Label className="text-gray-200">Add Members</Label>
                <Select onValueChange={handleAddMember}>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Select Member" />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-gray-800">
                        <SelectGroup>
                            <SelectLabel>Members</SelectLabel>
                            {availableMembers.map((name, idx) => (
                                <SelectItem key={idx} value={name}>{name}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {/* Member List */}
                {members.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {members.map((member, index) => (
                            <span
                                key={index}
                                onClick={() => removeMember(member)}
                                className="cursor-pointer px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 text-sm hover:bg-blue-500 hover:text-white transition"
                            >
                                {member} ✕
                            </span>
                        ))}
                    </div>
                )}
            </div>

        </form>
    )
}

export default WorkspaceForm
