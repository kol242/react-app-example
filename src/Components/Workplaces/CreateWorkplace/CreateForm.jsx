import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/style/form.scss'
import Input from './Input'
import Buttons from './Buttons'

const CreateForm = observer(({form}) => {
    return (
        <div>
             <form className="form-wrapper" onSubmit={form.onSubmit}>
                <Input field={form.$('name')} />
                <Input field={form.$('description')} />
                <Input field={form.$('salary')} />
                <Buttons form={form} />
            </form>
        </div>
    )
})

export default CreateForm
