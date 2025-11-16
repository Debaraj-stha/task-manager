"use client";

import { useState, useMemo } from "react";
import { tasks } from "@/constants/content/tasks/tasks";
import { useParams, useRouter } from "next/navigation";
import TaskItem from "./TaskItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TaskFilteringTools from "./TaskFilteringTools";


const Page = () => {
  const router = useRouter();
  const { workspace } = useParams<{ workspace?: string }>();
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | undefined>(workspace);
  const [sortBy, setSortBy] = useState<string>("");

  const handleNewTask = () => {
    router.push(selectedWorkspace ? `/tasks/${selectedWorkspace}/new` : `/tasks/new`);
  };

  const priorityOrder: Record<string, number> = { low: 1, medium: 2, high: 3 };

  const filteredTasks = useMemo(() => {
    let filtered = tasks;
    if (selectedWorkspace) {
      filtered = filtered.filter(
        (t) => t.workspace?.toLowerCase() === selectedWorkspace.toLowerCase()
      );
    }

    switch (sortBy) {
      case "deadline_asc":
        return filtered.sort((a, b) => (a.deadline?.getTime() || 0) - (b.deadline?.getTime() || 0));
      case "deadline_desc":
        return filtered.sort((a, b) => (b.deadline?.getTime() || 0) - (a.deadline?.getTime() || 0));
      case "priority_asc":
        return filtered.sort(
          (a, b) =>
            (priorityOrder[a.priority?.toLowerCase() || "low"] || 0) -
            (priorityOrder[b.priority?.toLowerCase() || "low"] || 0)
        );
      case "priority_desc":
        return filtered.sort(
          (a, b) =>
            (priorityOrder[b.priority?.toLowerCase() || "low"] || 0) -
            (priorityOrder[a.priority?.toLowerCase() || "low"] || 0)
        );
      default:
        return filtered;
    }
  }, [tasks, selectedWorkspace, sortBy]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 px-6 py-4 flex items-center gap-4 justify-between">
        <TaskFilteringTools
          selectedWorkspace={selectedWorkspace}
          setSelectedWorkspace={setSelectedWorkspace}
        />
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleNewTask}
        >
          <Plus className="mr-2 h-4 w-4" /> New Task
        </Button>
      </div>

      {/* Scrollable Task List */}

        <div className="p-6 min-h-full">
          <div className="space-y-4">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((t) => <TaskItem key={t.id} task={t} />)
            ) : (
              <p className="text-gray-500 italic">No tasks found.</p>
            )}
          </div>
        </div>

    </div>
  );
};

export default Page;
