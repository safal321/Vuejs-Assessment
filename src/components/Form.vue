<template>
    <div class="container">
        <form @submit.prevent="handleSubmit" id="personalInfo" v-if="seen">
            <br>
            <h2 class="card-title">Please Fill all details</h2>
        <div class="row">
            <div class="col-sm-6">
                    <div class="form-group">

                        <label for="name">Name</label>
                        <input id="name"  v-validate="'required|alpha_spaces'" type="text" v-model="name" name="name" class="form-control" placeholder="Enter name" data-vv-as="Name">
                        <span class="red">{{errors.first('name')}}</span>

                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <select v-model="gender"  name="gender" id="gender" class="form-control" v-validate="'required'" data-vv-as="Gender">

                            <option disabled value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>
                        <span class="red">{{errors.first('gender')}}</span>
                    </div>

                    <div class="form-group">

                        <label for="phone">Phone</label>
                        <input id="phone" type="text" v-model="phone" name="phone" class="form-control" placeholder="Enter phone" v-validate="'required|numeric|digits:10'" data-vv-as="Phone">
                        <span class="red">{{errors.first('phone')}}</span>

                    </div>
                    <div class="form-group">

                        <label for="email">Email</label>
                        <input v-validate="'required|email'" id="email" name="email" type="text" v-model="email" class="form-control" placeholder="Enter email" data-vv-as="Email">
                        <span class="red">{{ errors.first('email') }}</span>

                    </div>
                <div class="form-group country">

                    <label for="country">Country</label>
                    <input id="country" type="text" name="country" v-model="country" class="form-control" placeholder="Enter country" v-validate="'required|alpha'" data-vv-as="Country">
                    <span class="red">{{errors.first('country')}}</span>
                </div>
            </div>
            <div class="col-sm-6">

                <div class="form-group">

                    <label for="address">Address</label>
                    <input id="address" type="text" name="address" v-model="address" class="form-control" placeholder="Enter address" v-validate="'required'" data-vv-as="Address">
                    <span class="red">{{errors.first('address')}}</span>

                </div>
                <div class="form-group">

                    <label for="nationality">Nationality</label>
                    <input id="nationality" v-model="nationality" type="text" name="nationality" class="form-control" placeholder="Enter nationality" v-validate="'required|alpha_spaces'" data-vv-as="Nationality">
                    <span class="red">{{errors.first('nationality')}}</span>

                </div>
                <div class="form-group">

                    <label for="dateOfBirth">Date of birth</label>
                    <datepicker v-validate="'required'"  id="dateOfBirth" name="dateOfBirth" class="form-control"  placeholder="Select date" v-model="dateOfBirth" data-vv-as="Date of birth"></datepicker>
                    <span class="red">{{errors.first('dateOfBirth')}}</span>

                </div>
                <div class="form-group">

                    <label for="educationBackground">Education background</label>
                    <textarea rows="1" cols="1" id="educationBackground" name="educationBackground" v-model="educationBackground" type="text" class="form-control" placeholder="Enter education background" v-validate="'required'" data-vv-as="Education background"></textarea>
                    <span class="red">{{errors.first('educationBackground')}}</span>

                </div>
                <div class="form-group">

                    <label for="preferredModeOfContact">Preferred mode of contact</label>
                    <select name="preferredModeOfContact" v-model="preferredModeOfContact" id="preferredModeOfContact" class="form-control" v-validate="'required'" data-vv-as="Preferred mode of contact">
                        <option disabled value="">Select contact mode</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="none">None</option>
                    </select>
                    <span  class="red">{{errors.first('preferredModeOfContact')}}</span>

                </div>
            </div>
        </div>
            <div class="row">
                <div class="col-sm-4">
                    <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                </div>
            </div>
        </form>
        <div class="col-sm-12 result">
            <Profile v-if="informationSeen"></Profile>
        </div>
    </div>
</template>

<script>
    import Datepicker from "vuejs-datepicker/src/components/Datepicker";
    import {mapMutations} from 'vuex';
    import Profile from './Profile';

    export default {
        data(){
            return {
                name: '',
                address: '',
                gender: '',
                nationality: '',
                phone: '',
                dateOfBirth: '',
                email: '',
                educationBackground: '',
                country: '',
                preferredModeOfContact: '',
                seen:true,
                informationSeen:false
            }
        },
        components: {
            Datepicker,
            Profile
        },
        methods: {
            ...mapMutations([
                'setName',
                'setAddress',
                'setGender',
                'setNationality',
                'setPhone',
                'setDateOfBirth',
                'setEmail',
                'setEducationBackground',
                'setCountry',
                'setPreferredModeOfContact'
            ]),
            handleSubmit(e) {

                let date = this.getFormattedDate(this.dateOfBirth);
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.setName(this.name);
                        this.setAddress(this.address);
                        this.setGender(this.gender);
                        this.setNationality(this.nationality);
                        this.setPhone(this.phone);
                        this.setDateOfBirth(date);
                        this.setEmail(this.email);
                        this.setEducationBackground(this.educationBackground);
                        this.setCountry(this.country);
                        this.setPreferredModeOfContact(this.preferredModeOfContact);
                        this.seen = false;
                        this.informationSeen = true;
                        e.target.reset();
                    }
                });
            },
            getFormattedDate(date){
                return date.toString().substring(0, 15);
            }

        },
    };
</script>

<style>
    .red {
        color: red;

    }
    .country{
        margin-top: 28px;
    }
    .card-title{
        color:#009688;
    }
</style>

