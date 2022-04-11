import React, {FC} from "react"
import {Input} from "reactstrap"
import {useActions} from "../hooks/useActions"
import {useTypedSelector} from "../hooks/useTypedSelector"

const FilterInput: FC = () => {

    const {setFilterContacts} = useActions()
    const {filter} = useTypedSelector(state => state.filterContacts)

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterContacts(e.target.value)
    }

    return (
        <div className='m-2'>
            <Input
                placeholder="Search..."
                value={filter}
                onChange={onChangeInputHandler}
            />
        </div>

    )
}

export default FilterInput