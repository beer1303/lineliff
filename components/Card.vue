<template>
  <v-card
    class="mx-auto"
    :class="active == true ? 'active' : ''"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <div class="more-deteil" @click="$emit('moreDetail')">More Detail</div>
    </v-img>
    <div class="card-content">
      <div>
        <v-card-text class="text--primary pb-0">
          <h1>{{ session.title }}</h1>
        </v-card-text>
        <v-card-subtitle class="pt-3"> {{ session.spaker }} </v-card-subtitle>
      </div>
      <v-btn class="circle" @click="$emit('chooseWorkshop')">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["active", "session"]
};
</script>
