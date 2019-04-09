

import SignIn from "./components/SignIn"
import SignOut from "./components/signOut"
import dashboard from './components/companyDashboard'
import Employee from "./components/Employee";
import Settings from "./components/Master-Setup/MasterSetup"
import SystemSetup from './components/Master-Setup/ProductUnit'
import RoleSetup from './components/Master-Setup/RoleSetup'
import Suppliers from './components/Supplires'


export default [
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
    },
    {
        path:'/suppliers',
        component:Suppliers,
        name:'suppliers',
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/systemSetup',
        component:SystemSetup,
        name:'systemSetup',
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/employee',
        component:Employee,
        name:'employee',
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/masterSetup',
        component:Settings,
        name:'settings',
        meta:{
            requiresAuth:true
        },
        children:[
            {
                path:'roleSetup',
                component:RoleSetup,
                name:'roleSetup',
                meta:{
                    requiresAuth:true
                },
            }
        ]
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
        name:'signOut'
    },
]


