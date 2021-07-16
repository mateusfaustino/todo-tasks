import React from 'react'
import Container from './styles'
import AuthGoogleButton from '../../components/styleguide/molecules/Buttons/Auth/AuthGoogleButton'
import firebase, { auth } from '../../services/firebase'
import { useAuthContex, AuthContext } from '../../contexts/AuthContext'
import {useContext} from 'react'
const Login = (props) => {
  const {setUser,user,signinWithGoogle } = useContext(AuthContext)
  
  return(
        <Container loginModal={props.loginModal}>
          <h2>
            Entre com o Google
          </h2>
          <AuthGoogleButton onClick={signinWithGoogle}>
            sign in
          </AuthGoogleButton>
        </Container>
    )
}
export default Login