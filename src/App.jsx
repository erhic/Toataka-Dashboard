import { Outlet } from "react-router-dom"
import Sidenav from "./Sections/Sidenav"

function App() {


  return (

    <div className="flex">
      <Sidenav />
      <Outlet />
    </div>


  )
}

export default App
