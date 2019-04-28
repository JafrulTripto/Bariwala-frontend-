<template>
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header text-white" style="background-color: #2c0635" >
                    <h5 class="modal-title" id="exampleModalLongTitle">Add Employee</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="text-white" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="row d-flex justify-content-center p-2">
                    <div class=" modal-body col-md-12 ">
                        <form class="row d-flex justify-content-center">
                            <div class="form-group col-md-5">
                                <label for="first_name">First Name</label>
                                <input type="text" v-model="form.first_name" class="form-control" id="first_name" placeholder="Enter First Name">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="last_name">First Name</label>
                                <input type="text" v-model="form.last_name" class="form-control" id="last_name" placeholder="Enter Last Name">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="house">House No</label>
                                <input type="text" v-model="form.house_no" class="form-control" id="house" placeholder="Enter House No">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="road">Road No</label>
                                <input type="text" v-model="form.road_no" class="form-control" id="road" placeholder="Enter Road No">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="postal_code">Postal Code</label>
                                <input type="text" v-model="form.postal_code" class="form-control" id="postal_code" placeholder="Enter Postal Code">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="thana">Thana</label>
                                <input type="text" v-model="form.thana" class="form-control" id="thana" placeholder="Enter Thana">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="district">District</label>
                                <input type="text" v-model="form.district" class="form-control" id="district" placeholder="Enter District">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="designation">Designation</label>
                                <select class="form-control" id="designation" v-model="form.designation">
                                    <option :value="designation.id" v-for="designation in $store.state.designations">{{designation.designation_name}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-5">
                                <label>Birth Date</label>
                                <datetime input-class="form-control"
                                          v-model="form.date_of_birth"
                                          title="Birth Date"
                                          max-datetime="20000101T000000+0600">

                                </datetime>
                            </div>
                            <div class="form-group col-md-5">
                                <label for="NidNumber">NID Number</label>
                                <input type="text" v-model="form.NID_no" class="form-control" id="NidNumber" placeholder="NID Number">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="Phone">Phone Number</label>
                                <input type="text" v-model="form.phn_no" class="form-control" id="Phone" placeholder="Phone Number">
                            </div>
                            <div class="form-group custom-file col-md-6">
                                <input type="file" class="custom-file-input" v-on:change="onImageChange" id="customFile">
                                <label class="custom-file-label form-control" for="customFile">Choose Image</label>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button"
                            class="btn btn-danger"
                            data-dismiss="modal">
                        <i class="material-icons" style="vertical-align: text-bottom">
                            close
                        </i> CLOSE</button>
                    <button type="button"
                            class="btn btn-primary"
                            data-dismiss="modal"
                            @click="submit">
                        <i class="material-icons" style="vertical-align: text-bottom">
                            save_alt
                        </i> SAVE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {

        data() {
            return {
                form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    house_no: '',
                    road_no: '',
                    postal_code: '',
                    thana: '',
                    district: '',
                    NID_no: '',
                    date_of_birth: '',
                    designation: '',
                    phn_no:'',
                    image:'',
                },
                imageName:'',

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
                this.form.date_of_birth = this.formattedBirthDate;
                this.$store.dispatch('addEmployee',this.form).then(response=>{
                    this.$toastr.success('New Employee Added', 'Message',
                        {positionClass: "toast-bottom-right"});
                    this.form = {};
                    this.$store.dispatch('showEmployee');
                })
               /* let _this= this;
                console.log(this.form);
                    axios.post(_this.$store.state.httpLink + 'addEmployee',_this.form)
                        .then(function (response) {
                            _this.$store.dispatch('showEmployee');
                            _this.$toastr.warning('New Employee Added', 'Message',
                                {positionClass: "toast-bottom-right"});
                        }).catch(function (error) {
                        console.log(error);
                    })*/
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
                return this.form.date_of_birth ? moment(this.form.date_of_birth).format('YYYY-MM-DD') : '';
            },
        },
        created() {
            console.log(this.$store.state.user_data.user_id);
            this.$store.dispatch('showDesignation');
        }

    }
</script>

<style scoped>

i{
    font-size: 20px;
}
</style>