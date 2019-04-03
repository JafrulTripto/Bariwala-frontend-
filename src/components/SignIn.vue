<template>
    <div class="container">
        <div class="row justify-content-around">
            <div class="col-md-5 col-md-offset-4">
                <div class="card card-default">
                    <div class="card-header">
                        <h3 class="card-title">Please sign in</h3>
                    </div>
                    <div class="card-body">
                        <form accept-charset="UTF-8" role="form" @submit.prevent>
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="E-mail" name="email" type="text" v-model="form.email">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" v-model="form.password">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me"> Remember Me
                                    </label>
                                </div>
                                <button class="btn btn-block btn-success" @click="login()">LOG IN</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "SignIn",

        data() {
            return {
                form:{
                    email:'',
                    password:''
                },
                alertValue:false,
            }
        },
        methods:{
            login(){
                let _this = this;
                console.log('clicked')

                this.$store.dispatch('retrieveUserData', _this.form)
                    .then(response=>{
                        console.log(response);
                        this.$router.push({path:'/dashboard'});
                        _this.$toastr.success('Successfully logged in', 'Message',
                            {positionClass: "toast-bottom-right"});
                    })
                    .catch(error=>{
                        console.log(error)
                        _this.alertValue=true;
                    })
            }
        },
        computed:{
            validateLogin(){
                return this.alertValue;
            }
        }

    }
</script>

<style scoped>

</style>