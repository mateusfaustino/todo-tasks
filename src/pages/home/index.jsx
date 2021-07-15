import React,{useEffect, useState, useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Container from './styles'
import Tasks from './Taks'
import FloatButton from '../../components/styleguide/molecules/Buttons/FloatButton'
import NewTask from '../NewTask'
import Login from '../Login'

const Home = () => {
    const {user} = useContext(AuthContext)
    const [newTaskModal, setNewTaskModal] = useState(false)
    const [loginModal, setLoginModal] = useState(true)
    return(
        <Container newTaskModal={newTaskModal}>
            <Tasks/>
            <FloatButton className='addFB' onClick={()=>setNewTaskModal(!newTaskModal)}/>
            newTaskModal:{newTaskModal?'true':'false'}
            <NewTask newTaskModal={newTaskModal}/>
            <Login loginModal={loginModal}/>
        </Container>
    )
}
export default Home