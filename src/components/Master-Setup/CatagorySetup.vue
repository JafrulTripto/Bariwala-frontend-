<template>
    <div class="col-lg-12 mb-3">
        <div class="card">
            <div class="card-header text-white" style="background-color: #2c0635">

                <h4 class="d-inline">Category Settings</h4>
                <button class="d-inline btn btn-success btn-sm float-right" data-toggle="modal"
                        data-target="#addCategoryModal">
                    <i class="material-icons">
                        add
                    </i>
                </button>

                <div class="modal fade" id="addCategoryModal" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #2c0635">
                                <h5 class="modal-title" id="exampleModalLabel">Add New Category</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="newCategory" class="text-dark">New Unit</label>
                                    <input type="text" class="form-control" id="newCategory" placeholder="Add Category"
                                           v-model="category">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addNewCategory">
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
                        <tr v-for="(category,index) in $store.state.categories">
                            <th>{{index+1}}</th>
                            <td>{{category.category_name}}</td>
                            <td>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-danger" @click="deleteCategory(category.id)">
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

    export default {
        name: "SystemSetup",
        data() {
            return {
                category: ''
            }
        },
        methods: {
            addNewCategory() {
                let _this = this;
                axios.post(_this.$store.state.httpLink + 'addCategory?category_name=' + _this.category)
                    .then(function (response) {
                        _this.$store.dispatch('showCategories');
                        _this.$toastr.success('New Category Added', 'Message',
                            {positionClass: "toast-bottom-right"});
                        _this.category='';
                        console.log(_this.category);
                    }).catch(function (error) {
                    console.log(error);
                })
            },
            deleteCategory(id) {
                let _this = this;
                axios.post(_this.$store.state.httpLink +'deleteCategory?id='+id)
                    .then(function (response) {
                        _this.$store.dispatch('showCategories');
                        _this.$toastr.error('Category Deleted', 'Message',
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