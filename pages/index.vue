<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      flat
      dark
      >
      <v-toolbar-title>Register</v-toolbar-title>
      </v-app-bar>
      <v-container class="pt-0 pb-0">
        <v-row>
          <v-col cols="12">
            <div class="mt-7 text-primary text-title text-center">
              Step 1 of 2
            </div>
          </v-col>
          <v-col cols="12" class="text-center pb-0">
              <img src=~/assets/img/profile.png alt="" width="155">
          </v-col>
          <v-col cols="12" class="text-center pt-2 pb-0">
            Display Name
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-text-field
              v-model="form.firsname"
              label="FirsName"
              dense
              required
        ></v-text-field>
        <v-text-field
              v-model="form.lastname"
              label="LastName"
              dense
              required
        ></v-text-field>
        <div class="gender-group">
          <p>Gender</p>
          <div class="circle">
            x
          </div>
        </div>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
    form:{
      firsname: '' ,
      lastname: ''
        }
      }
   }
  }
</script>

