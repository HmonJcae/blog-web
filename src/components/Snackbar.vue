<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="color"
      :top="true"
      >{{ text }}</v-snackbar
    >
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  data: () => ({
    snackbar: false,
    text: "My timeout is set to 2000.",
    timeout: 3000,
    color: "info"
  }),
  methods: {
    showSnackBar(text, color) {
      this.text = text;
      this.color = color;
      this.snackbar = true;
    }
  },
  computed: {
    // showOrdisappear(){
    //   return this.$store.mutations.showSnackBar
    // }
  },
  watch: {
    "$store.state.showSnackBar.show": function() {
      this.showSnackBar(
        this.$store.state.showSnackBar.text,
        this.$store.state.showSnackBar.color
      );
    }
  }
};
</script>
