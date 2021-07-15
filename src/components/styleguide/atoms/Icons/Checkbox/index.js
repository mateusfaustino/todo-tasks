import React from 'react'
import Container from './styles'
import { ReactComponent as Icon } from './icon.svg'
const Checkbox = (props) => {
    return(
        <Container checked={props.checked}>
          <Icon/>
        </Container>
    )
}
export default Checkbox