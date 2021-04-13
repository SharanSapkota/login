import { ReactElement } from 'react'
import {useState} from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from "@material-ui/core/styles"
import 'fontsource-roboto';
import { addUser } from '../services/newUser'
import { useHistory } from "react-router-dom";
import Required from '../Required';
import { useForm } from 'react-hook-form'
import {useStyles as abc} from '../css'


interface Props {

}



const useStyles = makeStyles(() =>

    createStyles ({
    root: {
      
    display: 'flex',
    flexDirection: 'column',
            alignItems: 'center',
            marginTop: "10vh",
        },

        padd: {
            padding: "20px",
        }
    })
)

export default function Login({ }: Props): ReactElement {

    const history = useHistory();

    const {register, handleSubmit, watch} = useForm()
    const [Values, setValues] = useState({
    "username": "",
    "password": "",
        "email": "",
        "phone_number": ""
    })
    console.log(watch("username"))

    const [Message, setMessage] = useState("")
    

    const signInHandler = () => {
        history.push('/login')
    }
    
    const onClickHandler = async () => {
     if(!Values.username) setMessage("username-e") 
     const newss = await addUser(Values)
     console.log(newss)

     if (newss === 200) {
         history.replace('/success')
     } else if (newss === 201) {
         alert("enter all fields")
     } else if (newss === 202) {
         alert ("email already taken")
     }
    }
    console.log(Message)

const onChangeHandler = (e: any) => {
    console.log(e.target.value)
    setValues({...Values, [e.target.name]: e.target.value })
   }
    console.log(Values)

    const classes = useStyles()
    var abcde = abc()

    const onSubmit = () => {
        console.log("hre")
    }
     console.log(register)
    return (
             
        <div className={classes.root}>
            <form onSubmit = {handleSubmit(onSubmit)}>  

            <div className = {abcde.roott}>
                Sign Up
            </div>
          
                <input {...register("username", {required: true})} />
                <input {...register("password", {required: true})} />
                <input {...register("email", {required: true})} />
                
             <div>
             

                <TextField
                        
                        name="username"
                        
                    label="Enter Username"
                    id="outlined-basic"
                    variant="outlined"
                    required
                        onChange = {(e) => onChangeHandler(e)}
                    
                />
            </div>
            {!Values.username ? <Required text = "Username" /> : ""}

            <div className = {classes.padd}>
                
                

                <TextField
                        type="password"
                        name="password"
                        
                    label="Enter Password"
                    id="outlined-basic"
                        variant="outlined"
                        onChange = {(e) => onChangeHandler(e)}
                    
                />
            </div>
             {!Values.password ? <Required text = "Password" /> : ""}
            <div className = {classes.padd}>
        

                <TextField
                    
                type= "email"
                label="Enter Email"
                id="outlined-basic"
                    variant="outlined"
                    name = "email"
                    onChange = {(e) => onChangeHandler(e)}
                
                />
                
            </div>
             {!Values.email ? <Required text = "Email" /> : ""}
            <div className = {classes.padd}>
           

                <TextField
                    
                type= "number"
                label="Enter Phone Number"
                id="outlined-basic"
                    variant="outlined"
                    name = "phone_number"
                    onChange = {(e) => onChangeHandler(e)}
                
            />
            </div>
                {!Values.phone_number ? <Required text = "Phone number" /> : ""}

            <Button onClick = {()=> onClickHandler()}>Submit</Button>

            <div >
                Already have account?
                 <Button onClick = {() => signInHandler()}>Login</Button>
                </div>
                <input type = "submit" />
                </form>
 
            </div>
          
        )
          
}
