
import Signup from "./components/SignUp";
import Dashboard from "./components/Dashboard"
import SignIn from "./components/SignIn"
import SignOut from "./components/signOut"

export default [
    {
        path:'/signUp',
        component:Signup,
        name:'signUp',
        meta:{
            requiresVisitor:true
        }
    },
    {
        path:'/dashboard',
        component:Dashboard,
        name:'dashboard',
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/',
        component:SignIn,
        name:'signIn',
        meta:{
            requiresVisitor:true
        }
    },
    {
        path:'/signOut',
        component:SignOut,
    },
]


