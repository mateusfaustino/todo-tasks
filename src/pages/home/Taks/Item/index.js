import React,{useEffect, useState} from 'react'
import Container from './styles'
import Checkbox from '../../../../components/styleguide/atoms/Icons/Checkbox'
import { MdDelete} from 'react-icons/md'
import {useAuthContex} from '../../../../contexts/AuthContext'
const Item = (props) => {
    const {onCompleteTask,onDeleteTask}=useAuthContex()
    function handleCheck(){
        onCompleteTask(props.Id,props.complete)
    }
    async function handleDelete(){
        onDeleteTask(props.Id)
    }
    return(
            <Container complete={props.complete}>
                <div className='text'>
                    <Checkbox onClick={handleCheck}  checked={props.complete}/>
                    {props.children}
                </div>
                <MdDelete onClick={handleDelete}/>
            </Container>
    )
}
export default Item