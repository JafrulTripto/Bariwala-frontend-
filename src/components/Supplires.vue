<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header text-white" style="background-color: #2c0635">
                <h3 class="h3">Supplier</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-10 col-md-4 col-lg-4">
                        <input type="email" class="form-control" v-model="searchSupplier" placeholder="Search">
                    </div>
                    <div class="clearfix col-lg-8">
                        <button class="float-right btn btn-success" data-toggle="modal" data-target="#supplierModal">Add Supplier</button>
                    </div>

                    <div class="modal fade" id="supplierModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header text-white" style="background-color: #2c0635" >
                                    <h5 class="modal-title" id="exampleModalLongTitle">Add Supplier</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span class="text-white" aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="row d-flex justify-content-center p-2">
                                    <div class=" modal-body col-md-12 ">
                                        <form class="row d-flex justify-content-center">
                                            <div class="form-group col-md-5">
                                                <label for="exampleInputEmail1">Supplier Name</label>
                                                <input type="text" v-model="form.name" class="form-control" id="nameInput" placeholder="Enter Name">
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="exampleInputEmail1">Supplier Email address</label>
                                                <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                            </div>

                                            <div class="form-group col-md-5">
                                                <label for="NidNumber">Contact Person</label>
                                                <input type="text" v-model="form.contactPerson" class="form-control" id="NidNumber" placeholder="Contact Person">
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="Phone">Contact Phone Number</label>
                                                <input type="text" v-model="form.phn_no" class="form-control" id="Phone" placeholder="Phone Number">
                                            </div>
                                            <div class="form-group col-md-10">
                                                <label for="address">Address</label>
                                                <textarea v-model="form.address" class="form-control" placeholder="Address" id="address"></textarea>
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="designation">Category</label>
                                                <select class="form-control" id="designation" v-model="form.category">
                                                    <option v-for="category in $store.state.categories" :value="category.id">{{category.category_name}}</option>
                                                </select>
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
                                            @click="addSupplier">
                                        <i class="material-icons" style="vertical-align: text-bottom">
                                            save_alt
                                        </i> SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-header text-white"  style="background-color: #2c0635">
                <h3 class="h3">Supplier List</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Contact Person</th>
                            <th scope="col">Contact Phone Number</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(supplier,index) in suppliersFilter">
                            <th scope="row">{{supplier.id}}</th>
                            <td>{{supplier.sup_name}}</td>
                            <td>{{supplier.sup_email}}</td>
                            <td>{{supplier.category.category_name}}</td>
                            <td>{{supplier.sup_contactPerson}}</td>
                            <td>{{supplier.sup_contactPhoneNo}}</td>

                            <td>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-danger" @click="deleteEmp(supplier.id,index)">
                                        <i class="material-icons">close</i>
                                    </button>
                                    <button type="button" class="btn text-white" style="background-color: #296ce8">
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

    export default {
        name: "Employee",
        components: {},

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    contactPerson: '',
                    address: '',
                    phn_no: '',
                    category: ''
                },
                searchSupplier: '',
                suppliers:[]
            }
        },
        methods: {
            addSupplier() {
                let _this = this;
                axios.post(_this.$store.state.httpLink + 'addSupplier', _this.form)
                    .then(function (response) {
                        _this.$store.dispatch('showSuppliers');
                        _this.$toastr.error('Supplier Added', 'Message',
                            {positionClass: "toast-bottom-right"});
                    }).catch(function (error) {
                    console.log(error);
                })
            },
             /*showSuppliers() {
                 let _this = this;
                 axios.get(_this.$store.state.httpLink + 'showSuppliers')
                     .then(function (response) {
                         _this.suppliers = response.data;
                     }).catch(function (error) {
                     console.log(error);
                 })
             },*/
            /* deleteEmp(id, key) {
                let _this = this;
                console.log(id, key)
                axios.post(_this.$store.state.httpLink + 'deleteEmployee?id=' + id)
                    .then(function (response) {
                        _this.$store.state.employees.splice(key,1);
                        console.log(_this.$store.state.employees)
                    }).catch(function (error) {
                    console.log(error);
                })
            }*/

        },
        computed: {
            suppliersFilter() {
                let _this = this;
                //console.log(_this.$store.getters.databaseRead);
                return _this.$store.state.suppliers.filter(supplier => {
                    if (_this.searchSupplier) {
                        return supplier.sup_name.toLowerCase().includes(_this.searchSupplier.toLowerCase())
                    } else
                        return true;
                });
            },

        },
        created() {
            this.$store.dispatch('showCategories');
            this.$store.dispatch('showSuppliers');
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