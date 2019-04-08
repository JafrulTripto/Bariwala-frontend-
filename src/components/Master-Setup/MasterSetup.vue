<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header text-white" style="background-color: #2c0635">

                        <h4 class="d-inline">Role Settings</h4>
                        <button class="d-inline btn btn-success btn-sm float-right" data-toggle="modal" data-target="#addRoleModal">
                            <i class="material-icons">
                                add
                            </i>
                        </button>
                        <role-setup id="addRoleModal"></role-setup>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(role,index) in $store.state.roles">
                                    <th>{{role.id}}</th>
                                    <td>{{role.role_name}}</td>
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
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header text-white" style="background-color: #2c0635">

                        <h4 class="d-inline">Product Unit Settings</h4>
                        <button class="d-inline btn btn-success btn-sm float-right" data-toggle="modal" data-target="#addUnitModal">
                            <i class="material-icons">
                                add
                            </i>
                        </button>
                        <product-unit id="addUnitModal"></product-unit>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import axios from 'axios';
    import RoleSetup from "./RoleSetup";
    import productUnit from "./ProductUnit"
    export default {
        name: "MasterSetup",
        components: {
            RoleSetup:RoleSetup,
            productUnit:productUnit
        },

        data(){
            return{

            }
        },
        methods:{

        },
        created() {
            this.$store.dispatch('showRoles');
        }
    }
</script>

<style scoped>

</style>