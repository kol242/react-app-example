import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/style/form.scss'
import Input from './Input'
import Buttons from './Buttons'
import Currency from './Currency'

const CreateForm = observer(({form}) => {
    return (
        <div>
             <form className="form-wrapper" onSubmit={form.onSubmit}>
                <Input field={form.$('name')} />
                <Input field={form.$('description')} />
                <Input field={form.$('salary')} />
                <Currency field={form.$('currency')}/>
                <Buttons form={form} />
            </form>
        </div>
    )
})

export default CreateForm
