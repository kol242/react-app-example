import { observer } from 'mobx-react'
import React from 'react'

const Salary = observer(({salary}) => {
    return (
        <div>
            <input 
                type="number"
                defaultValue={salary}
                required
                name="workerSalary"
            />
        </div>
    )
})

export default Salary
