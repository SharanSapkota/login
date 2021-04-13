import React, { ReactElement } from 'react'
import { makeStyles, createStyles } from "@material-ui/core/styles"


interface Props {
    text: String
}

const useStyles = makeStyles(() => 
    createStyles({
        root: {
            color: "red"
        }
    })
)

export default function Required({text }: Props): ReactElement {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {text} field is required *
        </div>
    )
}
