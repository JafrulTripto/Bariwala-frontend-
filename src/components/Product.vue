<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header text-white" style="background-color: #2c0635">
                <h3 class="h3">Product</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-10 col-md-4 col-lg-4">
                        <input type="email" class="form-control" v-model="searchProduct" placeholder="Search">
                    </div>
                    <div class="clearfix col-lg-8">
                        <button class="float-right btn btn-success" data-toggle="modal" data-target="#productModal">Add Product</button>
                    </div>

                    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header text-white" style="background-color: #2c0635" >
                                    <h5 class="modal-title" id="exampleModalLongTitle">Add Product</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span class="text-white" aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="row d-flex justify-content-center p-2">
                                    <div class=" modal-body col-md-12 ">
                                        <form class="row d-flex justify-content-center">
                                            <div class="form-group col-md-5">
                                                <label for="nameInput">Product Name</label>
                                                <input type="text" v-model="form.product_name" class="form-control" id="nameInput" placeholder="Enter Name">
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="barcode">Barcode</label>
                                                <input type="text" v-model="form.product_barcode" class="form-control" id="barcode" placeholder="Enter Name">
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="suppliers">Supplier Name</label>
                                                <select class="form-control" id="suppliers" v-model="form.supplier_id">
                                                    <option :value="supplier.id" v-for="supplier in $store.state.suppliers">{{supplier.sup_name}}</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="category">Category</label>
                                                <select class="form-control" id="category" v-model="form.category_id">
                                                    <option :value="supplier.category.id" v-for="supplier in $store.state.suppliers">{{supplier.category.category_name}}</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-5">
                                                <label for="Phone">Buying Price</label>
                                                <input type="text" v-model="form.buying_price" class="form-control" id="Phone" placeholder="Phone Number">
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="sellingPrice">Selling Price</label>
                                                <input type="text" v-model="form.selling_price" class="form-control" placeholder="Buying Price" id="sellingPrice">
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="NidNumber">Quantity</label>
                                                <input type="text" v-model="form.quantity" class="form-control" id="NidNumber" placeholder="Qty">
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="unit">Unit</label>
                                                <select class="form-control" id="unit" v-model="form.unit_id">
                                                    <option :value="unit.id" v-for="unit in $store.state.units">{{unit.unit_name}}</option>
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
                                            @click="addProduct">
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
       <!-- <div class="card mt-3">
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
                            <td>{{supplier.category}}</td>
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
        </div>-->
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
                    product_name: '',
                    product_barcode: '',
                    category_id: '',
                    supplier_id: '',
                    unit_id: '',
                    buying_price: '',
                    selling_price: '',
                    quantity:''
                },
                searchProduct: '',
            }
        },
        methods: {
            addProduct() {
                let _this = this;
                axios.post(_this.$store.state.httpLink + 'addProduct', _this.form)
                    .then(function (response) {
                        _this.form='';
                        _this.$toastr.error('Supplier Added', 'Message',
                            {positionClass: "toast-bottom-right"});
                    }).catch(function (error) {
                    console.log(error);
                })
            },
           /* showSuppliers() {
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
                return _this.suppliers.filter(supplier => {
                    if (_this.searchSupplier) {
                        return supplier.sup_name.toLowerCase().includes(_this.searchSupplier.toLowerCase())
                    } else
                        return true;
                });
            },

        },
        created() {
            this.$store.dispatch('showUnits');

        }
    }

</script>

<style scoped>

</style>