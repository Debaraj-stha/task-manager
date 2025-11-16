'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


const NewTaskCreateBytton = () => {
  const router = useRouter()
  return (
    <Button className="bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-100"
      onClick={() => router.push("/tasks/new")}
    >+ Add New Task</Button>
  )
}

export default NewTaskCreateBytton