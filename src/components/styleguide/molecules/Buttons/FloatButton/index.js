import React from 'react'
import Container from './styles'
import { Link } from "react-router-dom";
import {MdAdd} from 'react-icons/md'
import { Fab } from '@material-ui/core';

const FloatButton = (props) => {
    return(
        <Container>
                <Fab onClick={props.onClick} className='add' color="primary" aria-label="add">
                    <MdAdd />
                </Fab>
        </Container>
    )
}
export default FloatButton