import { sideNavMenu } from "../Constants"


const Sidenav = () => {
  return (
    <>
      <div>
        <span>Toataka Dashboard</span>
      </div>

      <div>
        {
          sideNavMenu.map((item) => (
            <div key={item.name} className="">
              <a href="">{item.name}</a>
            </div>
          ))
        }
      </div>
    </>

  )
}

export default Sidenav