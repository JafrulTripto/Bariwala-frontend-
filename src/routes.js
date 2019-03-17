
import Signup from "./components/SignUp";
import Dashboard from "./components/Dashboard"
import SignIn from "./components/SignIn"

export default [
    {
        path:'/signUp',
        component:Signup,
    },
    {
        path:'/dashboard',
        component:Dashboard,
    },
    {
        path:'/',
        component:SignIn,
    },
]


