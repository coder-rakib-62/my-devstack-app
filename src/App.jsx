import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Navbar from '../src/components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Navbar/>
        <ToastContainer />
    </>
  )
}

export default App
