<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
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
        <v-col cols="12" class="text-center pt-2 pb-0"> Display Name </v-col>
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
            <div class="gender-group d-flex mt-3">
              <p>Gender</p>
              <div
                class="circle"
                :class="form.gender == 1 ? 'active' : ''"
                @click="chooseGender(1)"
              >
                <svg
                  id="svg2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 113.29 192.76"
                >
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #fff;
                      }
                    </style>
                  </defs>
                  <path
                    id="path7"
                    class="cls-1"
                    d="M69.53,111.9A54.09,54.09,0,0,0,97.72,95.71a55,55,0,0,0,15.57-39,56.83,56.83,0,0,0-7.39-28A53.57,53.57,0,0,0,84.74,7.5a56.59,56.59,0,0,0-56.13-.1A54.35,54.35,0,0,0,7.45,28.56l0,.05a57.07,57.07,0,0,0,.31,56.75l0,.1A54.32,54.32,0,0,0,29,106.21l.11.05a61.75,61.75,0,0,0,14.48,5.64V128H3V154H43.61v38.8H69.53V154h40.56V128H69.53V111.9ZM56.6,25.66A31.47,31.47,0,0,1,72.06,29.8l.11.05A27.28,27.28,0,0,1,83.55,41a31.89,31.89,0,0,1,4.24,15.73,30,30,0,0,1-9.16,22.14A29.71,29.71,0,0,1,56.6,88a29.78,29.78,0,0,1-22-9.11,30,30,0,0,1-9.11-22.14A31.89,31.89,0,0,1,29.69,41,27.94,27.94,0,0,1,41,29.8,32.34,32.34,0,0,1,56.6,25.66Z"
                  />
                </svg>
              </div>
              <p>Female</p>
              <div
                class="circle"
                :class="form.gender == 2 ? 'active' : ''"
                @click="chooseGender(2)"
              >
                <svg
                  id="svg2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 113.29 192.76"
                >
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #fff;
                      }
                    </style>
                  </defs>
                  <path
                    class="cls-1"
                    d="M62.39,45.2l1.52,15,20.12-2-15.83,16a43,43,0,1,0-24.38,78.39h0A43,43,0,0,0,78.94,84.83l15.83-16L93,89l15,1.33,4.45-50.14ZM43.82,81.75A27.86,27.86,0,1,1,24,90,27.71,27.71,0,0,1,43.82,81.75Z"
                  />
                </svg>
              </div>
              <p>male</p>
            </div>
            <v-btn
              rounded
              color="primary"
              dark
              class="w-100 mt-10 my-btn"
              @click="next"
              >Next</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title>Form is error</v-card-title>
        <v-card-text v-html="errorMsg"></v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      errorMsg: '',
      form: {
        firsname: '',
        lastname: '',
        gender: 1,
      }
    }
  },
  methods: {
    chooseGender(gender) {
      this.form.gender = gender
    },
    validdate() {
      let validated = true
      const errors = []

      const validatorField =[
        'firsname',
        'lastname'
      ]
      validatorField.forEach((field) => {
        if(this.form[field] == ''){
          validated = false
          errors.push(`${field} can not be null`)
        }
      })
      if(!validated){
        this.errorMsg = errors.map((error) => error+'<br/>').join('')
        this.dialog = true
      }

      return validated
    },

    next() {
      if (this.validdate()) {
        this.$router.push("/register/register2");
      }
    },
  },
};
</script>

