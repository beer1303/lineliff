<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>AGENDA</v-toolbar-title>
    </v-app-bar>
    <v-sheet elevation="6">
      <v-tabs grow v-model="tab">
        <v-tab v-for="item in agenda" :key="item.date">
          {{ item.date }}
        </v-tab>
      </v-tabs>
    </v-sheet>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in agenda" :key="item.date">
        <v-container class="pt-0">
          <v-row>
            <v-col
              cols="12"
              v-for="session in item.sessions"
              :key="session.title"
            >
              <v-card
                class="agenda-card"
                :class="session.type == 'set' ? 'card-set' : ''"
              >
                <v-card-text v-if="session.type != 'set'">
                  <p class="time pl-1 mb-1">{{ session.time }}</p>
                  <v-row>
                    <v-col cols="4" class="text-center pt-2 pb-2">
                      <img :src="session.image" alt="" class="agenda-image" />
                    </v-col>
                    <v-col cols="8" class="pt-2 pb-0">
                      <v-card-title
                        class="pl-0 pt-0 pb-2 text-primary text-title"
                        >{{ session.title }}</v-card-title
                      >
                      <v-card-subtitle class="pl-0 pt-0 pb-0">{{
                        session.spaker
                      }}</v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-card-text>
                <div v-else>
                  <v-card-text
                    v-for="sessionSet in session.sessionSet"
                    :key="sessionSet.title"
                  >
                    <p class="time pl-1 mb-1">{{ session.time }}</p>
                    <v-row>
                      <v-col cols="4" class="text-center pt-2 pb-0">
                        <img
                          :src="sessionSet.image"
                          alt=""
                          class="agenda-image"
                        />
                      </v-col>
                      <v-col cols="8" class="pt-3 pb-0">
                        <v-card-title
                          class="pl-0 pt-0 pb-2 text-primary text-title"
                          >{{ sessionSet.title }}
                        </v-card-title>
                        <v-card-subtitle class="pl-0 pt-0 pb-">{{
                          sessionSet.spaker
                        }}</v-card-subtitle>
                        <p class="mb-3">{{ sessionSet.duringTime }}</p>
                      </v-col>
                    </v-row>
                    <hr
                      v-if="
                        sessionSet !=
                          session.sessionSet[session.sessionSet.length - 1]
                      "
                    />
                  </v-card-text>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null
    };
  },
  asyncData({ store }) {
    // apis
    return {
      agenda: store.getters.getAgenda
    };
  }
};
</script>
