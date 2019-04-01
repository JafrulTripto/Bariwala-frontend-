<template>
    <div class="signUp">
        <v-layout justify-center class="ma-3">
            <v-flex md4 sm8 xs12>
                <v-card>
                    <v-toolbar dark color="primary" flat>
                        <v-toolbar-title class="white--text">Sign In</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>

                        <v-layout justify-center align-center>
                            <v-flex md12 sm10 xs12>
                                <v-form ref="signInForm">
                                    <v-container>

                                        <v-flex md12 sm12 xs12>
                                            <v-text-field label="Email"
                                                          v-model="form.email"
                                                          prepend-inner-icon="email"
                                                          outline
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex md12 sm12 xs12>
                                            <v-text-field label="Password"
                                                          type="password"
                                                          prepend-inner-icon="security"
                                                          v-model="form.password"
                                                          outline
                                            ></v-text-field>
                                        </v-flex>
                                        <v-layout justify-end>
                                                <v-btn class="success" flat @click="login">Sign in</v-btn>
                                        </v-layout>
                                    </v-container>
                                </v-form>

                            </v-flex>
                        </v-layout>
                        <v-layout justify-center align-center class="px-3">
                            <v-flex md12 sm10 xs12>
                                <v-alert
                                        :value="validateLogin"
                                        color="error"
                                        icon="error"
                                        outline
                                >
                                    Invalid Email or Password.
                                </v-alert>
                            </v-flex>
                        </v-layout>
                    </v-card-text>


                </v-card>
            </v-flex>

        </v-layout>

    </div>
</template>

<script>

    export default {
        name: "SignIn",

        data() {
            return {
                form:{
                    email:'',
                    password:''
                },
                alertValue:false,
            }
        },
        methods:{
            login(){
                let _this = this;

                this.$store.dispatch('retrieveUserData', _this.form)
                    .then(response=>{
                        console.log(response);
                        this.$router.push({path:'/dashboard'});
                        _this.$toastr.success('Successfully logged in', 'Message',
                            {positionClass: "toast-bottom-right"});
                    })
                    .catch(error=>{
                        console.log(error)
                        _this.alertValue=true;
                    })
            }
        },
        computed:{
            validateLogin(){
                return this.alertValue;
            }
        }

    }
</script>

<style scoped>

</style>