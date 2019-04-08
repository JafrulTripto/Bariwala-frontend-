<template>
    <div class="modal fade" id="addRoleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #2c0635">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Role</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="newRole" class="text-dark">New Role</label>
                        <input type="text" class="form-control" id="newRole" placeholder="Role" v-model="role">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addNewRole">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "RoleSetup",

        data(){
            return{
                role:''
            }
        },
        methods:{
            addNewRole(){
                let _this = this;
                axios.post(_this.$store.state.httpLink + 'addRole?role_name='+_this.role)
                    .then(function (response) {
                        _this.$store.dispatch('showRoles');
                        _this.$toastr.success('New Role Added', 'Message',
                            {positionClass: "toast-bottom-right"});
                    }).catch(function (error) {
                    console.log(error);
                })
            },
        }
    }
</script>

<style scoped>

</style>