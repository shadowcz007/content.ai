'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import { FormBlock } from '@/blocks/Form/Component'
import { getClientSideURL } from '@/utilities/getURL'

type FormCardProps = {
  title?: string
  image?: any
  form: any
  enabled?: boolean
  className?: string
}

export const FormCard: React.FC<FormCardProps> = ({
  title,
  image,
  form,
  enabled = true,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const displayTitle = title || form.title

  const handleSubmit = async (data: any) => {
    // 如果正在提交中，直接返回
    if (isSubmitting) {
      return
    }

    // 如果状态不是 idle，说明刚刚提交过，也直接返回
    if (submitStatus !== 'idle') {
      return
    }

    setIsSubmitting(true)
    try {
      // 将表单数据转换为正确的格式
      const formattedData = Object.entries(data).map(([field, value]) => ({
        field,
        value: String(value),
      }))

      const response = await fetch(`${getClientSideURL()}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: form.id,
          submissionData: formattedData,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          setIsOpen(false)
          setSubmitStatus('idle')
        }, 2000)
      } else {
        throw new Error('提交失败')
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 2000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!enabled) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className={`cursor-pointer hover:shadow-lg transition-shadow ${className}`}>
          {image && (
            <div className="relative w-full aspect-video">
              <Media resource={image} fill className="object-cover rounded-t-lg" />
            </div>
          )}
          <CardHeader>
            <CardTitle>{displayTitle}</CardTitle>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogTitle>{displayTitle}</DialogTitle>
        <div className="mt-4">
          <FormBlock
            form={form}
            onSubmit={handleSubmit}
            enableIntro={false}
            isSubmitting={isSubmitting}
          />
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
              {form.confirmationMessage ? (
                <RichText data={form.confirmationMessage} />
              ) : (
                '表单已成功提交'
              )}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">提交失败，请稍后重试</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
