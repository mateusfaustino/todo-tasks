import React from 'react'
import Container from './styles'
import { ReactComponent as Icon } from './icon.svg'
const Checkbox = (props) => {
    return(
        <Container  checked={props.checked}>
          <Icon onClick={props.onClick}/>
        </Container>
    )
}
export default Checkbox