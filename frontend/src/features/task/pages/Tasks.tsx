
import WrapperContainer from '../../../components/ui/WrapperContainer'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { capitalize } from '../../../utils/utils'

const workspaces = [
  "office",
  "design",
  "production"
]

const Tasks = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <WrapperContainer>
      <div className="text-white flex flex-col md:flex-row gap-6 min-h-screen md:gap-14">
        <div className="space-y-3 bg-linear-to-r from-blue-600 to-blue-400 rounded p-4 md:p-8 md:min-w-md">
          <h2 className="text-2xl font-bold">Workspace</h2>
          <div className="flex flex-col gap-2 text-left">
            {
              workspaces.map((workspace) => (
                <Link
                  to={workspace}
                  className={`
              transition-all hover:-translate-x-2 duration-150 
              ${pathname.includes(workspace)
                      ? "text-gray-100 font-bold"   // Active link styles
                      : "hover:text-yellow-400"
                    } `}
                >
                  {capitalize(workspace)}
                </Link>
              ))
            }
          </div>
        </div>
        <Outlet />
      </div>


    </WrapperContainer>
  )
}

export default Tasks