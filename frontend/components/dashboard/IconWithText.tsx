import React from 'react'

interface IconWithTextProps {
  shouldFlipPosition?: boolean
  text: string
  icon: React.ComponentType<{ className?: string }>
}

const IconWithText = ({ shouldFlipPosition, icon: Icon, text }: IconWithTextProps) => {
  return (
    <div className={`flex items-center justify-between gap-2 ${shouldFlipPosition ? 'flex-row-reverse' : 'flex-row'}`}>
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </div>
  )
}

export default IconWithText
