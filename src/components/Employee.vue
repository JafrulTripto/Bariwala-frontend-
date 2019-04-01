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
                        <v-data-table
                                :headers="headers"
                                :items="employees"
                                class="elevation-1"
                        >
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td class="text-xs-right">{{ props.item.name }}</td>
                                <td class="text-xs-right">{{ props.item.email }}</td>
                                <td class="text-xs-right">{{ props.item.user_details.designation }}</td>
                                <td class="text-xs-right">
                                    <v-btn fab dark small color="amber darken-3">
                                        <v-icon dark>edit</v-icon>
                                    </v-btn>
                                </td>

                            </template>
                        </v-data-table>
                    </v-card-text>
                    <v-card-text>

                    </v-card-text>
                </v-card>
            </v-layout>

        </v-container>

    </div>

</template>
<script>

    import axios from 'axios';
    export default {
        name: "Employee",
        data(){
            return{
                searchEmployee:'',
                employees:[],
                headers: [
                    {
                        text: 'Id',
                        align: 'left',
                        sortable: true,
                        value: 'id'
                    },
                    { text: 'Name', value: 'name',align: 'center', },
                    { text: 'Email', value: 'email',align: 'center', },
                    { text: 'Designation', value: 'designation',align: 'center', },
                    { text: 'Action',align: 'center', },
                ],
            }
        },
        methods:{
            addEmployee(){
                this.$router.push('addEmployee')

            },
            showEmployee(){
                let _this = this;
                axios.get(_this.$store.state.httpLink + 'showEmployee')
                    .then(function (response) {
                        _this.employees=response.data;
                        console.log(_this.employees)
                    }).catch(function (error) {
                    console.log(error);
                })
            },

        },
        created() {
            this.showEmployee();

        }
    }
</script>

<style scoped>

    thead{
        background-color: #0090c1;
    }
</style>