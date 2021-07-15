import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import SpacingProvider from './contexts/SpacingContext'
import Navbar from './components/styleguide/molecules/navbar'
import ScreenProvider from './contexts/Screen'
import DataContextProvider from './contexts/DataContext'
import Home from './pages/Home/index'

const App = ()=>{
  return (
    <BrowserRouter>
      <ScreenProvider>
      <SpacingProvider>
        
        <GlobalStyle/>
          <DataContextProvider>
            <Navbar/>
            <Switch id='switchTag'>
              <Route path='/' exact component={Home}/>
            </Switch>
          </DataContextProvider>
        
      </SpacingProvider>
      </ScreenProvider>
    </BrowserRouter>
  )
}

export default App;
