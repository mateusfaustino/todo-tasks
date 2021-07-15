import React,{useEffect, useState, useContext} from "react";
import Container from './styles'
import Tasks from './Taks'
import FloatButton from '../../components/styleguide/molecules/Buttons/FloatButton'
import NewTask from '../NewTask'
import Login from '../Login'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../services/firebase'
const Home = () => {
    const [newTaskModal, setNewTaskModal] = useState(false)
    const [loginModal, setLoginModal] = useState(true)
    const [user] = useAuthState(auth)
    console.log("user:",user);
    return user?
    (
        <Container newTaskModal={newTaskModal}>
            <Tasks/>
            <FloatButton className='addFB' onClick={()=>setNewTaskModal(!newTaskModal)}/>
            newTaskModal:{newTaskModal?'true':'false'}
            <NewTask newTaskModal={newTaskModal}/>
        </Container>
    )
    :(<Login loginModal={loginModal}/>)
}
export default Home