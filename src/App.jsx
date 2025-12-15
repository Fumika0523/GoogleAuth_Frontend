import HomePage from "./HomePage"
import Login from "./Login"
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path="/homepage" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
