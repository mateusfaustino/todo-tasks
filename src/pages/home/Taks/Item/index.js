import React from 'react'
import Container from './styles'
import Checkbox from '../../../../components/styleguide/atoms/Icons/Checkbox'
import { MdDelete} from 'react-icons/md'
const Item = (props) => {
    return(
            <Container>
                <div className='text'>
                    <Checkbox checked={props.checked}/>
                    {props.children}
                </div>
                <MdDelete/>
            </Container>
    )
}
export default Item