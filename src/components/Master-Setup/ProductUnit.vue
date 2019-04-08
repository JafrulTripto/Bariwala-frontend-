<template>
    <div class="modal fade" id="addUnitModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <input type="text" class="form-control" id="newRole" placeholder="Unit" v-model="unit">
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
    export default {
        name: "SystemSetup",
        data(){
            return{
                unit:''
            }
        }
    }
</script>

<style scoped>

</style>