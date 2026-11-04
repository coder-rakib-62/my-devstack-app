import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../src/components/Navbar';
import Banner from '../src/components/Banner';

function App() {
  return (
    <>  
        <Navbar/>
        <Banner/>
        <ToastContainer />
    </>
  )
}

export default App
