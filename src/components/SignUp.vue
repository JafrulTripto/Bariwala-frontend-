<template>
    <div class="signUp">
        <h1 class="subheading grey--text">Sign Up</h1>
        <v-layout justify-center>
            <v-flex md8 sm12 xs12>
                <v-card class="ma-3" flat>
                    <v-card-title class="display-2 grey--text font-weight-thin">
                        Sign up
                    </v-card-title>
                    <v-card-text>
                        <v-layout justify-space-around row>
                            <v-flex md10 sm12 xs12>
                                <v-form ref="signInForm">
                                    <v-container>
                                        <v-layout row wrap>
                                            <v-flex md6 row sm6 xs12>
                                                <v-text-field outline label="Name"
                                                              v-model="form.name"
                                                              :rules="nameInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md6 sm6 xs12>
                                                <v-text-field outline label="Email"
                                                              v-model="form.email"
                                                              :rules="emailInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row wrap>
                                            <v-flex md6 sm6 xs12>
                                                <v-text-field outline label="Password"
                                                              v-model="form.password"
                                                              :rules="passwordInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md6 sm6 xs12>
                                                <v-text-field outline label="Confirm Password"
                                                              v-model="form.confirmPass"
                                                              :rules="passwordInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md6 sm6 xs12>
                                                <v-text-field outline label="NID No"
                                                              v-model="form.nidNo"
                                                              :rules="nidInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md6 sm6 xs12>
                                                <v-text-field outline v-model="phnNumber"
                                                              :mask="mask"
                                                              label="Phone Number"
                                                              :rules="phnNoInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row wrap>
                                            <v-flex md4 sm6 xs12>
                                                <v-text-field outline label="Occupation"
                                                              v-model="form.occupation"
                                                              :rules="occupationInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md4 sm6 xs12>
                                                <v-menu>
                                                    <v-text-field outline :value="formattedBirthDate" label="Birth Date"
                                                                  append-icon="date_range"
                                                                  slot="activator"
                                                                  :rules="birthDateInputRules"
                                                    ></v-text-field>
                                                    <v-date-picker v-model="form.birthDate"

                                                    ></v-date-picker>
                                                </v-menu>
                                            </v-flex>
                                            <v-flex md4 sm6 xs12>
                                                <v-text-field outline label="House No"
                                                              v-model="form.houseNo"
                                                              :rules="houseInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md4 sm6 xs12>
                                                <v-text-field outline label="Road"
                                                              v-model="form.road"
                                                              :rules="roadInputRules"

                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md4 sm6 xs12>
                                                <v-text-field outline label="Thana"
                                                              v-model="form.thana"
                                                              :rules="thanaInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md4 sm6 xs12>
                                                <v-text-field outline label="District"
                                                              v-model="form.district"
                                                              :rules="districtInputRules"
                                                ></v-text-field>
                                            </v-flex>


                                        </v-layout>
                                        <v-btn class="success mx-0 mt3" flat @click="submit">Submit</v-btn>
                                        <v-btn class="warning mx-3 mt3" flat @click.prevent="resetForm">Reset</v-btn>
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
    import moment from 'moment'
    import {authMixins} from "../authMixins";

    export default {
        name: "SignUp",

        data() {
            return {}
        },
        mixins:[authMixins],

        methods:{
            submit(){
                if (this.$refs.signInForm.validate()){
                    this.$store.state.forms.push(this.form);
                    console.log(this.$store.state.forms);
                    this.resetForm();
                }
            },

        },

        computed: {
            formattedBirthDate() {
                return this.form.birthDate ? moment(this.form.birthDate).format('LL') : '';
            },
        },

    }
</script>

<style scoped>

</style>