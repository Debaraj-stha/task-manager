"use client";

import { tasks } from '@/constants/content/tasks/tasks';
import { capitalize } from '@/utils/helper';
import { useParams, useRouter } from 'next/navigation';

import TaskItem from './TaskItem';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Page = () => {
  const router = useRouter();
  const { workspace } = useParams<{ workspace?: string }>();

  const workspaceTasks = workspace
    ? tasks.filter(
      (t) => t.workspace?.toLowerCase() === workspace.toLowerCase()
    )
    : tasks;

  const handleNewTask = () => {
    if (workspace) {
      router.push(`/tasks/${workspace}/new`);
    } else {
      router.push(`/tasks/new`);
    }
  };

  return (
    <div className="flex-1 h-full overflow-y-auto bg-gray-50">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h2 className="font-semibold text-3xl text-blue-700">
          {workspace ? `${capitalize(workspace)} Tasks` : "All Tasks"}
        </h2>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleNewTask}>
          <Plus className="mr-2 h-4 w-4" /> New Task
        </Button>


      </div>

      {/* Task List */}
      <div className="p-6 space-y-4">
        {workspaceTasks.length > 0 ? (
          workspaceTasks.map((t) => <TaskItem key={t.id} task={t} />)
        ) : (
          <p className="text-gray-500 italic">
            No tasks found for this workspace.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
