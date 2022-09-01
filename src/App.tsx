import Cards from './components/Cards'
import Timer from './components/Timer'

function App() {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-orange-100">
      <div>
        <h1 className="flex justify-center mb-4 text-xl font-bold">
          React Memory Game
        </h1>
        <Cards />
      </div>
    </div>
  )
}

export default App
