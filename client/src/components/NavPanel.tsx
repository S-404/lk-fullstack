import React, {FC} from "react"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useActions} from "../hooks/useActions"

const NavPanel:FC = () => {
    const isAuth = useTypedSelector(state => state.auth.isAuth)
    const {logout} = useActions()
    return (
        <div>
            {isAuth ?
                <div><h1>authorized</h1>
                    <button onClick={logout}>logout</button>
                </div>
                :
                <h1>not authorized</h1>
            }
        </div>
    )
}

export default NavPanel