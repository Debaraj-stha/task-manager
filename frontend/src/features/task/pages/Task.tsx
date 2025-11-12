import React from 'react'
import { useParams } from 'react-router-dom'

const Task = () => {
    const {task_id,workspace}=useParams<{task_id?:string,workspace?:string}>()
    console.log(task_id,workspace)
  return (
    <div className='text-red-600'>Task id :{task_id} {workspace}</div>
  )
}

export default Task