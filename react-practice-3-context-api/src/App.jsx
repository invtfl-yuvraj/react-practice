
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/profile'
import Login from './components/login'

function App() {

  return (
    <UserContextProvider>
      <div>
        <Login></Login>
        <hr />
        <Profile></Profile>
      </div>
    </UserContextProvider>
  )
}

export default App
