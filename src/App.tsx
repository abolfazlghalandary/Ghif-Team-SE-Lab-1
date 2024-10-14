import './App.css'

function App() {

  return (
    <div className='h-screen bg-[#212121] p-16'>
      <h1 className='text-9xl text-white'>
        <div>GHIF</div>
        <div>Team</div>
        <div>Introduction</div>
      </h1>
      <p className="flex flex-row justify-center items-center m-10">
        {IntroBox('Abolfazl', 'Ghalandary')}
        {IntroBox('Alireza','Farshi')}
      </p>
    </div>
  )
}

export default App

function IntroBox(name: string, last_name: string) {
  return (
    <div className='border-[1px] border-white p-10 rounded-2xl m-2'>
      <p className='text-white'>{name}</p>
      <p className='text-white'>{last_name}</p>
    </div>
  )
}