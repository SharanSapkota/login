import React, { ReactElement } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {TextField} from '@material-ui/core'
import InputController from '../components/InputController'
import { addUser } from '../services/newUser'
import {useHistory} from 'react-router-dom'


interface Props {
    
}

type Inputs = Record<"username"|"password"|"email"|"phoneNumber", string >

export default function SignUpp({ }: Props): ReactElement {
    const history = useHistory()

    const { register, handleSubmit, control, watch, formState: { errors } } = useForm<Inputs>()

    const onSubmit = async (data: Inputs) => {
    const newss = await addUser(data)
     console.log(newss)

     if (newss === 200) {
         history.replace('/success')
     } else if (newss === 201) {
         alert("enter all fields")
     } else if (newss === 202) {
         alert ("email already taken")
     }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label>Username</label>
            <InputController fieldName = "username" controls = {control} inputType = "text"/>
            <InputController fieldName = "password" controls = {control} inputType = "password"/>
            <InputController fieldName = "email" controls = {control} inputType = "text"/>
            <InputController fieldName="phone_number" controls={control} inputType="number" />
            
            {/* <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} />} */}
      {/* /> */}

               <input type = "submit" />
        


        </form>
    )
}
