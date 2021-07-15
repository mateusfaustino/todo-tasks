import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {AuthContextProvider} from './contexts/AuthContext'
import SpacingProvider from './contexts/SpacingContext'
import Navbar from './components/styleguide/molecules/navbar'
import ScreenProvider from './contexts/Screen'
import DataContextProvider from './contexts/DataContext'
import Home from './pages/Home/index'
import NewTask from './pages/NewTask/index'

const App = ()=>{
  return (
    <BrowserRouter>
      <ScreenProvider>
      <SpacingProvider>
        <AuthContextProvider>
        <GlobalStyle/>
          <DataContextProvider>
            <Navbar/>
            <Switch id='switchTag'>
              <Route path='/' exact component={Home}/>
            </Switch>
          </DataContextProvider>
        </AuthContextProvider>
      </SpacingProvider>
      </ScreenProvider>
    </BrowserRouter>
  )
}

export default App;
