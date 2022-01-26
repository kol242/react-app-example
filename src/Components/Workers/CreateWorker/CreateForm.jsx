import { observer } from 'mobx-react'
import React from 'react'
import Contract from './Inputs/Contract'
import '../../../Common/style/form.scss'
import Input from './Inputs/Input'
import Header from './Header'
import Buttons from './Buttons'

const CreateForm = observer(({ form }) => {
    return (
        <div>
            <form onSubmit={form.onSubmit}>
                <Header />
                <Input field={form.$('name')}/>
                <Input field={form.$('lastName')}/>
                <Input field={form.$('age')}/>
                <Contract field={form.$('contract')}/>
                <Buttons form={form} />
            </form>
        </div>
    )
})

export default CreateForm
