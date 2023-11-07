import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Footer from '../src/Components/Fotter'

function App() {

  return (
    <MainLayout>
      <Outlet />
      <Footer />
    </MainLayout>
  )
}

export default App
