<template>
    <div>
        <nav v-if="$store.getters.isLoggedIn" class="navbar navbar-expand-lg navbar-dark" style="background-color: #2c0635">
            <button class="btn btn-success mr-5" type="button" @click="sidebar=!sidebar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"><strong>POINT OF</strong> SALE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto text-white">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav float-right mr-3">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{$store.state.user_data.userName}}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Profile</a>
                            <router-link class="dropdown-item" to="signOut">Sign Out</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <div id="wrapper">
            <div v-if="$store.getters.isLoggedIn" id="sidebar-wrapper" :class="toggleSidebar">
                <ul class="sidebar-nav">
                    <li>

                            <router-link to="dashboard">
                                <i class="material-icons" style="vertical-align: text-bottom">
                                    dashboard
                                </i><span> Dashboard</span></router-link>
                    </li>

                    <li><router-link to="employee">
                        <i class="material-icons" style="vertical-align: text-bottom">
                            person_outline
                        </i><span>  Employee</span></router-link></li>
                    <li><router-link to="masterSetup">
                        <i class="material-icons" style="vertical-align: text-bottom">
                            settings
                        </i><span>  Master Setup</span></router-link></li>
                </ul>
            </div>

            <div id="page-content-wrapper" :class="toggledContent">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Navigation",

        data(){
            return{
                sidebar:false,
            }
        },

        computed:{
            toggleSidebar(){
                return{
                    toggledSidebar: this.sidebar,
                    //
                }
            },
            toggledContent(){
                return{
                    toggledPageContent:this.sidebar
                }
            }
        }
    }
</script>

<style scoped>

    #sidebar-wrapper{
        z-index: 1000;
        position: absolute;
        width: 0px;
        height: 100%;
        overflow-y: hidden;
        background: #683a99;
        opacity: 0.9;
    }
    #page-content-wrapper{
        width: 100%;
        position: absolute;
        padding: 15px;
        border: 5px;
    }
    .toggledSidebar{
        width: 250px !important;
    }

    .toggledPageContent{
        padding-left: 250px !important;
    }
    .sidebar-nav{
        padding: 0px;
        list-style: none;
    }
    .sidebar-nav li{
        text-indent: 20px;
        line-height: 50px;
    }
    .sidebar-nav li a{
        display: block;
        text-decoration: none;
        color: white;
    }
    .sidebar-nav li a:hover{
        background: #946ac1;
    }

</style>