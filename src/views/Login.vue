<template>
  <div>
    <v-content>
      <v-container>
        <LoginOregister />
        <router-view />
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  components: {
    LoginOregister: () => import("../components/LoginOregister")
  }
};
</script>
