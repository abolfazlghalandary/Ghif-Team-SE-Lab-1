import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Ghif Team Introduction
      </h1>
      <p className="flex flex-col justify-start items-start">
        <div>Izadi</div>
        <div>Farshi</div>
        {IntroBox('Ghalandary')}
      </p>
    </>
  )
}

export default App

function IntroBox(name: string) {
  return (
    <div>
      {name}
    </div>
  )
}