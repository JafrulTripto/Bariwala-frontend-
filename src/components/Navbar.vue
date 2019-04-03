<template>
    <div>
        <nav v-if="$store.getters.isLoggedIn" class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="btn btn-success mr-5" type="button" @click="sidebar=!sidebar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"><strong>POINT OF</strong> SALE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ">
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
                    <li class="nav-item">
                        <router-link tag="button" class="btn btn-warning float-right" to="signOut">Log Out</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div id="wrapper">
            <div v-if="$store.getters.isLoggedIn" id="sidebar-wrapper" :class="toggleSidebar">
                <ul class="sidebar-nav">
                    <li><router-link to="dashboard">Dashboard</router-link></li>
                    <li><router-link to="employee">Employee</router-link></li>
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
        background: #2c3e50;
        opacity: 0.9;
    }
    #page-content-wrapper{
        width: 100%;
        position: absolute;
        padding: 15px;
        border: 5px seagreen;
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
        line-height: 40px;
    }
    .sidebar-nav li a{
        display: block;
        text-decoration: none;
        color: white;
    }
    .sidebar-nav li a:hover{
        background: cadetblue;
    }

</style>