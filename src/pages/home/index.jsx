import React,{useEffect, useState, useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Container from './styles'
import Tasks from './Taks'


const Home = () => {
    const {user} = useContext(AuthContext)
    return(
        <Container>
            <Tasks/>
        </Container>
    )
}
export default Home