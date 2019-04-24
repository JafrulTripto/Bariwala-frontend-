<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header text-white" style="background-color: #2c0635">
                <h3 class="h3">Employee</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4 py-1">
                        <input type="email" class="form-control" v-model="searchEmployee" placeholder="Search">
                    </div>
                    <div class="col-lg-8 col-sm-12 col-md-8 py-1">
                        <button class="float-right btn btn-success" data-toggle="modal" data-target="#addEmpModal">Add employee</button>
                    </div>
                    <NewEmployee id="addEmpModal"></NewEmployee>

                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header text-white"  style="background-color: #2c0635">
                <h3 class="h3">Employee List</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(employee,index) in tasks">
                            <th scope="row">{{employee.id}}</th>
                            <td><img :src="avatar_link+employee.user_details.image" alt="Avatar" class="avatar"> {{employee.name}}</td>
                            <td>{{employee.email}}</td>
                            <td>{{employee.user_details.phn_no}}</td>
                            <td>{{employee.user_details.designation}}</td>

                            <td>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-danger" @click="deleteEmp(employee.id,index)">
                                        <i class="material-icons">close</i>
                                    </button>
                                    <button type="button" class="btn btn-warning">
                                        <i class="material-icons">edit</i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import axios from 'axios';
    import NewEmployee from "./NewEmployee";

    export default {
        name: "Employee",
        components:{
           NewEmployee:NewEmployee,
        },

        data() {
            return {
                searchEmployee:'',
                avatar_link:'http://localhost/bariwala/storage/app/public/',
            }
        },
        methods: {
           /* addEmployee() {
                this.$router.push('addEmployee')

            },*/
           /* showEmployee() {
                let _this = this;
                axios.get(_this.$store.state.httpLink + 'showEmployee')
                    .then(function (response) {
                        _this.employees = response.data;
                    }).catch(function (error) {
                    console.log(error);
                })
            },*/
            deleteEmp(id, key) {
                let _this = this;
                console.log(id, key)
                axios.post(_this.$store.state.httpLink + 'deleteEmployee?id=' + id)
                    .then(function (response) {
                        _this.$store.state.employees.splice(key,1);
                        console.log(_this.$store.state.employees)
                    }).catch(function (error) {
                    console.log(error);
                })
            }

        },
        computed: {
            tasks() {
                let _this = this;
                //console.log(_this.$store.getters.databaseRead);
                return _this.$store.state.employees.filter(task => {
                    if (_this.searchEmployee) {
                        return task.name.toLowerCase().includes(_this.searchEmployee.toLowerCase())
                    } else
                        return true;
                });
            },

        },
        created() {
                 this.$store.dispatch('showEmployee');
        }
    }
</script>

<style scoped>
    .avatar {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>