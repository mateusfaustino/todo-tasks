import React from 'react'
import Container from './styles'
import TextField from '../../components/styleguide/atoms/Form/TextField'
import Button,{OutlinedButton} from '../../components/styleguide/molecules/Buttons/buttons'
const NewTask = (props) => {
    return(
        <Container newTaskModal={props.newTaskModal}>
          <TextField/>
          <div className='buttonGroup'>
            <OutlinedButton className='cancel'>
              Cancel
            </OutlinedButton>
            <Button className='save'>
                Save
            </Button>
          </div>
        </Container>
    )
}
export default NewTask