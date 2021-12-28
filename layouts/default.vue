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
    Dialog
  }
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
    color: rgb(255, 0, 0);
    border-radius: 50%;
    position: relative;
    background: rgba($color: #000000, $alpha: 0.3);
    margin-right: 7px;
    &.active {
      background: #1a56be !important;
    }
    svg {
      position: absolute;
      top: 4%;
      left: 23%;
      transform: translate(-0%, -0%);
      width: 15px;
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
  min-height: 50px;
  &.outlined {
    border: 1px solid #1a56be;
    border-radius: 28px;
    line-height: normal;
  }
}
.set-birthday {
  position: relative;
  .v-input__prepend-outer {
    position: absolute;
    right: 0;
  }
}
.set-padding {
  padding: 0 10px;
}
.more-deteil {
  font-size: 12px;
  font-weight: bold;
  color: #1a56be;
  border-radius: 25px;
  padding: 10px 20px;
  background: #fff;
  display: inline;
  position: absolute;
  bottom: 11px;
  right: 11px;
}
.v-card__subtitle {
  padding: 0px;
}
.v-card__text {
  padding: 0px;
  padding-bottom: 5px;
  h1 {
    font-size: 24px;
  }
}
.circle {
  height: 32px !important;
  width: 32px !important;
  min-width: auto !important;
  border-radius: 50%;
  color: #fff !important;
  background: rgba($color: #005eff, $alpha: 0.3) !important;
  align-self: center;
}
.card-content {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
.v-card + .v-card {
  margin-top: 20px;
}
.v-card.active {
  .circle {
    background: rgba($color: #005eff, $alpha: 1) !important;
  }
  .v-image {
    &::before {
      content: "selected";
      font-weight: bold;
      font-size: 24px;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #005eff;
      background: rgba($color: #ffffff, $alpha: 0.4) !important;
    }
    background: red;
  }
}
.dialog-card {
  p {
    margin-bottom: 0;
  }
  .v-card__title.headline {
    font-size: 20px !important;
    font-weight: bold;
  }
  .v-card__text {
    padding-bottom: 0;
  }
  .detail {
    margin: 10px 0;
  }
}

.v-tabs {
  margin-bottom: 15px;
}

.v-tab {
  color: #4d4d4d;
  font-weight: bold;
  background: #efefef;

  &.v-tab--active {
    color: #1a56be !important;
  }

  & + .v-tab {
    border-left: #bdbdbd solid 1px;
  }
}

.agenda-card {
  color: #4d4d4d;

  .time {
    color: #1a56be;
    font-weight: bold;
  }

  .agenda-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  & + .agenda-card {
    margin-top: 15px;
  }

  &.card-set {
    border-left: 3px solid #1a56be;

    .v-card__text + .v-card__text {
      padding-top: 2 !important;
    }
  }

  hr {
    width: 100%;
    margin: 10px auto 0;
    height: 1px;
    background: #bdbdbd;
    border: 0;
  }
}
.question {
  font-size: 20px;
}
.slider {
  margin-top: 80px;
  ::v-deep {
    .v-slider__thumb {
      height: 15px !important;
      width: 15px !important;
    }
    .v-slider__thumb-label {
      font-size: 20px;
      width: 45px !important;
      height: 45px !important;
    }
    .v-slider__track-background {
      background: rgba($color: #000, $alpha: 0.3) !important;
    }
    .v-slider--horizontal .v-slider__track-container {
      height: 4px;
    }
  }
}

.select {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 25px;
  color: #707070;
  position: relative;
  &.select {
    margin-top: 25px;
  }
  &.active {
    color: #1a56be;
    .v-icon {
      color: #1a56be;
      display: block;
    }
  }
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
    margin-bottom: 0;
  }
  .v-icon {
    position: absolute;
    right: 0;
    bottom: 25px;
    display: none;
  }
}
.mt-50 {
  margin-top: 50px;
}
.mt-100 {
  margin-top: 100px;
}
</style>
