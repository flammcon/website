<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <!-- <v-layout align-center justify-center> -->
        <v-row align="center" justify="center">
          <router-view />
        </v-row>
        <!-- </v-layout> -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    // drawer: null,
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
