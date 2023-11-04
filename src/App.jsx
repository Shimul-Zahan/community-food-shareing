import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'

function App() {

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export default App
