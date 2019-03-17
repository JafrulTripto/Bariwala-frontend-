export const authMixins = {
    data(){
        return{
            form: {
                name: '',
                email: '',
                nidNo: null,
                password: '',
                confirmPass: '',
                birthDate: null,
                occupation: '',
                houseNo: '',
                road: '',
                thana: '',
                district: ''
            },
            nameInputRules:[
                v => !!v || 'Name is required',
                v => (v &&v.length>=3) || 'Name must be 3 character'
            ],
            emailInputRules:[
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'Must be valid E-mail'
            ],
            passwordInputRules:[
                v => !!v || 'Password is required',
                v => (v &&v.length>=6) || 'Password must be 6 character'
            ],
            nidInputRules:[
                v => !!v || 'NID is required',
                /*v => v.length>=31 || 'Enter a valid NID'*/
            ],
            occupationInputRules:[
                v => !!v || 'Occupation is required',
            ],
            houseInputRules:[
                v => !!v || 'House number is required',
            ],
            roadInputRules:[
                v => !!v || 'Road number is required',
            ],
            thanaInputRules:[
                v => !!v || 'Thana is required',

            ],
            districtInputRules:[
                v => !!v || 'District is required',
            ],
            birthDateInputRules:[
                v => !!v || 'Birth date is required',
            ],
        }
    },
    methods:{
        resetForm() {
            this.$refs.signInForm.reset();
            // console.log(this.$store.state.forms);
        }
    }


};