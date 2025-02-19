'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: SerializedEditorState
  onSubmit?: (data: any) => Promise<void>
  isSubmitting?: boolean
}

export const FormBlock: React.FC<FormBlockType> = (props) => {
  const { enableIntro, introContent, form, onSubmit } = props
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const methods = useForm<Record<string, any>>({
    defaultValues: {},
  })

  const {
    register,
    formState: { errors },
  } = methods

  const handleSubmit = useCallback(
    async (data: any) => {
      if (isLoading) return

      setIsLoading(true)

      try {
        if (onSubmit) {
          await onSubmit(data)
        } else {
          const response = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              form: form.id,
              submissionData: Object.entries(data).map(([field, value]) => ({
                field,
                value: String(value),
              })),
            }),
          })

          if (response.ok) {
            if (form.confirmationType === 'message' && form.confirmationMessage) {
            } else if (form.redirect && form.redirect.url) {
              router.push(form.redirect.url)
            }
          }
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    },
    [form, router, onSubmit, isLoading],
  )

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className="grid gap-4">
        {enableIntro && introContent && <RichText data={introContent} />}

        {form.fields?.map((field: FormFieldBlock) => {
          const Field = fields[field.blockType as keyof typeof fields]

          if (Field) {
            return (
              <Field
                key={`form-field-${field.blockType}`}
                {...(field as any)}
                register={register}
                errors={errors}
              />
            )
          }

          return null
        })}

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? '提交中...' : form.submitButtonLabel || '提交'}
        </Button>
      </form>
    </FormProvider>
  )
}
