<template>
    <div class="col-lg-12 mb-3">
        <div class="card">
            <div class="card-header text-white" style="background-color: #38032b">

                <h4 class="d-inline">Product Unit Settings</h4>
                <button class="d-inline btn btn-success btn-sm float-right" data-toggle="modal"
                        data-target="#addUnitModal">
                    <i class="material-icons">
                        add
                    </i>
                </button>

                <div class="modal fade" id="addUnitModal" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #2c0635">
                                <h5 class="modal-title" id="exampleModalLabel">Add New Unit</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="newRole" class="text-dark">New Unit</label>
                                    <input type="text" class="form-control" id="newRole" placeholder="Unit"
                                           v-model="unit">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addNewUnit">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

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
                        <tr v-for="(unit,index) in $store.state.units">
                            <th>{{unit.id}}</th>
                            <td>{{unit.unit_name}}</td>
                            <td>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-danger" @click="deleteUnit(unit.id)">
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
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ProductSetup",
        data() {
            return {
                unit: ''
            }
        },
        methods: {
            addNewUnit() {
                let _this = this;
                axios.post(_this.$store.state.httpLink + 'addUnit?unit_name=' + _this.unit)
                    .then(function (response) {
                        _this.$store.dispatch('showUnits');
                        _this.$toastr.success('New Product Unit Added', 'Message',
                            {positionClass: "toast-bottom-right"});
                        _this.unit = '';
                    }).catch(function (error) {
                    console.log(error);
                })
            },
            deleteUnit(id) {
                let _this = this;
                axios.post(_this.$store.state.httpLink +'deleteUnit?id='+id)
                    .then(function (response) {
                        _this.$store.dispatch('showUnits');
                        _this.$toastr.error('Unit Deleted', 'Message',
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