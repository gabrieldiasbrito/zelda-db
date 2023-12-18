import './App.css'
import Navbar from './components/navbar/navbar'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <>
      <div>
        <Navbar/>
        <div className="page">
          <Outlet/>
        </div>
      </div>
    </>
  )
}
