<template>

    <div class="container">
        <table class="table  table-hover">
            <thead>
            <tr>
                <th>Total Lead</th>
                <th>This Month</th>
                <th>Till This Month</th>
                <th>Order</th>
                <th>Performance (%)</th>
                <th>Order Performance (%)</th>
            </tr>
            </thead>
            <tbody>
            <tr class="clickable" data-toggle="collapse" data-target="#group-of-rows-1" aria-expanded="false" aria-controls="group-of-rows-1">
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>

            </tr>
            </tbody>
            <tbody id="group-of-rows-1" class="collapse">
            <tr>

                <td>Salesman 1</td>
                <td>data 1</td>
                <td>data 2</td>
                <td>data 3</td>
                <td>data 4</td>
                <td>data 5</td>
            </tr>
            <tr>

                <td>Salesman 2</td>
                <td>data 1</td>
                <td>data 2</td>
                <td>data 3</td>
                <td>data 4</td>
                <td>data 5</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: "Dashboard",

        data () {
            return {
                expanded: {},
                headers: [
                    {
                        text: 'Total Lead',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'This Month', value: 'calories' },
                    { text: 'Till This Month', value: 'fat' },
                    { text: 'Order', value: 'carbs' },
                    { text: 'Performance (%)', value: 'protein' },
                    { text: 'Order Performance (%)', value: 'op' }
                ],
                items: [
                    {
                        value: false,
                        name: 'Total BO',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        sodium: 87,
                        calcium: '14%',
                        iron: '1%',
                        salesman:[
                            {
                                salesmanName:'Salesman 1',
                                thisMonth:'34',
                                tillThisMonth:'565',
                                order:'578',
                                performance:'566',
                                orderPerformance:'533',

                            },
                            {
                                salesmanName:'Salesman 2',
                                thisMonth:'56',
                                tillThisMonth:'120',
                                order:'10',
                                performance:'200',
                                orderPerformance:'300',

                            }
                        ],

                    },

                ]
            }
        },

    }
</script>

<style scoped>

    tbody.collapse.in {
        display: table-row-group;
    }
</style>