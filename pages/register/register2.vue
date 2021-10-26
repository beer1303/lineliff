<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-7 text-primary text-title text-center">
            Step 2 of 2
          </div>
        </v-col>
        <v-col cols="12">
          <v-form>
            <p class="text-center text-main mb-0 mt-4">Tell us more a bit</p>
            <v-text-field
              v-model="form.email"
              label="Email"
              dense
              :rules="emailRukes"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.phone"
              label="Phone"
              dense
              :rules="phoneRukes"
              @keypress="onlyNumber($event, 10)"
              required
            ></v-text-field>

            <v-dialog ref="dialog" v-model="modal" persistent width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.birthday"
                  label="Birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  class="set-birthday"
                ></v-text-field>
              </template>
              <v-date-picker
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                v-model="form.birthday"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>

            <p class="text-center text-main mb-0 mt-4">Work Profile</p>
            <v-text-field
              v-model="form.company"
              label="Company"
              dense
              required
            ></v-text-field>
            <v-text-field
              v-model="form.position"
              label="Position"
              dense
              required
            ></v-text-field>
            <v-btn
              rounded
              color="primary"
              dark
              class="w-100 mt-10 my-btn"
              @click="register"
              >Register</v-btn
            >
            <div class="w-100 text-center my-btn text-primary" @click="back">
              Back
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const REGEX_EMAIL =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const REGEX_PHONE = /^[0]([0-9]{9})*$/
const REGEX_NUMBER = /^[0-9]*$/
export default {
  data() {
    return {
      form: {
        email: '',
        phone: '',
        birthday: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        company: '',
        position: '',
      },
      modal: false,
      emailRukes: [(value) => this.emailValidator(value)],
      phoneRukes: [(value) => this.phoneValidator(value)],
    };
  },
  methods: {
    phoneValidator(value) {
       if (value == '') {
        return "required";
      }
      if (REGEX_PHONE.test(value)) {
        return true;
      }
      return "please input phonenumber";
    },
    emailValidator(value) {
      if (value == '') {
        return "required";
      }
      if (REGEX_EMAIL.test(value)) {
        return true;
      }
      return "email is Invalid";
    },
    onlyNumber(event, max){
      if(event.target.value.length == 0){
        if(event.key != 0){
          return event.preventDefault()
        }
      }else{
          if(!REGEX_NUMBER.test(event.key) || event.target.value.length == max){
          return event.preventDefault()
        }
      }
    },
    back() {
      this.$router.push("/register");
    },
    register() {
      console.log("Register");
    },
  },
};
</script>
