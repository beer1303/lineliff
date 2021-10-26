<template>
  <v-app>
    <nuxt></nuxt>
    <Dialog />
  </v-app>
</template>


<script lang="ts">
import Dialog from "~/components/Dialog.vue";

export default {
  components: {
    Dialog,
  },
};
</script>

<style lang="scss">
.v-application {
  font-family: "Quicksand", sans-serif;
}
.v-toolbar__title {
  text-align: center;
  width: 100%;
  font-weight: bold;
}
.v-application .primary {
  background-color: #1a56be !important;
  border-color: #1a56be !important;
}
.text-primary {
  color: #1a56be;
}
.text-main {
  font-size: 20px;
}
.text-title {
  font: size 20px;
  font-weight: bold;
}
.v-form {
  padding: 0 10px;
}
.gender-group {
  p {
    margin-bottom: 0;
    align-self: center;
    margin-right: 20px;
  }
  .circle {
    width: 45px;
    height: 45px;
    color: #fff;
    border-radius: 50%;
    position: relative;
    background: rgba($color: #000000, $alpha: 0.3);
    margin-right: 7px;
    &.active {
      background: #1a56be;
    }
    svg {
      position: absolute;
      top: 10%;
      left: 23%;
      transform: translate(-3%, -5%);
      width: 23px;
    }
  }
}
.w-100 {
  width: 100%;
}
.my-btn {
  font-size: 20px !important;
  text-transform: none !important;
  height: auto !important;
  padding: 10px !important;
  font-weight: bold;
}
.set-birthday {
  position: relative;
  .v-input__prepend-outer {
    position: absolute;
    right: 0;
  }
}
</style>
