'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpIcon } from '@radix-ui/react-icons' // 或其他图标库

export const FloatingButton: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-24 right-8 z-50 transition-opacity duration-200">
      <Button
        className="rounded-full shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpIcon className="w-4 h-4" />
        返回顶部
      </Button>
    </div>
  )
}
