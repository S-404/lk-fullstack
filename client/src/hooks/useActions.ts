import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {login} from "../store/action-creators/auth/login"
import {logout} from "../store/action-creators/auth/logout"
import {registration} from "../store/action-creators/auth/registration"
import {checkAuth} from "../store/action-creators/auth/checkAuth"
import {fetchContacts} from "../store/action-creators/contacts/fetchContacts"
import {addContact} from "../store/action-creators/contacts/addContact"
import {editContact} from "../store/action-creators/contacts/editContact"
import {removeContact} from "../store/action-creators/contacts/removeContact"
import {setModalEditContact} from "../store/action-creators/modals/setModalEditContact"
import {setModalNewContact} from "../store/action-creators/modals/setModalNewContact"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
            login,
            logout,
            registration,
            checkAuth,
            fetchContacts,
            addContact,
            editContact,
            removeContact,
            setModalEditContact,
            setModalNewContact
        },
        dispatch)
}