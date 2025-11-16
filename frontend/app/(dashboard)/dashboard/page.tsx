import TaskCard from "@/components/dashboard/TaskCard";
import DashboardRightSidebar from "../DashboardRightSidebar";
import { Button } from "@/components/ui/button";
import PieCharts from "@/components/charts/PieChart";
import Timeline from "@/components/charts/Timeline";

export const memberAvatars = [
  { name: "Alice Johnson", url: "https://randomuser.me/api/portraits/women/21.jpg" },
  { name: "Bob Singh", url: "https://randomuser.me/api/portraits/men/35.jpg" },
  { name: "Charlie Chen", url: "https://randomuser.me/api/portraits/men/42.jpg" },
  { name: "Diana Gomez", url: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Ethan Kim", url: "https://randomuser.me/api/portraits/men/51.jpg" },
  { name: "Fiona Lee", url: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "George Brown", url: "https://randomuser.me/api/portraits/men/28.jpg" },
  { name: "Hannah Davis", url: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Ian Roberts", url: "https://randomuser.me/api/portraits/men/61.jpg" },
]

const page = () => {
  return (
    <div className="flex flex-row gap-4 ">
      <div className="mt-6 px-6 flex-1 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Task Summary</h2>
          <Button className="bg-blue-500 text-white">+ Add New Task</Button>
        </div>


        <div className="flex gap-5 flex-wrap">
          <TaskCard
            title="Digital Marketing Agency"
            subtitle="Landing Page Design"
            members={memberAvatars.map((images) => images.url)}
            progress={60}
            theme="bg-blue-500"
          />

          <TaskCard
            title="Online Course Mobile Apps"
            subtitle="Landing Page Design"
            members={memberAvatars.map((images) => images.url).splice(5)}
            progress={70}
            theme="bg-indigo-900"
          />

          <TaskCard
            title="Political Articles Landing Page"
            subtitle="Landing Page Design"
            members={memberAvatars.map((images) => images.url).splice(4)}
            progress={40}
            theme="bg-orange-400"
          />

        </div>
        <div className="flex flex-row gap-5 w-full">
          <div className="w-1/3">
            <PieCharts />
          </div>
          <div className="flex-1">
            <Timeline />
          </div>
        </div>

      </div>
      <DashboardRightSidebar />
    </div>
  );
};

export default page;
