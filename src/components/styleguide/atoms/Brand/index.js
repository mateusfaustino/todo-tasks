import React from 'react'
import Container from './styles'
import {ReactComponent as SVGLogo} from '../../../../assets/logo.svg'
import { Link } from 'react-router-dom'
const Brand = () => {
    return (
        <Container >
            <Link to='/'>
                <SVGLogo/>
            </Link>
        </Container>
    )
}
export default Brand