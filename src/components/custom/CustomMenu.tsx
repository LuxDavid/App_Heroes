import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList
} from "@/components/ui/navigation-menu";

import { Link } from "react-router";


export const CustomMenu = () => {

    return (

        <NavigationMenu>

            <NavigationMenuList>
                {/*Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList>
                {/*Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/search">Buscar superhéroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>


    )
}
