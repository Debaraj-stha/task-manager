import React from 'react'
import { capitalize, colorBasedOnName } from '../../utils/utils'
interface AvatarProps {
    url?: string
    alt?: string
    extraClass?: string
    heightClass?: string
    widthClass?: string
}

const Avatar = ({ url, alt = "Avatar Image", extraClass = "", heightClass = "h-12", widthClass = "w-12" }: AvatarProps) => {
    return (
        <>
            {
                url ?
                    <img alt={alt} loading='lazy' src={url} className={`${heightClass} ${widthClass} ${extraClass} rounded-full`} />
                    :
                    <div className={`${heightClass} ${widthClass} ${extraClass} rounded-full flex justify-center items-center font-semibold `}
                        style={{ backgroundColor: colorBasedOnName(alt) }}
                    >
                        {alt.split(" ").map((word) => capitalize(word)![0]).join("")}
                    </div>
            }
        </>
    )
}

export default Avatar