<template>
  <v-app>
    <nuxt></nuxt>
  </v-app>
</template>


<style lang="scss">
  .v-application{
    font-family: 'Quicksand', sans-serif;
    }
  .v-toolbar__title{
    text-align: center;
    width: 100%;
    font-weight: bold;
    }
  .v-application .primary{
  background-color: #1A56BE !important;
    border-color: #1A56BE !important;
    }
  .text-primary{
      color: #1A56BE;
    }
  .text-title{
      font: size 20px;
      font-weight: bold;
    }
    .v-form{
      padding: 0 10px;
    }
    .circle{
      width: 45px;
      height: 45px;
      background: #1A56BE;
      color: #fff;
      border-radius: 50%;
    }

</style>
