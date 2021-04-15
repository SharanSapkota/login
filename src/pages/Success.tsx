import React, { ReactElement } from 'react'
import getAllUsers from '../services/AllUsers'

interface Props {
    
}

export default function Success({ }: Props): ReactElement {
    
    const onClickHandler = () => {
        getAllUsers()
    }
    return (
        <div>
            View all Users
            <button onClick= {()=>onClickHandler()}>abc</button> 
        </div>
    )
}