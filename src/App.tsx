import './App.css'

function App() {

  return (
    <div className='h-screen bg-[#212121] p-16'>
      <h1 className='text-9xl text-white'>
        <div>GHIF</div>
        <div>Team</div>
        <div>Introduction</div>
      </h1>
      <p className="flex flex-row justify-center items-center">
        {IntroBox('Ghalandary')}
      </p>
    </div>
  )
}

export default App

function IntroBox(name: string) {
  return (
    <div className='border-[1px] border-white p-2 rounded-2xl'>
      <p className='text-white'>{name}</p>

    </div>
  )
}