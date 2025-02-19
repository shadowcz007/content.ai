import type { Block } from 'payload'

export const FormCard: Block = {
  slug: 'formCard',
  interfaceName: 'FormCardBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: '启用表单卡片',
      defaultValue: true,
    },
    {
      name: 'title',
      type: 'text',
      label: '区块标题',
      required: true,
    },
    {
      name: 'cards',
      type: 'array',
      label: '表单卡片',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: '卡片标题',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: '卡片图片',
        },
        {
          name: 'form',
          type: 'relationship',
          relationTo: 'forms',
          required: true,
          label: '关联表单',
        },
      ],
    },
  ],
}
