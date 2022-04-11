import React from "react"
import {Link} from "react-router-dom"

const UserPage = () => {

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div>
                <p>Personal Page is empty</p>
                <p>You can use your <Link to={'/contacts'}>Contact List</Link></p>
            </div>
        </div>
    )
}

export default UserPage