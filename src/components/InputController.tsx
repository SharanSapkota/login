import React, { ReactElement } from 'react'

import { useForm, Controller } from 'react-hook-form'
import {TextField} from '@material-ui/core'

interface Props {
    fieldName: any,
    controls: any,
    inputType: any
}

type Inputs = {
    fieldName: any,
    inputType: any

}

export default function InputController({ fieldName, controls, inputType}: Props): ReactElement {
    
        const { register, control, watch, formState: { errors } } = useForm<Inputs>()

    return (
        <div>
            <Controller
               
        name={fieldName}
        control={controls}
        defaultValue=""
                render={({ field }) => <TextField required type={inputType } {...field} />}
      />
        </div>
    )
}
