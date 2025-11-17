import { UserService } from "./services/user.service.js"
import { WorkService } from "./services/workspace.service.js"

const workspace = {
  name: "office",
  createdBy: 1
}

const create = async () => {
  await WorkService.createWorkspace(workspace)
}


// create()
const user = await UserService.getUser(1)
WorkService.getAllWorkspaceCreatedByUser(user).then((res) => console.log(res)).catch((e) => console.log(e))