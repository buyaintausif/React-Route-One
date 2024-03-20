
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navber from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>

    <Navber></Navber>

    {/* <DaisyNav></DaisyNav> */}
   
      <h1 className='text-center text-4xl'>Vite + React</h1>
 
 <PriceOptions></PriceOptions>

 <LineChart></LineChart>
    
    </>
  )
}

export default App
