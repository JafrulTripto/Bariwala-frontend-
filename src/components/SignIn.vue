<template>
    <div class="signUp">
        <v-layout justify-center ma-5>
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

                                        <v-flex md10 sm12 xs12>
                                            <v-text-field label="Email"
                                                          v-model="form.email"
                                                          prepend-icon="email"
                                                          :rules="emailInputRules"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex md10 sm12 xs12>
                                            <v-text-field label="Password"
                                                          type="password"
                                                          prepend-icon="security"
                                                          v-model="form.password"
                                                          :rules="passwordInputRules"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-layout justify-end class="mx-5">
                                            <v-flex md4 sm10 xs10>
                                                <v-btn class="success mx-0 mt3" flat>Sign in</v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-form>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                    <v-layout justify-center align-center class="ma-3">
                        <v-flex xs-12 md12>
                            <v-btn flat block class="info" to="/signUp">Join now</v-btn>
                        </v-flex>

                    </v-layout>
                </v-card>
            </v-flex>

        </v-layout>

    </div>
</template>

<script>
    import {authMixins} from "../Mixins/authMixins";

    export default {
        name: "SignIn",
        mixins: [authMixins],

        data() {
            return {}
        },

    }
</script>

<style scoped>

</style>