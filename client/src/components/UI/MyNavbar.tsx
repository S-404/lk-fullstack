import React, {FC} from "react"
import {Button, Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap"
import {useActions} from "../../hooks/useActions"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {Link} from "react-router-dom"
import {privateRoutes} from "../../router/routes"

const MyNavBar: FC = () => {

    const {logout} = useActions()
    const auth = useTypedSelector(state => state.auth)

    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand>
                    {auth.user.username?.toUpperCase()}
                </NavbarBrand>

                <Collapse navbar>
                    <Nav>
                        {privateRoutes.map((route,index)=>(
                            <NavItem key={index}>
                                <NavLink tag={Link} to={route.path}>
                                    {route.shortName}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
                <Button onClick={logout}>Logout</Button>
            </Navbar>
        </div>
    )
}

export default MyNavBar