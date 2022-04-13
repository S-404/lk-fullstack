import React, {FC} from "react"
import {Input} from "reactstrap"
import {useActions} from "../../../hooks/useActions"
import {useTypedSelector} from "../../../hooks/useTypedSelector"
import {SortingTypes} from "../../../types/store/sortContactsTypes"

const SortInputs: FC = () => {

    const {setSortContacts} = useActions()
    const {sort} = useTypedSelector(state => state.sortContacts)

    const selectCriteriaHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSortContacts({...sort, criteria: e.target.value} as SortingTypes)
    }

    const selectOrderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSortContacts({...sort, sortingOrder: e.target.value} as SortingTypes)
    }

    return (
        <div className="d-flex flex-row align-items-center">
            <span className="col-2">Sort by: </span>
            <Input
                type="select"
                name="sortCriteriaSelect"
                onChange={selectCriteriaHandler}
            >
                <option value="username">Name</option>
                <option value="job">Job</option>
            </Input>
            <Input
                type="select"
                name="sortOrderSelect"
                onChange={selectOrderHandler}
            >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </Input>

        </div>
    )
}

export default SortInputs