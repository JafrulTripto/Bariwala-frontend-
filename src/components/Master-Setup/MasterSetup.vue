<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <role-setup></role-setup>
                <product-unit></product-unit>
            </div>
            <div class="col-lg-6">
                <category-setup></category-setup>
            </div>

        </div>
    </div>


</template>

<script>
    import axios from 'axios';
    import RoleSetup from "./RoleSetup";
    import productUnit from "./ProductUnit";
    import categories from './CatagorySetup'
    export default {
        name: "MasterSetup",
        components: {
            RoleSetup:RoleSetup,
            productUnit:productUnit,
            categorySetup:categories
        },

        data(){
            return{

            }
        },
        methods:{

        },
        created() {
            this.$store.dispatch('showRoles');
            this.$store.dispatch('showUnits');
            this.$store.dispatch('showCategories');
        }
    }
</script>

<style scoped>

</style>