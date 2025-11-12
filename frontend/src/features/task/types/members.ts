export interface Member {
  id?: string; // Unique identifier (e.g., UUID)
  name: string;
  email?: string; // Useful for notifications, login, etc.
  position: string;
  accountableTo?: Member|null; // ID of another Member (optional for top-level)
  avatarUrl?: string; // Optional for UI
}
