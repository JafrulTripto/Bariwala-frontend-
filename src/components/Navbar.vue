<template>
    <nav>
        <v-toolbar flat app class="light-blue darken-1">
            <v-toolbar-side-icon class="white--text" @click="drawerFunctionality"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase white--text">
                <span>Point Of</span>
                <span class="font-weight-light"> Sale</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn  flat color="red">
                <router-link v-if="loggedIn" to="/signOut" class="white--text">Sign Out</router-link>
                <router-link v-else to="/">Sign In</router-link>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer disable-resize-watcher v-model="drawer" app class="light-blue darken-1">
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
                    {icon:'dashboard', text:'Dashboard', route: '/dashboard'},
                    {icon:'accessibility', text:'Employee', route: '/employee'},
                    {icon:'folder', text:'Sign In', route: '/'},
                ]
            }
        },
        methods:{

            drawerFunctionality(){
                if (!this.loggedIn){
                    this.drawer = false;
                }
                else {
                    this.drawer = !this.drawer;
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