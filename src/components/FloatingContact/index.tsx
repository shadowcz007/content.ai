'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Media } from '@/components/Media'
import { MessageCircle } from 'lucide-react'

type ContactInfo = {
  type: 'phone' | 'email' | 'wechat'
  value: string
  icon?: any
}

export const FloatingContact: React.FC<{
  contactInfo: ContactInfo[]
  enabled?: boolean
}> = ({ contactInfo, enabled = false }) => {
  if (!enabled || !contactInfo?.length) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-8 right-8 z-50 rounded-full h-12 w-12 p-0"
          variant="default"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>联系我们</DialogTitle>
        <div className="grid gap-4 py-4">
          {contactInfo?.map((info, i) => (
            <div key={i} className="flex items-center gap-4 p-2 border rounded">
              {info.icon && <Media resource={info.icon} className="w-6 h-6" />}
              <div>
                <div className="text-sm text-muted-foreground">
                  {info.type === 'phone' && '电话'}
                  {info.type === 'email' && '邮箱'}
                  {info.type === 'wechat' && '微信'}
                </div>
                <div>{info.value}</div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
