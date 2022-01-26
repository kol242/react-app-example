import { observer } from 'mobx-react-lite'
import React from 'react'
import Contract from './Inputs/Contract'
import List from './List'
import '../../../Common/style/form.scss'
import Input from './Inputs/Input'
import Header from './Header'
import Buttons from './Buttons'

const EditForm = observer(({ form }) => {
    return (
        <div>
            <form onSubmit={form.onSubmit}>
                <Header />
                <Input field={form.$('name')} />
                <Input field={form.$('lastName')} />
                <Input field={form.$('age')} />
                <Input field={form.$('salary')} />
                <Contract field={form.$('contract')} />
                <List field={form.$('workplace')} />  
                <Buttons form={form} />
            </form>
        </div>
    )
})

export default EditForm
