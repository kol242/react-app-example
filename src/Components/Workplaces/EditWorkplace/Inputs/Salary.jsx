import { observer } from 'mobx-react'
import React from 'react'

const Salary = observer(({ defaultValue }) => {
    return (
        <div>
            <input 
                type="number"
                defaultValue={defaultValue()}
                name="workSalary"
            />
        </div>
    )
})

export default Salary
