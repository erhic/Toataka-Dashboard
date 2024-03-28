import NavIcon from "../Components/Sidenav/NavIcon";
import Navmenu from "../Components/Sidenav/Navmenu";
import { sideNavMenu } from "../Constants";


const Sidenav = () => {

  return (
    <>
      <div className="flex flex-col bg-gray-200 w-40 lg:w-60 xl:w-60 min-h-screen pt-10 item-center">
        <div className="flex items-center">
            <p className="font-montserrat"> <span className="p-2 text-white text-sm bg-green-800 rounded-full mx-3">TK</span> </p><span className="font-montserrat text-green-800 text-sm font-bold ">Toataka</span>
          </div><aside className="mx-auto ">
          
          {sideNavMenu.map((item) => (
            <main key={item.iconName} className="flex items-center gap-3 font-montserrat text-slate-gray hover:border border hover:border-green-700 w-full my-2 py-2 px-4 rounded-sm hover:bg-slate-300">
              <span><NavIcon iconImage={item.iconName} /></span>
              <span> <Navmenu menuDetail={item.menuName} /></span>
            </main>
          ))
          }
        </aside>
      </div>
    </>

  )
}

export default Sidenav