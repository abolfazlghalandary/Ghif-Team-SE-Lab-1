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
        {IntroBox('Abolfazl', 'Ghalandary','Computer Engineering')}
        {IntroBox('Alireza','Farshi', 'Computer Engineering')}
        {IntroBox('Mohammad','Izadi', 'Computer Engineering')}
      </p>
    </div>
  )
}

export default App

function IntroBox(name: string, last_name: string, major: string) {
  return (
    <div className='border-[1px] border-white p-10 rounded-2xl'>
      <p className='text-white'>{name}</p>
      <p className='text-white'>{last_name}</p>
      <p className='text-white'>{major}</p>
    </div>
  )
}
