import type { Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type SolutionsPageArgs = {
  heroImage: Media
}

export const solutions: (args: SolutionsPageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
}) => ({
  title: '解决方案',
  slug: 'solutions',
  slugLock: true,
  _status: 'published',
  hero: {
    type: 'highImpact',
    media: heroImage.id,
    richText: {
      root: {
        type: 'root',
        children: [
          {
            type: 'text',
            text: '智能解决方案',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
  },
  layout: [
    {
      blockType: 'content',
      blockName: '解决方案介绍',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '我们提供全方位的AI解决方案',
                },
              ],
            },
          ],
        },
      },
    },
  ],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          version: 1,
          children: [
            {
              type: 'text',
              text: '核心优势',
            },
          ],
          tag: 'h2',
        },
        {
          version: 1,
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '- 定制化AI解决方案\n- 端到端的技术支持\n- 快速部署与集成\n- 持续优化与升级',
            },
          ],
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  heroImage: heroImage.id,
  meta: {
    title: '智能解决方案 | Content.AI',
    description: '探索我们的智能解决方案，助力企业数字化转型',
    image: heroImage.id,
  },
})
