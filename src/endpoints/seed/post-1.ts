import type { Media, User, Category } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  heroImage: Media
  blockImage: Media
  author: User
  category: Category
}

export const post1: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
  category,
}) => ({
  slug: 'ai-innovation',
  slugLock: true,
  _status: 'published',
  title: 'AI驱动的产品创新',
  category: category.id,
  authors: [author],
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
              text: '如何利用人工智能推动产品创新',
            },
          ],
          tag: 'h1',
        },
        {
          version: 1,
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '在数字化转型的浪潮中,人工智能正在重塑产品创新的方式。通过深度学习和机器学习技术,我们可以更好地理解用户需求,优化产品设计流程,并创造出更智能的解决方案。',
            },
          ],
        },
        {
          type: 'heading',
          version: 1,
          children: [
            {
              type: 'text',
              text: '智能家居创新案例',
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
              text: '某领先的智能家居公司面临着传统家居系统无法满足用户个性化需求的挑战。通过引入基于深度学习的自适应环境控制系统,不仅使能耗降低了40%,更让用户满意度提升了65%。这个案例充分展示了AI技术在产品创新中的巨大潜力。',
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
    title: 'AI驱动的产品创新 | Content.AI',
    description: '探索如何利用人工智能技术推动产品创新,打造智能解决方案',
    image: heroImage.id,
  },
})
