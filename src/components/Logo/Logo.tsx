import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  return (
    <svg
      width="193"
      height="34"
      viewBox="0 0 193 34"
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* AI 圆形图标 */}
      <circle cx="17" cy="17" r="15" fill="#3B82F6" fillOpacity="0.1" />
      <circle cx="17" cy="17" r="12" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />

      {/* Content.AI 文字 */}
      <text x="40" y="23" className="font-semibold text-xl" fill="currentColor">
        Content<tspan fill="#3B82F6">.AI</tspan>
      </text>

      {/* 抽象连接线条 */}
      <path d="M14 17 L20 17" stroke="#3B82F6" strokeWidth="2" />
      <path d="M17 14 L17 20" stroke="#3B82F6" strokeWidth="2" />
    </svg>
  )
}
