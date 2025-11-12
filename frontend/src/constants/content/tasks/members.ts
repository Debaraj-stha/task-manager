import type { Member } from "../../../features/task/types/members";

export const members: Member[] = [
  {
    name: "Alice Johnson",
    position: "Project Manager",
    accountableTo: null,
    // avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    name: "Bob Singh",
    position: "Frontend Developer",
    accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/men/35.jpg"
  },
  {
    name: "Charlie Chen",
    position: "Backend Developer",
    accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    name: "Diana Gomez",
    position: "UX Designer",
    accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Ethan Kim",
    position: "QA Engineer",
    accountableTo: { name: "Charlie Chen", position: "Backend Developer", accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" }, avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    name: "Fiona Lee",
    position: "Scrum Master",
    accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "George Brown",
    position: "DevOps Engineer",
    accountableTo: { name: "Charlie Chen", position: "Backend Developer", accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" }, avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    name: "Hannah Davis",
    position: "Content Strategist",
    accountableTo: { name: "Diana Gomez", position: "UX Designer", accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" }, avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Ian Roberts",
    position: "Data Analyst",
    accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/men/61.jpg"
  },
  {
    name: "Julia Fernandez",
    position: "Marketing Specialist",
    accountableTo: { name: "Hannah Davis", position: "Content Strategist", accountableTo: { name: "Diana Gomez", position: "UX Designer", accountableTo: { name: "Alice Johnson", position: "Project Manager", accountableTo: null, avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" }, avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg" }, avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg" },
    avatarUrl: "https://randomuser.me/api/portraits/women/66.jpg"
  }
];
