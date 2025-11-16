import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
const CreateWorkspaceDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                    + Create New Workspace
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Workspace</DialogTitle>
                    <DialogDescription>
                        Add a name and details for your workspace below.
                    </DialogDescription>
                </DialogHeader>

                {/* Replace this with a form later */}
                <div className="space-y-4 mt-4">
                    <div className="flex gap-2 flex-col">
                        <Label htmlFor="workspaceName">Workspace Name</Label>
                        <Input
                            type="text"
                            id="workspaceName"
                            name="workspaceName"
                            placeholder="Workspace name"
                        />
                    </div>



                    <Button 
                    
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Create Workspace
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default CreateWorkspaceDialog