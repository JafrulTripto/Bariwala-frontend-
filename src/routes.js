
import Team from "./components/Team";
import Projects from "./components/Projects";
import Dashboard from "./components/Dashboard";

export default [
    {
        path:'/',
        component:Dashboard,
    },

    {
        path:'/projects',
        component:Projects,
    },
    {
        path:'/team',
        component:Team,
    }
]


