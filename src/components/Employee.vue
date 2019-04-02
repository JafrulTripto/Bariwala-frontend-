<template>
    <div>
        <v-container>

            <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                    <v-card>
                        <v-card-title class="blue darken-1 white--text headline">
                            Employee
                        </v-card-title>
                        <v-layout row wrap class="pt-4 px-3">
                            <v-flex xs8 sm6 md3>
                                <v-text-field
                                        id="search"
                                        v-model="searchEmployee"
                                        label="Search Employee"
                                ></v-text-field>
                            </v-flex>
                            <v-layout justify-end class="pt-2">
                                <v-btn class="success" @click="addEmployee" round>
                                    Add Employee
                                    <v-icon right dark>person_add</v-icon>
                                </v-btn>
                            </v-layout>
                        </v-layout>
                        <v-spacer></v-spacer>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm12 md12>
                    <v-card class="my-3">
                        <v-card-title class="blue darken-1 white--text headline">
                            Employee List
                        </v-card-title>
                        <v-card-text>
                            <v-data-table
                                    :headers="headers"
                                    :items="tasks"
                                    class="elevation-1"
                                    item-key="id"
                                    dark
                            >
                                <template v-slot:items="props">
                                    <td>{{ props.item.id }}</td>
                                    <td>
                                        <v-avatar size="42">
                                            <img :src="avatar_link+props.item.user_details.image">
                                        </v-avatar>
                                    </td>
                                    <td class="text-xs-center">{{ props.item.name }}</td>
                                    <td class="text-xs-center">{{ props.item.email }}</td>
                                    <td class="text-xs-center">{{ props.item.user_details.designation }}</td>
                                    <td class="text-xs-center">{{ props.item.user_details.phn_no }}</td>
                                    <td class="text-xs-center">

                                        <v-tooltip bottom color="cyan darken-4">
                                            <template v-slot:activator="{ on }">
                                                <v-btn fab dark small color="cyan lighten-1" v-on="on">
                                                    <v-icon dark>edit</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>
                                        <v-tooltip bottom color="red darken-4">
                                            <template v-slot:activator="{ on }">
                                                <v-btn fab dark small color="red darken-1" v-on="on" @click="deleteEmp(props.item.id, props.index)">
                                                    <v-icon dark>delete</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Delete</span>
                                        </v-tooltip>
                                    </td>

                                </template>
                            </v-data-table>
                        </v-card-text>
                        <v-card-text>

                        </v-card-text>
                    </v-card>
                </v-flex>

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
                avatar_link:'http://localhost/Laravel/Bariwala/storage/app/public/',
                headers: [
                    {
                        text: 'Id',
                        align: 'left',
                        sortable: true,
                        value: 'id'
                    },
                    { text: '', value: 'image',align: 'center', },
                    { text: 'Name', value: 'name',align: 'center', },
                    { text: 'Email', value: 'email',align: 'center', },
                    { text: 'Designation', value: 'designation',align: 'center', },
                    { text: 'Phone Number', value: 'phn_no',align: 'center', },
                    { text: 'Action',align: 'center',value:''},
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
                    }).catch(function (error) {
                    console.log(error);
                })
            },
            deleteEmp(itemKey,index){
                let _this = this;
                console.log(itemKey,index)
                axios.post(_this.$store.state.httpLink + 'deleteEmployee?id='+itemKey)
                    .then(function (response) {
                        _this.employees.splice(index);
                        _this.$toastr.warning('Deleted', 'Message',
                            {positionClass: "toast-bottom-right"});
                    }).catch(function (error) {
                    console.log(error);
                })
            }

        },
        computed:{
            tasks() {
                let _this = this;
                //console.log(_this.$store.getters.databaseRead);
                return _this.employees.filter(task => {
                    if (_this.searchEmployee) {
                        return task.name.toLowerCase().includes(_this.searchEmployee.toLowerCase())
                    }else
                        return true;
                });
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