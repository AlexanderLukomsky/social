import { NavLink } from 'react-router-dom'
type SidebarItemType = {
    title: string
}
export const SidebarItem = (props: SidebarItemType) => {
    return (
        <li>
            {props.title}
        </li>
    )
}