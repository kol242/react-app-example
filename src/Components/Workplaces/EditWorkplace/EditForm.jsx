import { observer } from 'mobx-react'
import React from 'react'
import Input from './Input'
import '../../../Common/style/form.scss'
import Header from './Header'
import Buttons from './Buttons'

const EditForm = observer(({form}) => {
    return (
        <div>
            <form onSubmit={form.onSubmit}>
                <Header />
                <Input field={form.$('name')}/>
                <Input field={form.$('description')}/>
                <Input field={form.$('salary')}/>
                <Buttons form={form} />
            </form>
        </div>
    )
})

export default EditForm
