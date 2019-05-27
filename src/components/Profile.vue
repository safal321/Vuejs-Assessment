<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                    <h2 class="card-title"  style="color:#009688"><i class="fa fa-trophy fa-fw"></i>General Information</h2>
                    <table class="table table-bordered table-hover">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{{name}}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{{gender}}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{{phone}}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{email}}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{{address}}</td>
                        </tr>
                        <tr>
                            <td>Nationality</td>
                            <td>{{nationality}}</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td>{{dateOfBirth}}</td>
                        </tr>
                        <tr>
                            <td>Education Background</td>
                            <td>{{educationBackground}}</td>
                        </tr>
                        <tr>
                            <td>Preferred Mode Of Contact</td>
                            <td>{{preferredModeOfContact}}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{{country}}</td>
                        </tr>
                        </tbody>
                    </table>
                <button class="btn btn-success" @click.prevent="reloadPage">Fill Form Again</button>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {

 computed:{
   ...mapState([
       "name",
       "address",
       "gender",
       "nationality",
       "phone",
       "dateOfBirth",
       "email",
       "educationBackground",
       "country",
       "preferredModeOfContact"
   ])
 },
    methods:{
        reloadPage:()=>{
            window.location.reload();
        }
    }
}
</script>

