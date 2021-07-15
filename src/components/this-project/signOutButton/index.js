import React from 'react'
import Container from './styles'
import {OutlinedButton} from '../../styleguide/molecules/Buttons/buttons'
import { auth } from '../../../services/firebase'

const signOutButton = (props) => {
    const singOut = () => auth.signOut()
    return(
        <Container>
          <OutlinedButton onClick={singOut} className='singout'>
              Singout
          </OutlinedButton>
        </Container>
    )
}
export default signOutButton