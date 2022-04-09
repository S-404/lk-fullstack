import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {login} from "../store/action-creators/login"
import {logout} from "../store/action-creators/logout"
import {registration} from "../store/action-creators/registration"
import {checkAuth} from "../store/action-creators/checkAuth"
import {fetchContacts} from "../store/action-creators/fetchContacts"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
            login,
            logout,
            registration,
            checkAuth,
            fetchContacts
        },
        dispatch)
}