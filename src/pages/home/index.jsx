import React,{useEffect, useState, useContext} from "react";
import Container from './styles'
import Tasks from './Taks'
import FloatButton from '../../components/styleguide/molecules/Buttons/FloatButton'
import NewTask from '../NewTask'
import Login from '../Login'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../services/firebase'
import { useAuthContex } from "../../contexts/AuthContext";
import Loading from '../../components/styleguide/atoms/Loading'
const Home = () => {
    const [newTaskModal, setNewTaskModal] = useState(false)
    const [loginModal, setLoginModal] = useState(true)
    const [user] = useAuthState(auth)
    const {tasks} = useAuthContex()
    
    return user? tasks? (
        <Container newTaskModal={newTaskModal}>
            <Tasks/>
            <FloatButton className='addFB' onClick={()=>setNewTaskModal(!newTaskModal)}/>
            <NewTask newTaskModal={newTaskModal} setNewTaskModal={setNewTaskModal}/>
        </Container>
    ):(<Loading/>)
    :(<Login loginModal={loginModal}/>)
}
export default Home