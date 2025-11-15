import CreateTaskForm from "@/components/forms/CreateTaskForm"
import { Metadata } from "next"
import React from "react"

interface PageProps {
    params: {
        workspace: string
    }
}

// Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { workspace } = await params
   
    return {
        title: `Create New Task - ${workspace}`,
        description: `Add a new task to the ${workspace} workspace`,
    }
}

// Page component
const Page = async () => {
 

    return (
        <div className="p-6 bg-gray-200 min-h-screen">
           
            <CreateTaskForm/>
        </div>
    )
}

export default Page
