import { MessagesSquare } from "lucide-react";
import Image from "next/image";


interface TaskCardProps {
  title: string;
  subtitle: string;
  members: string[];
  progress: number;
  theme?: string;
}

const TaskCard = ({
  title,
  subtitle,
  members,
  progress,
  theme = "bg-blue-500",
}: TaskCardProps) => (
  <div
    className={`p-5 rounded-xl shadow-md text-white min-w-[260px] ${theme} relative`}
  >
    <p className="text-lg font-semibold">{title}</p>
    <p className="opacity-90 text-sm">{subtitle}</p>

    {/* Members */}
    <div className="flex items-center justify-between gap-1 mt-4">
     <div className="flex items-center">
       {members.slice(0, 4).map((img, i) => (
        <Image
          key={i}
          src={img}
          width={32}
          height={32}
          alt="avatar"
          className="rounded-full border-2 border-white -ml-2 first:ml-0"
        />
      ))}
      {members.length > 4 && (
        <span className="ml-2 text-sm font-bold">
          +{members.length - 4}
        </span>
      )}
     </div>
     
     <div className="flex flex-row items-center justify-center gap-1"> 
      <span className="text-sm">20</span>
       <MessagesSquare size={15}/>
     </div>
    </div>

    {/* Progress Bar */}
    <div className="w-full bg-white/40 h-2 rounded-full mt-4">
      <div
        className="bg-white h-full rounded-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>

    <p className="mt-2 text-sm">{progress}%</p>
  </div>
);

export default TaskCard;
