import { ReactElement } from 'react'
import {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import getAllUsers from '../services/AllUsers'

interface Props {
    
}

export default function Main({ }: Props): ReactElement {
   
    const tokenn = localStorage.getItem('token')

    const [Values, setValues] = useState<any[]>([])
    const [Loading, setLoading] = useState(false)


    useEffect(() => {
        console.log(Values)
        setLoading(false)
        console.log("false")
    }, [Values])

    const onClickHandler = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    const onClickHandler1 = async () => {
        setLoading(true)

        const getUser = await getAllUsers()

        setValues(getUser.getUsers)
            }

    return (
        <div>
            This is the main page
           
            <div>
         
                {
                    Loading ? "loading...":
                        Values.map((val) => {
                            return val.username
                        })
                 
                }
                <button onClick={() => onClickHandler1()}>View Users</button>

                <Button onClick={() => onClickHandler()}>Log out</Button>
                </div>
        </div>
    )
}