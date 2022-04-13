import React, {FC} from "react"
import {Input} from "reactstrap"
import {useActions} from "../../../hooks/useActions"
import {useTypedSelector} from "../../../hooks/useTypedSelector"

const FilterInput: FC = () => {

    const {setFilterContacts} = useActions()
    const {filter} = useTypedSelector(state => state.filterContacts)

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterContacts(e.target.value)
    }

    return (
            <Input
                placeholder="Search..."
                value={filter}
                onChange={onChangeInputHandler}
            />
    )
}

export default FilterInput