import React from 'react'
import { FormCard } from '@/components/FormCard'

export type FormCardBlockProps = {
  enabled?: boolean
  title: string
  cards: Array<{
    title: string
    image?: any
    form: any
  }>
  className?: string
}

export const FormCardBlock: React.FC<FormCardBlockProps> = (props) => {
  const { enabled, title, cards, className } = props

  if (!enabled) return null

  return (
    <div className="container my-8">
      <h2 className="text-2xl font-semibold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards?.map((card, index) => (
          <FormCard
            key={index}
            enabled={enabled}
            title={card.title}
            image={card.image}
            form={card.form}
            className={className}
          />
        ))}
      </div>
    </div>
  )
}
