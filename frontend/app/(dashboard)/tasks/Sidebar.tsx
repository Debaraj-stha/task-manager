"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { capitalize } from "@/utils/helper"
import WorkspaceForm from "./WorkspaceForm"

const Sidebar = () => {
    const workspaces = ["office", "design", "production"]
    const pathname = usePathname()

    return (
        <div className="bg-gray-100 p-4 md:p-8 md:min-w-[250px] overflow-y-auto border-r shadow-md border-gray-200 flex flex-col justify-between items-start">
            <div>
                <h2 className="text-2xl font-bold mb-4">Workspace</h2>
                <div className="flex flex-col gap-2">
                    {workspaces.map((workspace) => (
                        <Link
                            key={workspace}
                            href={`/tasks/${workspace}`}
                            className={`transition-all duration-150 hover:-translate-x-2 ${pathname.includes(workspace)
                                    ? "text-blue-800 font-bold border-b border-blue-800"
                                    : "text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            {capitalize(workspace)}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Dialog Trigger */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                        + Create Workspace
                    </Button>
                </DialogTrigger>

                <DialogContent className="bg-white">
                    <DialogHeader>
                        <DialogTitle>Create New Workspace</DialogTitle>
                        <DialogDescription>
                            Add a workspace to organize your tasks.
                        </DialogDescription>
                    </DialogHeader>

                 
                   <DialogDescription>
                    <WorkspaceForm/>
                   </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Sidebar
