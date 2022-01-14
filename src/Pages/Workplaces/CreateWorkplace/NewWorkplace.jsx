import { observer } from 'mobx-react'
import React from 'react'

import '../../../Common/style/form.scss'
import CreateForm from '../../../Components/Workplaces/CreateWorkplace/CreateForm'

const NewWorkplace = observer(() => {
    
    return (
        <div>
            <h3>Novo radno mjesto</h3>
            <CreateForm />
        </div>
    )
})

export default NewWorkplace