import React from "react"
import {Link} from "react-router-dom"
import {useTypedSelector} from "../hooks/useTypedSelector"

const UserPage = () => {
    const user = useTypedSelector(state => state.auth.user)
    return (
        <div className='d-flex flex-column justify-content-center align-items-center h-50'>
           <h2 className='p-2'>Hello, {user.username}!</h2>
            <div>
                <p>Personal Page is empty</p>
                <p>You can use your <Link to={'/contacts'}>Contact List</Link></p>
            </div>
        </div>
    )
}

export default UserPage