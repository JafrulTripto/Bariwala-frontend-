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
                                <v-form ref="signUpForm" enctype="multipart/form-data">
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
                                                              v-model="imageName"
                                                ></v-text-field>
                                            <v-btn raised @click="$refs.fileUpload.click()">Upload Image</v-btn>
                                                <v-flex md4 sm6 xs12>

                                                    <input type="file"
                                                           v-on:change="onImageChange"
                                                           style="display: none"
                                                           ref="fileUpload">
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
    import axios from 'axios'

    export default {
        name: "SignUp",

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    NID_no: null,
                    password: '',
                    confirmPass: '',
                    date_of_birth: null,
                    occupation: '',
                    house_no: '',
                    road_no: '',
                    thana: '',
                    district: '',
                    phn_no:'',
                    image:''
                },
                imageName:'',
                nameInputRules:[
                    v => !!v || 'Name is required',
                    v => (v &&v.length>=3) || 'Name must be 3 character'
                ],
                emailInputRules:[
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'Must be valid E-mail'
                ],
                passwordInputRules:[
                    v => !!v || 'Password is required',
                    v => (v &&v.length>=6) || 'Password must be 6 character'
                ],
                confirmPassInputRules:[
                    v => !!v || 'Password is required',
                    v => (v &&v.length>=6) || 'Password must be 6 character'
                ],
                nidInputRules:[
                    v => !!v || 'NID is required',
                    v => (v && v.length)>=31 || 'Enter a valid NID'
                ],
                occupationInputRules:[
                    v => !!v || 'Occupation is required',
                ],
                houseInputRules:[
                    v => !!v || 'House number is required',
                ],
                roadInputRules:[
                    v => !!v || 'Road number is required',
                ],
                thanaInputRules:[
                    v => !!v || 'Thana is required',

                ],
                districtInputRules:[
                    v => !!v || 'District is required',
                ],
                birthDateInputRules:[
                    v => !!v || 'Birth date is required',
                ],
                phnNoInputRules:[
                    v => !!v || 'Phone number is required',
                ],
            }
        },

        methods:{
            onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
                console.log(e)
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.form.image = e.target.result;
                    vm.imageName = file.name;
                };
                reader.readAsDataURL(file);
            },
            submit(){
                console.log(this.form);
                if (this.$refs.signUpForm.validate()){
                    axios.post(this.$store.state.httpLink + 'signUp',this.form)
                        .then(function (response) {
                            console.log(response);
                        }).catch(function (error) {
                        console.log(error);
                    })
                }
            },
            resetForm() {
                this.$refs.signUpForm.reset();
            },
            onFileSelected(event){
                if (event.target.files[0].size>50000){
                    this.form.image = 'File is too large';
                }
                else if (event.target.files[0].name.lastIndexOf('.')<=0) {
                    this.form.image ="Insert a valid file";
                }
                else{
                    this.form.image = event.target.files[0];
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