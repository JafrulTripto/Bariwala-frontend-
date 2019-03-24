<template>
    
</template>

<script>
    export default {
        name: "signOut",

        created() {
            this.$store.dispatch('destroyToken')
                .then(response=>{
                    this.$router.push({path:'/'});
                });
        }

    }
</script>

<style scoped>

</style>