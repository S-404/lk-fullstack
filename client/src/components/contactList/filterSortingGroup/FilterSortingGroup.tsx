import React, {FC} from "react"
import FilterInput from "./FilterInput"
import SortInputs from "./SortInputs"

const FilterSortingGroup:FC = () => {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center w-100 m-2">
            <div className="col-4">
                <FilterInput/>
            </div>
            <div className="col-7">
                <SortInputs/>
            </div>
        </div>
    )
}

export default FilterSortingGroup