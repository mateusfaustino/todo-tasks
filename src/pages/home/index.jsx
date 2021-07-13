import React,{useEffect, useState, useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Container from './styles'
import Brand from './brand/index'


const Home = () => {
    const {user} = useContext(AuthContext)
    return(
        <Container>
            <Brand/>
        </Container>
    )
}
export default Home