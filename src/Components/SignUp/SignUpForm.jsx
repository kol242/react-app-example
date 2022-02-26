import { observer } from 'mobx-react'
import React from 'react'
import Input from './Inputs/Input'
import Buttons from './Buttons'

const SignUpForm = observer(({ form }) => {
    return (
        <div>
            <form onSubmit={form.onSubmit}>
                <Input field={form.$('email')}/>
                <Input field={form.$('password')}/>
                <Input field={form.$('confirmPass')}/>
                <Buttons form={form} />
            </form>
        </div>
    )
})

export default SignUpForm
