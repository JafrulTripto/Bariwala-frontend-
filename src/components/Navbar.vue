<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="gray--text" @click="drawerFunctionality"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase gray--text">
                <span class="font-weight-light">Bari</span>
                <span>wala</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn  flat color="red">
                <router-link v-if="loggedIn" to="/signOut">Sign Out</router-link>
                <router-link v-else to="/">Sign In</router-link>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer disable-resize-watcher v-model="drawer" app class="light-blue darken-3">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="../assets/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-md-justify">Jafrul Hossain</p>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>


    export default {
        name: "Navbar",

        data(){
            return{
                drawer:false,
                links:[
                    {icon:'dashboard', text:'Dashboard', route: '/Dashboard'},
                    {icon:'folder', text:'Sign In', route: '/'},
                ]
            }
        },
        methods:{

            drawerFunctionality(){
                if (this.loggedIn){

                    this.drawer = !this.drawer;
                }
                else {
                    this.drawer = false;
                }
            }
        },
        computed:{
            loggedIn(){
                return this.$store.getters.isLoggedIn;
            },
        }


    }
</script>

<style scoped>

</style>