import type { CheckboxField, TextField } from 'payload'

import { formatSlugHook } from './formatSlug'

type Overrides = {
  slugOverrides?: Partial<TextField>
  checkboxOverrides?: Partial<CheckboxField>
}

type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField]

export const slugField: any = () => [
  {
    name: 'slug',
    type: 'text',
    required: true,
    admin: {
      position: 'sidebar',
    },
    hooks: {
      beforeValidate: [
        ({
          value,
          originalDoc,
          data,
        }: {
          value: string
          originalDoc: Record<string, any>
          data: Record<string, any>
        }) => {
          if (data?.slugLock || originalDoc?.slugLock) {
            return data?.slug || originalDoc?.slug || value
          }

          return value
        },
      ],
    },
  },
  {
    name: 'slugLock',
    type: 'checkbox',
    admin: {
      position: 'sidebar',
      description: '锁定 slug 防止自动生成',
    },
  },
]
