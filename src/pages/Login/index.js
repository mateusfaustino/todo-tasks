import React from 'react'
import Container from './styles'
import AuthGoogleButton from '../../components/styleguide/molecules/Buttons/Auth/AuthGoogleButton'
import firebase, { auth } from '../../services/firebase'
const Login = (props) => {
  const signInWithGoogle = ()=>{
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }   
  return(
        <Container loginModal={props.loginModal}>
          <h2>
            Entre com o Google
          </h2>
          <AuthGoogleButton onClick={signInWithGoogle}>
            sign in
          </AuthGoogleButton>
        </Container>
    )
}
export default Login