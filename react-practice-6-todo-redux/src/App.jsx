import { Provider } from "react-redux"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { store } from "./app/store/store"


function App() {

  return (
    <Provider store = {store}>
      {/* <div className="w-full h-screen bg-red-100"></div> */}
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
