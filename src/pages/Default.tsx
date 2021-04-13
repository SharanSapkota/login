import React, { ReactElement } from 'react'
import { Button } from '@material-ui/core';

interface Props {
    
}

export default function Default({}: Props): ReactElement {
    return (
        <div>
            This is the default
             <Button color="primary" onClick={() => console.log("clicked")}>Hello World</Button>;
        </div>
    )
}
