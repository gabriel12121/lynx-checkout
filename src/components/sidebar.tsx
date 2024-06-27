'use cliente'
import {SIDENAV_ITEMS} from "@/SIDEBAR_CONSTANTS";
import { SideBarMenuItem } from "./sidebar-menu-item"
export default function Sidebar(){
    return(
               <aside className="fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]">
           <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
               {
                    SIDENAV_ITEMS.map((item, idex) => {
                        return <SideBarMenuItem item={item}></SideBarMenuItem>;
                    })
               }
           </nav>
       </aside>
               );
}