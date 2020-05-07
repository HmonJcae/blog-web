<template>
  <v-app>
    <router-view></router-view>
    <Snackbar></Snackbar>
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar";
export default {
  name: "App",

  components: {
    Snackbar
  },

  data: () => ({})
};
</script>
