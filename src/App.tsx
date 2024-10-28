import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./pages/ProtectedRoute"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Player from "./pages/Player"


function App() {

  return (
    <AuthContextProvider>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/signup'} element={<SignUp/>}/>
      <Route path={'/profile'} element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path="/playvideo/:id" element={<ProtectedRoute><Player/></ProtectedRoute>} /> 
    </Routes>
    </AuthContextProvider>
   
  )
}

export default App
