<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                    <v-card class="px-5" flat>

                        <v-layout row wrap class="pa-3">
                            <v-flex xs12 sm6 md3>
                                <v-text-field
                                        id="search"
                                        v-model="searchEmployee"
                                        label="Search Employee"
                                        outline
                                ></v-text-field>
                            </v-flex>
                            <v-layout justify-end>
                                <v-btn class="success" @click="addEmployee">
                                    Add Employee
                                    <v-icon right dark>person_add</v-icon>
                                </v-btn>
                            </v-layout>
                        </v-layout>
                        <v-spacer></v-spacer>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-card>
                    <v-card-title>
                        Employee List
                    </v-card-title>
                    <v-card-text>

                    </v-card-text>
                </v-card>
            </v-layout>

        </v-container>

    </div>

</template>

<script>
    export default {
        name: "Employee",
        data(){
            return{
                searchEmployee:''
            }
        },
        methods:{
            addEmployee(){
                this.$router.push({path:'signUp/employee'})
            }
        }
    }
</script>

<style scoped>

</style>