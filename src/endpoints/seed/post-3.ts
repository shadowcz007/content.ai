import { RequiredDataFromCollectionSlug } from 'payload'
import type { PostArgs } from './post-1'

export const post3: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
  category,
}) => {
  return {
    slug: 'smart-hardware-future-trends',
    _status: 'published',
    authors: [author],
    category: category.id,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '智能硬件：',
                version: 1,
              },
              {
                type: 'text',
                detail: 0,
                format: 2,
                mode: 'normal',
                style: '',
                text: '定义未来生活方式',
                version: 1,
              },
            ],
            tag: 'h2',
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '智能硬件正在重新定义我们的生活方式。从智能家居到可穿戴设备，从工业自动化到医疗器械，智能硬件正在各个领域展现其革命性的潜力。这些设备不仅让我们的生活更加便捷，还为产业升级和技术创新提供了新的可能。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '智能硬件发展趋势：融合与创新',
                version: 1,
              },
            ],
            tag: 'h2',
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '随着人工智能、物联网和5G技术的快速发展，智能硬件产业正迎来前所未有的机遇。从智能穿戴设备到智能家居系统，从工业机器人到医疗设备，智能硬件正在重塑各个领域的未来。创新者们正在探索如何将这些技术更好地融入日常生活，创造更智能、更高效的解决方案。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '股市不仅仅是关于数字和行情，更多的是关于人的行为。在这个领域，乐观主义者（多头）与谨慎派（空头）相互博弈，共同影响着市场走向。在这两个极端之间，存在着一个充满不确定性的中间地带，交易者和投资者在这里不断权衡希望与恐惧。成功的交易不仅需要财务专业知识，还需要理解群体情绪，预测市场走向及其他参与者的反应。在这个数字与人性交织的复杂舞台上，最敏锐的参与者往往是那些既掌握硬数据又能把握人性微妙之处的人。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
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
                          text: '以上内容完全基于 CMS 中配置的自定义布局构建块实现动态展示。可以是任何您想要的内容，从富文本和图片到高度设计的复杂组件。',
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
        '探索智能硬件如何重塑未来生活方式，从智能家居到可穿戴设备，了解最新技术趋势与创新应用。',
      image: heroImage.id,
      title: '智能硬件：定义未来生活方式',
    },
    relatedPosts: [], // this is populated by the seed script
    title: '智能硬件：定义未来生活方式',
  }
}
