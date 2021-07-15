import React from 'react'
import Container from './styles'
import { 
    TextField as UiTextField
} from '@material-ui/core'

const TextField = (props) => {
    return(
        <Container>
            <UiTextField  id="task" label="New Task" variant="outlined" />    
        </Container>
    )
}
export default TextField