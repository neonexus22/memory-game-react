import { useState, useEffect } from 'react'
import { cardsArray } from '../constants/card-array'
import Card from './Card'
import { CardType } from '../types/card'
import Timer from './Timer'

const getCards = () => cardsArray.sort(() => Math.random() - 0.5)

const Cards = () => {
  const [resetTimer, setResetTimer] = useState(-1)
  const [items, setItems] = useState<CardType[]>(() => getCards())
  const [prev, setPrev] = useState(-1)
  const [isGameOver, setIsGameOver] = useState(false)

  const checkForGameOver = () => {
    const gameOver = items.every((item) => item.stat === 'active')
    setIsGameOver(gameOver)
  }

  const check = (id: number) => {
    if (items[prev].id === items[id].id) {
      const newItems = [...items]
      newItems[id].stat = 'active'
      setItems(newItems)
    } else {
      const newItems = [...items]
      newItems[id].stat = 'active'
      setItems(newItems)
      setTimeout(() => {
        const newItems = [...items]
        newItems[prev].stat = ''
        newItems[id].stat = ''
        setItems(newItems)
      }, 1000)
    }
    setPrev(-1)
    checkForGameOver()
  }

  const handleClick = (id: number) => {
    if (prev === -1) {
      const newItems = [...items]
      newItems[id].stat = 'active'
      setItems(newItems)
      setPrev(id)
    } else {
      check(id)
    }
  }

  const handleRestart = () => {
    setIsGameOver(false)
    setItems(getCards())
    setResetTimer(Math.random())
    setTimeout(() => {
      setItems(
        items.map((item) => {
          item.stat = ''
          return item
        }),
      )
    }, 2000)
  }

  console.log('items', items)

  return (
    <>
      <div className="flex justify-center ">
        <div className="w-3/5 flex justify-between items-center flex-col md:flex-row">
          <span
            className={`p-2 text-bold ${
              isGameOver ? 'text-red-800' : 'text-green-800'
            }`}
          >
            <Timer isGameOver={isGameOver} resetTimer={resetTimer} />
          </span>
          {isGameOver && <span>GameOver</span>}
          {isGameOver && (
            <span
              onClick={handleRestart}
              className="cursor-pointer text-4xl text-green-700 mb-4 md:mb-0"
            >
              &#10227;
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className=" h-10/12 w-10/12  md:h-3/5 md:w-3/5 grid grid-rows-4 grid-cols-4 gap-4">
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
              id={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Cards
