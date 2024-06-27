import { SideNavItem } from "./types/type";
import { BsFillPersonFill  } from "react-icons/bs";

export const SIDENAV_ITEMS: SideNavItem[] = [

    {
        title: "Cliente",
        menuList: [{
            title: 'cliente ',
            path: '/',
            icon: <BsFillPersonFill  size={20} />,
        }]
    }
];