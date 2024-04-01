import { routes } from "../../routes"
import { Content } from "./Content"
import { NavMobile } from "./hambuger"

export const Header = () => {
    return (
        <header className="pt-1 lg:pt-20 w-50 lg:full w-4/3">
            <nav className="flex flex-row gap-20 flex-wrap lg:flex hidden">
                {routes.map(route => {
                    return (
                        <Content text={route.title} link={route.href} target={route.target} />
                    )
                })}
            </nav>
            <NavMobile />
        </header>
    )
} 