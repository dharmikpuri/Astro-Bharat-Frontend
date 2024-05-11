import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetAllastrologersQuery} from './App/service/api'

function App() {
  const [count, setCount] = useState(0)
  const data = useGetAllastrologersQuery(undefined);
  // const data1 = useRegisterAstrologerQuery();
  console.log(data,"")
  return (
    <>

    </>
  )
}

export default App
