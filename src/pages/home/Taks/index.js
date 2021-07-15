import React from 'react'
import Container from './styles'
import { useData } from '../../../contexts/DataContext'
import Item from './Item'
const Taks = (props) => {
    const {data} = useData()
    const tasks = data.tasks
  return(
        <Container>
          {tasks.map((task)=>{
            return(
              <Item checked={task.isDone=='false'? false :task.isDone=='true'?true:false}>
                {task.title}
              </Item>
            )
          })}
        </Container>
    )
}
export default Taks