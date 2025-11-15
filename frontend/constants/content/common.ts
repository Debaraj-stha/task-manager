export const APP_NAME = "Task Manager"

export const FEATURES = [
  {
    title: "Real-Time Collaboration",
    description:
      "Powered by Socket.io for instant, bi-directional communication. Users see updates live without refreshing.",
    icon: "⚡",
  },
  {
    title: "Secure Authentication",
    description:
      "Firebase Authentication with Google, Email, and GitHub sign-in options. Includes role-based access and JWT support.",
    icon: "🔐",
  },
  {
    title: "Powerful PostgreSQL Database",
    description:
      "Structured and relational data storage using PostgreSQL. Optimized queries and schema relationships ensure performance and integrity.",
    icon: "🗄️",
  },
  {
    title: "Modern MERN + TypeScript Stack",
    description:
      "Built with React, Express, Node.js, and PostgreSQL using TypeScript for type safety, scalability, and maintainability.",
    icon: "⚙️",
  },
  {
    title: "Responsive UI",
    description:
      "Fully responsive and accessible interface using Tailwind CSS. Works seamlessly on desktops, tablets, and mobiles.",
    icon: "📱",
  },
  {
    title: "Real-Time Notifications",
    description:
      "Instant alerts and updates via Socket.io and Firebase Cloud Messaging for user interactions and system events.",
    icon: "🔔",
  },
  {
    title: "Admin Dashboard",
    description:
      "Comprehensive dashboard to manage users, data, and configurations with role-based privileges.",
    icon: "🧑‍💻",
  },
  {
    title: "Dark & Light Mode",
    description:
      "Dynamic theme support for better user experience and accessibility across devices and preferences.",
    icon: "🌙",
  },



];


export const NAV_LINKS = [
  // Guest links
  { label: "Home", routeKey: "HOME", role: ["guest"] },
  { label: "About", routeKey: "ABOUT", role: ["guest"] },
  { label: "Contact", routeKey: "CONTACT", role: ["guest"] },
  { label: "Login", routeKey: "LOGIN", role: ["guest"] },
  { label: "Signup", routeKey: "SIGNUP", role: ["guest"] },

  // User links
  { label: "Dashboard", routeKey: "DASHBOARD", role: ["user"] },
  { label: "Tasks", routeKey: "TASKS", role: ["user"] },
  { label: "Projects", routeKey: "PROJECTS", role: ["user"] },
  { label: "Calendar", routeKey: "CALENDAR", role: ["user"] },
  { label: "Profile", routeKey: "PROFILE", role: ["user"] },
  { label: "Settings", routeKey: "SETTINGS", role: ["user"] },
  { label: "Logout", routeKey: "LOGOUT", role: ["user"] },

  // Admin links (if you have admin role)
  { label: "Admin Dashboard", routeKey: "ADMIN_DASHBOARD", role: ["admin"] },
  { label: "Manage Users", routeKey: "MANAGE_USERS", role: ["admin"] },
  { label: "Manage Projects", routeKey: "MANAGE_PROJECTS", role: ["admin"] },
  { label: "Reports", routeKey: "REPORTS", role: ["admin"] },
  { label: "System Settings", routeKey: "SYSTEM_SETTINGS", role: ["admin"] },
];

export const QUICK_LINKS = [
  ...NAV_LINKS,
  { label: "Terms", routeKey: "TERMS" },
  { label: "Privacy", routeKey: "PRIVACY" },
  { label: "Help / FAQ", routeKey: "HELP" },
  { label: "Contact", routeKey: "CONTACT" },
];
