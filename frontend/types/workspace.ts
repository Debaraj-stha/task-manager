import type { Member } from "./members";

export interface Workspace {
  id: string;
  name: string;
  description?: string;
  members: Member[];
}

