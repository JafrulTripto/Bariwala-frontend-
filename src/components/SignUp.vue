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
                                <v-form ref="signInForm" enctype="multipart/form-data">
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
                                                              type="password"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md6 sm6 xs12>
                                                <v-text-field outline label="Confirm Password"
                                                              v-model="form.confirmPass"
                                                              type="password"
                                                              :rules="passwordInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md6 sm6 xs12>
                                                <v-text-field outline label="NID No"
                                                              v-model="form.NID_no"
                                                              :mask="'####-####-###-####-##'"
                                                              :rules="nidInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md6 sm6 xs12>
                                                <v-text-field outline v-model="form.phn_no"
                                                              :mask="'#####-######'"
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
                                                    <v-date-picker v-model="form.date_of_birth"

                                                    ></v-date-picker>
                                                </v-menu>
                                            </v-flex>
                                            <v-flex md4 sm6 xs12>
                                                <v-text-field outline label="House No"
                                                              v-model="form.house_no"
                                                              :rules="houseInputRules"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex md4 sm6 xs12>
                                                <v-text-field outline label="Road"
                                                              v-model="form.road_no"
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

                                                <v-text-field label="Image (Max 50kb)"
                                                              disabled
                                                              v-model="fileName">
                                                </v-text-field>
                                            <v-btn raised @click="$refs.fileUpload.click()">Upload Image</v-btn>
                                                <v-flex md4 sm6 xs12>

                                                    <input type="file"
                                                           style="display: none"
                                                           ref="fileUpload"
                                                           @change="onFileSelected">
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
    import {authMixins} from "../Mixins/authMixins";

    export default {
        name: "SignUp",

        data() {
            return {}
        },
        mixins:[authMixins],

        methods:{
            submit(){
                if (this.$refs.signInForm.validate()){
                    this.$store.state.form=this.form;
                    console.log(this.form)
                    this.$store.commit('signUp');
                }
            },
            onFileSelected(event){
                if (event.target.files[0].size>50000){
                    this.form.avatar = 'File is too large';
                }
                else if (event.target.files[0].name.lastIndexOf('.')<=0) {
                    this.form.avatar ="Insert a valid file";
                }
                else{
                    this.form.avatar = event.target.files[0];
                    this.fileName = event.target.files[0].name;
                }
            }
         },

        computed: {
            formattedBirthDate() {
                return this.form.date_of_birth ? moment(this.form.date_of_birth).format('LL') : '';
            },
        },

    }
</script>

<style scoped>

</style>