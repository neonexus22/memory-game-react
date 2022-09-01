import React from 'react'
import { CardType } from '../types/card'

type CardProps = {
  item: CardType
  id: number
  handleClick(id: number): void
}

const Card: React.FC<CardProps> = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? 'active' : ''
  return (
    <div
      className={`card bg-white rounded-md border border-orange-300 flex justify-center items-center ${itemClass}`}
      onClick={() => handleClick(id)}
    >
      <img
        className="card-image w-1/2 p-1 md:p-2 lg:p-4 scale-0"
        src={item.img}
        alt={item.img}
      />
    </div>
  )
}

export default Card
