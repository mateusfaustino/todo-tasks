import React , { useState, useEffect}from 'react'
import Container from './styles'
import Item from './Item'
import {useAuthContex} from '../../../contexts/AuthContext'
const Taks = (props) => {
  const {tasks} = useAuthContex()
  return(
      <Container>
        { 
          tasks && tasks.map((task, index)=>{
            return(
              <Item Id={task.id} complete={task.complete}>
                {task.text}
              </Item>
            )
          })
        }
      </Container>
    )
}
export default Taks