import React, { useState } from 'react'
import Container from './styles'
import TextField from '../../components/styleguide/atoms/Form/TextField'
import Button,{OutlinedButton} from '../../components/styleguide/molecules/Buttons/buttons'
import { useAuthContex } from '../../contexts/AuthContext'
const NewTask = (props) => {
  const{onSubmitTask}= useAuthContex()
  const [text,setText] = useState("")
  function handleCancel(){
    setText("")
    props.setNewTaskModal(false)
  }
  async function handleSubmitTask(event){
    event.preventDefault()
    if (text.trim()===''){
      return
    }
    await onSubmitTask(text)
    setText("")
    props.setNewTaskModal(false)
  }
  return(

      <Container newTaskModal={props.newTaskModal}>
    
        <TextField
          value={text}
          onChange={(event)=>setText(event.target.value)}
        />
        <div className='buttonGroup'>
          <OutlinedButton onClick={handleCancel} className='cancel'>
            Cancel
          </OutlinedButton>
          <Button onClick={(e)=>handleSubmitTask(e)} className='save'>
              Save
          </Button>
        </div>
      </Container>
  )
}
export default NewTask