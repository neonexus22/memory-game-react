import { useState, useEffect } from 'react'

type TimerProps = {
  isGameOver: boolean
  resetTimer: number
}

const Timer = ({ isGameOver, resetTimer }: TimerProps) => {
  const [timer, setTimer] = useState(-1)

  useEffect(() => {
    setTimer(-1)
  }, [resetTimer])

  useEffect(() => {
    let timerRef = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)

    if (isGameOver) {
      clearInterval(timerRef)
    }

    return () => {
      clearInterval(timerRef)
    }
  }, [timer, isGameOver])

  return (
    <div className="flex justify-center items-center">
      ⌛: {timer < 0 ? 0 : timer} s
    </div>
  )
}

export default Timer
