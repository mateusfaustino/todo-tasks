import { createContext, useState, useEffect } from 'react'
import firebase,{ auth, firestore } from '../services/firebase'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'
export const AuthContext = createContext({})

const AuthContextProvider=(props)=>{
  const [user, setUser]=useState()
  const history = useHistory()
  const currentUserId = auth.currentUser ? auth.currentUser.uid: null
  const tasksRef = firestore.collection(`users/${currentUserId}/tasks`)
  const [tasks] = useCollectionData(tasksRef.orderBy('createdAt',"desc"), {idField:"id"})
  const singout = async () =>{
    await auth.signOut()
    history.push('/')
  }
  const onSubmitTask = (taskText)=>{
    if(!currentUserId){ 
      return
    }
    if (taskText.trim()===''){
      return
    }
    tasksRef.add({
      complete:false,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      text : taskText
    }
  )}
  function onCompleteTask(id, complete){
    tasksRef.doc(id).set({complete:!complete},{merge:true})
  }
  function onDeleteTask(id, complete){
    tasksRef.doc(id).delete()
  }

  async function signinWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider)

    
    if(res.user){
      const {displayName, photoURL, uid} = res.user
      if(!displayName|| !photoURL){
        throw new Error ('Missing informations from Google Account.')
      }
      setUser({
        id:uid,
        name:displayName,
        avatar:photoURL
      })
    } 
    history.push('/')
    
  }
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged(user=>{
      if(user){
        const {displayName, photoURL, uid} = user
        if(!displayName|| !photoURL){
          throw new Error ('Missing informations from Google Account.')
        }
        setUser({
          id:uid,
          name:displayName,
          avatar:photoURL
        })
      }
    })
    return () =>{
      unsubscribe()
    }
  }, [])

  
  return(
          <AuthContext.Provider 
            value={{
              user,
              tasks,
              signinWithGoogle,
              singout,
              onSubmitTask,
              onCompleteTask,
              onDeleteTask,
            }}>
              {props.children}
          </AuthContext.Provider>
      )
  }
  export function useAuthContex(){
    const {user,signinWithGoogle,singout,onSubmitTask,tasks,onCompleteTask,onDeleteTask} = useContext(AuthContext)
    return {user,signinWithGoogle,singout,onSubmitTask,tasks,onCompleteTask,onDeleteTask}
}
export default AuthContextProvider