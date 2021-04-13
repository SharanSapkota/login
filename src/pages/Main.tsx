import { ReactElement } from 'react'
import Button from '@material-ui/core/Button'

interface Props {
    
}

export default function Main({ }: Props): ReactElement {
    
    const onClickHandler = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <div>
            This is the main page
             <div>
                <Button onClick={() => onClickHandler()}>Log out</Button>
                </div>
        </div>
    )
}
