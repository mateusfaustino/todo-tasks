import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import SpacingProvider from './contexts/SpacingContext'
import Navbar from './components/styleguide/molecules/navbar'
import ScreenProvider from './contexts/Screen'
import Home from './pages/Home/index'
import AuthContextProvider from './contexts/AuthContext'

const App = ()=>{
  return (
    <BrowserRouter>
      <ScreenProvider>
      <SpacingProvider>
       <AuthContextProvider> 
        <GlobalStyle/>
            <Navbar/>
            <Switch id='switchTag'>
              <Route path='/' exact component={Home}/>
            </Switch>
            
        </AuthContextProvider>
      </SpacingProvider>
      </ScreenProvider>
    </BrowserRouter>
  )
}
export default App;
