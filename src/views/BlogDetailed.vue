<template>
  <div>
    <v-content>
      <section id="blog-detailedl">
        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">{{ blogItem.title }}</h2>
          <h4>作者ID:{{ blogItem.authorId }}</h4>
          <h4>最后发布于:{{ dateFilter(blogItem.createTime) }}</h4>
          <v-responsive class="mx-auto mb-8" width="100%">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
            v-html="blogItem.content"
          ></v-responsive>

          <div></div>
        </v-container>

        <div class="py-12"></div>
      </section>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "BlogDetailed",
  data: () => ({}),
  computed: {
    blogItem: function() {
      return this.$store.state.blogItem;
    }
  },
  methods: {
    dateFilter: function(input) {
      var d = new Date(input);
      var year = d.getFullYear();
      var month =
        d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : "" + (d.getMonth() + 1);
      var day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
      var hour = d.getHours() < 10 ? "0" + d.getHours() : "" + d.getHours();
      var minutes =
        d.getMinutes() < 10 ? "0" + d.getMinutes() : "" + d.getMinutes();
      var seconds =
        d.getSeconds() < 10 ? "0" + d.getSeconds() : "" + d.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
  }
};
</script>
