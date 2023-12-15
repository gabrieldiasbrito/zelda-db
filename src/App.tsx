import './App.css'
import Navbar from './components/navbar/navbar'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}
