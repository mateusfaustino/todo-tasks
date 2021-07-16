import React from 'react'
import Container from './styles'
import {OutlinedButton} from '../../styleguide/molecules/Buttons/buttons'
import {useAuthContex} from '../../../contexts/AuthContext'

const SignOutButton = (props) => {
    const {singout,user} = useAuthContex()
    return user ?
    
    (
        <Container>
          <OutlinedButton onClick={singout} className='singout'>
              Singout
          </OutlinedButton>
        </Container>
    ):
    (<></>)
}
export default SignOutButton