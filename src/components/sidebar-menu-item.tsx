'use client';
import { SideNavItem } from '@/types/type';

export const SideBarMenuItem = ({ item }: { item: SideNavItem }) => {
    return(
        <>
        {
            item.submenu
            ?(<div></div>)
            :(<div href={item.path} className="flex items-center min-h-[40px] h-full text-[#6e768e]">
                      {item.icon}
                <span>{item.title}</span>
                </div>)
     }
     </>
                  	)
}