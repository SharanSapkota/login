import React, { ReactElement } from 'react'
import {useState} from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from "@material-ui/core/styles"
import 'fontsource-roboto';
import { addUser } from './API/newUser'
import {useHistory} from "react-router-dom";

interface Props {

}

const useStyles = makeStyles(() =>

    createStyles ({
    root: {
        font: "10px"
        }
    })
)

export default function Login({ }: Props): ReactElement {

    const history = useHistory();
    const [Values, setValues] = useState({
    "username": "",
    "password": "",
        "email": "",
        "phone_number": ""
    })

    const signInHandler = () => {
        history.push('/login')
    }
    
 const onClickHandler = async () => {
     const newss = await addUser(Values)
     console.log(newss)

     if (newss === 200) {
         history.replace('/success')
     } else if (newss === 201) {
         alert("enter all fields")
     }
    }

const onChangeHandler = (e: any) => {
    console.log(e.target.value)
    setValues({...Values, [e.target.name]: e.target.value })
   }
    console.log(Values)

    const classes = useStyles()
    return (
        <div className={classes.root}>
          
             <div>
                <label>Username:  </label>

                <TextField
                        
                        name="username"
                        
                    label="Enter Username"
                    id="outlined-basic"
                    variant="outlined"
                    required
                        onChange = {(e) => onChangeHandler(e)}
                    
                />
            </div>

            <div>
                <label>Password:  </label>

                <TextField
                        type="password"
                        name="password"
                        
                    label="Enter Password"
                    id="outlined-basic"
                        variant="outlined"
                        onChange = {(e) => onChangeHandler(e)}
                    
                />
            </div>
            <div>
            <label>email:  </label>

                <TextField
                    
                type= "email"
                label="Enter Email"
                id="outlined-basic"
                    variant="outlined"
                    name = "email"
                    onChange = {(e) => onChangeHandler(e)}
                
            />
            </div>
            <div>
            <label>Phone:  </label>

                <TextField
                    
                type= "number"
                label="Enter Phone Number"
                id="outlined-basic"
                    variant="outlined"
                    name = "phone_number"
                    onChange = {(e) => onChangeHandler(e)}
                
            />
            </div>

            <Button onClick = {()=> onClickHandler()}>Submit</Button>

            
        
          
            <div >
                Already have account?
                 <Button onClick = {() => signInHandler()}>Login</Button>
           </div>
        </div>
    )
}
