import React,{useEffect, useState, useContext} from "react";
import Container from './styles'
import {ReactComponent as SVGLogo} from '../../../assets/logo.svg'
import Text from "./text";

const Brand = () => {
    return(
        <Container>
            <SVGLogo/>
            <Text/>
        </Container>
    )
}
export default Brand