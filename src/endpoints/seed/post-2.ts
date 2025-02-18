import { RequiredDataFromCollectionSlug } from 'payload'
import type { PostArgs } from './post-1'

export const post2: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
  category,
}) => {
  return {
    slug: 'design-innovation',
    _status: 'published',
    categories: [category.id],
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                text: '探索设计创新的无限可能。深入了解如何通过创新设计改变用户体验，塑造未来生活方式。',
              },
            ],
            version: 1,
            tag: 'h1',
          },
          {
            type: 'block',
            fields: {
              blockName: 'Disclaimer',
              blockType: 'banner',
              content: {
                root: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 1,
                          mode: 'normal',
                          style: '',
                          text: 'Disclaimer:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' This content is fabricated and for demonstration purposes only. To edit this post, ',
                          version: 1,
                        },
                        {
                          type: 'link',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'navigate to the admin dashboard.',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          fields: {
                            linkType: 'custom',
                            newTab: true,
                            url: '/admin',
                          },
                          format: '',
                          indent: 0,
                          version: 3,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 1,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              },
              style: 'info',
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                text: '设计思维：从理念到实践的创新之路',
              },
            ],
            version: 1,
            tag: 'h2',
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '在当今快速发展的数字时代，设计不仅仅是关于美学，更是解决问题的关键工具。从用户体验设计到产品创新，设计思维正在重塑我们与技术和环境的互动方式。',
              },
            ],
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: blockImage.id,
            },
            format: '',
            version: 2,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '从可持续设计到交互体验优化，创新设计正在各个领域发挥着重要作用。通过整合最新技术与人文关怀，设计师们不断突破传统界限，为用户创造更美好的生活体验。这种创新精神正推动着设计行业向更广阔的未来发展。',
              },
            ],
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: 'Dynamic components',
              blockType: 'banner',
              content: {
                root: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: "This content above is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              },
              style: 'info',
            },
            format: '',
            version: 2,
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
      description:
        '探索设计创新的无限可能。深入了解如何通过创新设计改变用户体验，塑造未来生活方式。',
      image: heroImage.id,
      title: '创新设计：塑造未来体验',
    },
    relatedPosts: [], // this is populated by the seed script
    title: '创新设计：塑造未来体验',
  }
}
