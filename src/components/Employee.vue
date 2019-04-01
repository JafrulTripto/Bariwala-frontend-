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
                        <table class="table table-hover">
                            <thead>
                            <tr class="text-light">
                                <th scope="col"># Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">N.I.D Number</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="employee in employees">
                                <th scope="row">{{employee.id}}</th>
                                <td>{{employee.name}}</td>
                                <td>{{employee.email}}</td>
                                <td>{{employee.user_details.designation}}</td>
                                <td>{{employee.user_details.phn_no}}</td>
                                <td>{{employee.user_details.NID_no}}</td>
                                <td>H-{{employee.user_details.house_no}},
                                    R-{{employee.user_details.road_no}},
                                    {{employee.user_details.thana}},
                                    {{employee.user_details.district}}
                                </td>
                                <td>

                                        <b-btn class="btn btn-info btn-sm mx-2" v-b-tooltip.hover title="Edit">
                                            <i class="material-icons">edit</i>
                                        </b-btn>

                                    <b-btn class="btn btn-danger btn-sm" v-b-tooltip.hover title="Delete">
                                        <i class="material-icons">delete_forever</i>
                                    </b-btn>

                                </td>

                            </tr>
                            </tbody>
                        </table>
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
        data() {
            return {
                searchEmployee: '',
                employees: [],
                headers: [
                    {
                        text: 'Id',
                        align: 'left',
                        sortable: true,
                        value: 'id'
                    },
                    {text: 'Name', value: 'name', align: 'center',},
                    {text: 'Email', value: 'email', align: 'center',},
                ],
            }
        },
        methods: {
            addEmployee() {
                this.$router.push('addEmployee')

            },
            showEmployee() {
                let _this = this;
                axios.get(_this.$store.state.httpLink + 'showEmployee')
                    .then(function (response) {
                        _this.employees = response.data;
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

    thead {
        background-color: #0090c1;
    }
</style>