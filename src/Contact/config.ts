import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'enableFloatingContact',
      type: 'checkbox',
      label: '启用悬浮联系按钮',
      defaultValue: false,
    },
    {
      name: 'contactInfo',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: '电话', value: 'phone' },
            { label: '邮箱', value: 'email' },
            { label: '微信', value: 'wechat' },
          ],
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}
