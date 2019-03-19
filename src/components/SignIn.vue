<template>
    <div class="signUp">
        <h1 class="subheading grey--text">Sign In</h1>
        <v-layout justify-center>
            <v-flex md6 sm8 xs12>
                <v-card class="ma-5" flat>
                    <v-card-title class="display-2 grey--text font-weight-thin">
                        Sign In
                    </v-card-title>
                    <v-card-text>
                        <v-layout justify-center>
                            <v-flex md10 sm8 xs12>
                                <v-form ref="signInForm">
                                    <v-container>
                                        <v-layout row wrap >
                                            <v-flex md10 sm12 xs12>
                                                <v-text-field outline label="Email"
                                                              v-model="form.email"
                                                              :rules="emailInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row wrap>
                                            <v-flex md10 sm12 xs12>
                                                <v-text-field outline label="Password"
                                                              v-model="form.password"
                                                              :rules="passwordInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-btn class="success mx-0 mt3" flat >Submit</v-btn>
                                        <v-btn class="warning mx-3 mt3" flat >Reset</v-btn>
                                    </v-container>
                                </v-form>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>

        </v-layout>

    </div>
</template>

<script>
    import {authMixins} from "../Mixins/authMixins";

    export default {
        name: "SignIn",
        mixins:[authMixins]
    }
</script>

<style scoped>

</style>