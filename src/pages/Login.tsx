import React, { ReactElement, FunctionComponent } from 'react'
import {useState, useEffect} from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { LoginUser } from '../services/Login'
import { makeStyles, createStyles } from "@material-ui/core/styles"
import {IconButton} from '@material-ui/core'
import {InputAdornment} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

interface Props {
    
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: "20vh"
        },
        padd: {

            padding: "20px"
        }
    })
)

const Login: FunctionComponent<Props> = ({ }) => {
    const [Values, setValues] = useState({
        "email": "",
        "password": ""
    })

    const [showPassword, setshowPassword] = useState(false)    

    const onChangeHandler = (e: any) => {
        setValues({ ...Values, [e.target.name]: e.target.value });
    }
    console.log(Values);

    const history = useHistory();

    const passwordVisible = () => setshowPassword(!showPassword);
    

    const onClickHandler = async () => {
        const abc = await LoginUser(Values);
        console.log(abc.data);
        if (abc.status === 200) {
            localStorage.setItem("token", abc.data.token);
            history.replace('/dashboard');
        } else if (abc.status === 201) {
            alert("User not registered");
        } else if (abc.status === 203) {
            
            alert("user not registered");
 }
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            history.replace('/dashboard')
        }
    }, [])

const classes = useStyles()

    return (

        
        <div className = {classes.root}>
            <label>
              
                 <LockOutlinedIcon />
            </label>
            <div>
                Sign In
                </div>
            
            <div className = {classes.padd}>
            
            
            <TextField
                    label="Enter Email"
                    name="email"
                    
                    onChange = {(e) => onChangeHandler(e)}
            />
            </div>
            <div className = {classes.padd}>
            
          
                <TextField
                    type= {showPassword ? "text" : "password"}
                    label="Enter Password"
                    name="password"
                    onChange = {(e) => onChangeHandler(e)}
 InputProps={{
          endAdornment: (
            <InputAdornment position="end">
             <IconButton onClick={passwordVisible} > 
             {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
            }
                 </IconButton>
            </InputAdornment>
          ),
        }}
                />
               
            </div >
            <div className={classes.padd}>
        <Button onClick={() => onClickHandler()}  color="primary" variant= "contained">Sign In</Button>
            </div>
            </div>
            
    ) };

export default Login;