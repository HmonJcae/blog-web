<template>
  <v-app>
    <Toolbar />
    <v-content id="home">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "../components/Toolbar";

export default {
  name: "Boot",

  components: {
    Toolbar
  },

  data: () => ({
    //
  })
};
</script>
