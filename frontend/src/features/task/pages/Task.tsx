import React from 'react'
import { useParams } from 'react-router-dom'

const Task = () => {
  const{workspace}=useParams()
  return (
    <div>Task:{workspace}</div>
  )
}

export default Task