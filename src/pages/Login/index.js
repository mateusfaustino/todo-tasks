import React from 'react'
import Container from './styles'
import AuthGoogleButton from '../../components/styleguide/molecules/Buttons/Auth/AuthGoogleButton'
const Login = (props) => {
    return(
        <Container loginModal={props.loginModal}>
          <AuthGoogleButton>
            Faça o login com o Google
          </AuthGoogleButton>
        </Container>
    )
}
export default Login