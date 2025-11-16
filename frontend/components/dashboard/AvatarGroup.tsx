'use client'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface AvatarGroupProps {
  imageURLs: string[]
  names?: string[]
  size?: number
  overlap?: number
  onShowMore?:()=>void
}

const AvatarGroup = ({
  imageURLs,
  names = [],
  size = 40,
  overlap = 12,
  onShowMore
}: AvatarGroupProps) => {
  const maxShoImages = 3
  const newImages = imageURLs.length > maxShoImages ? imageURLs.slice(0, maxShoImages) : imageURLs
  const remainingImages = imageURLs.length > maxShoImages ? imageURLs.length - maxShoImages : 0
  return (
    <div className="relative flex ">
      {newImages.map((url, index) => {
        const zIndex = imageURLs.length - index
        return (

          <Avatar key={index}>
            <AvatarImage src={url} style={{
              height: size,
              left: index * (size - overlap),
              zIndex: zIndex
            }}></AvatarImage>
            <AvatarFallback>{names[index]}</AvatarFallback>
          </Avatar>
        )
      })}
      {
        remainingImages !== 0 && (
          <Avatar onClick={()=>onShowMore?.()} className='bg-gray-600 cursor-pointer'>
            <AvatarImage></AvatarImage>
            <AvatarFallback> + {remainingImages}</AvatarFallback>
          </Avatar>
        )
      }
    </div>
  )
}

export default AvatarGroup
