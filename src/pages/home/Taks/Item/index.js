import React from 'react'
import Container from './styles'
const Item = (props) => {
    return(
            <Container>
                {props.children}
            </Container>
    )
}
export default Item