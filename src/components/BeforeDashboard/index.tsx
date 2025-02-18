import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>欢迎来到 Content.ai 管理后台!</h4>
      </Banner>
      <ul className={`${baseClass}__instructions`}>
        <li>
          <SeedButton />
          {' 点击这里初始化示例内容'}
        </li>
        <li>
          {'您可以在'}
          <a href="/admin/collections/pages">页面</a>
          {' 和 '}
          <a href="/admin/collections/posts">文章</a>
          {' 中管理您的内容'}
        </li>
      </ul>
    </div>
  )
}

export default BeforeDashboard
