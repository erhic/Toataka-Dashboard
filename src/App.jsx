import { Outlet } from "react-router-dom"
import Sidenav from "./Components/Sidenav"

function App() {


  return (
    <>
      <Sidenav />
      <Outlet />
    </>
  )
}

export default App
