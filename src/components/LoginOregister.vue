<template>
  <v-card flat class="py-12">
    <v-card-text>
      <v-row align="center" justify="center">
        <v-btn-toggle v-model="toggle_exclusive" mandatory>
          <v-btn to="/login">
            login
          </v-btn>
          <v-btn to="/register">
            register
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LoginOregister",
  data() {
    return {
      toggle_exclusive: 0
    };
  }
};
</script>
