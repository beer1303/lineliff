<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding">
            <div class="text-center mt-10">
              <v-col cols="12" class="text-center pb-0 profile-img">
                <img
                  v-if="getLine.pictureUrl == ''"
                  src="~/assets/profile.png"
                  alt=""
                  width="155"
                />
                <img v-else :src="getLine.pictureUrl" alt="" width="155" />
              </v-col>
              <h1 class="text-title">Welcome, {{ getLine.displayName }}</h1>
              <p class="mt-8">
                Welcome to the event,<br />
                Tons of workshop are waiting for you.<br />
                Me hope you have a good time here.
              </p>
            </div>
            <v-btn
              rounded
              color="primary"
              dark
              class="w-100 mt-10 my-btn"
              @click="workshop"
              >Register Workshop</v-btn
            >
            <div
              class="w-100 text-center my-btn outlined text-primary mt-5"
              @click="close"
            >
              Close
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    liff
      .init({
        liffId: "1656783763-27oy5YDB"
      })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then(profile => {
            this.$store.dispatch("setLine", profile);
            this.isDone();
          });
        } else {
          liff.login();
        }
      });
  },
  computed: {
    getLine() {
      return this.$store.getters.getLine;
    }
  },
  data() {
    return {
      name: this.$store.getters.getRegister.firstname
    };
  },
  methods: {
    workshop() {
      this.$routor.push("workshop");
    },
    close() {
      liff.closeWindow();
    }
  }
};
</script>
