import React from 'react'
import Container from './styles'
import Button from '../../../Buttons/buttons'
import GoogleIcon from './google-icon.svg'
const AuthGoogleButton = (props) => {
    return(
        <Container>
            <Button onClick={props.onClick} color='primary' startIcon={<img src={GoogleIcon} alt="let me ask"/>}>
                {props.children}
            </Button>
        </Container>
    )
}
export default AuthGoogleButton