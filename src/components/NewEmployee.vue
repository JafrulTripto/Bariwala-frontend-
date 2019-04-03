<template>
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="modal-body col-md-8 ">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import axios from 'axios'

    export default {

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    NID_no: null,
                    password: '',
                    confirmPass: '',
                    is_admin:false,
                    date_of_birth: null,
                    designation: '',
                    house_no: '',
                    road_no: '',
                    thana: '',
                    district: '',
                    phn_no:'',
                    image:'',
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
                    v => (v === this.form.password) || 'Password doesn\'t match'
                ],
                nidInputRules:[
                    v => !!v || 'NID is required',
                    v => (v && v.length)>=13 || 'Enter a valid NID'
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
                let _this= this;

                if (_this.$refs.signUpForm.validate()){
                    axios.post(_this.$store.state.httpLink + 'addEmployee',_this.form)
                        .then(function (response) {
                            _this.$router.push({path:'/'});
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
        created() {
            console.log(this.$store.state.user_data.user_id);
        }

    }
</script>

<style scoped>

</style>