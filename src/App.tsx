
import './App.css'
import AllRoutes from './Routes/AllRoutes'

function App() {
  // const [count, setCount] = useState(0)
  // // const data = useGetAllastrologersQuery(undefined);
  // // console.log(data,"")
  // const [data, setData] = useRegisterAstrologerMutation();
  // // DATA is function
  // // setData 
  // console.log(data, "Data")
  // console.log(setData, "SetData")
  // const handleSubmit = async () => {
  //   let obj = {
  //     name: "RAvi bhai Don hai",
  //     gender: "male",
  //     email: "dharmikpuri17@gmail.com",
  //     languages: "Hindi, english",
  //     specialities: "Tantrik videa, ABCD",
  //     image: "https://i.pinimg.com/474x/15/4e/95/154e957aee0458e012078d252b6ec8be.jpg"
  //   }
  //   try {
  //     const dataa = await data(obj)
  //     if (dataa) {
  //       console.log(dataa.data.message)
  //     }else{

  //     }
  //   } catch (error) {

  //   }
  // }

  return (
    <>
      {/* Hello */}
      <AllRoutes/>

    </>
  )
}

export default App
