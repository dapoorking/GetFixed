import * as React from 'react' 
import {UserProvider} from './src/context/userAuthContext'
import Router from './src/navigation/router'
import store from './src/Redux/store'
const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App
