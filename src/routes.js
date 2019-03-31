
import Signup from "./components/SignUp";
import Dashboard from "./components/Dashboard"
import SignIn from "./components/SignIn"
import SignOut from "./components/signOut"
import dashboard from './components/companyDashboard'
import Employee from "./components/Employee";
import EmployeeReg from './components/employeeReg'

export default [
    {
        path:'/signUp/:type',
        component:Signup,
        name:'signUp',

    },
   /* {
        path:'/dashboard',
        component:dashboard,
        name:'dashboard',
        meta:{
            requiresAuth:true
        }
    },*/
    {
        path:'/',
        component:SignIn,
        name:'signIn',
        meta:{
            requiresVisitor:true
        }
    },
    {
        path:'/dashboard',
        component:dashboard,
        name:'dashboard',
        meta:{
            requiresAuth:true
        }
    }, {
        path:'/employee',
        component:Employee,
        name:'employee',
        meta:{
            requiresAuth:true
        }
    },
    /*{
        path:'addEmployee',
        component:EmployeeReg,
        name:'addEmp',
        meta:{
            requiresAuth:true
        }
    },*/
    {
        path:'/signOut',
        component:SignOut,
    },
]


