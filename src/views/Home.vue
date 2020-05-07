<template>
  <div id="home">
    <v-card max-width="1000" class="mx-auto">
      <v-spacer></v-spacer>

      <v-list two-line subheader>
        <v-list-item
          v-for="item in blogs"
          :key="item._id"
          @click="handleBlogClick(item)"
        >
          <v-list-item-avatar>
            <v-icon v-text="item.picUrl"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle>
              <span
                class="d-inline-block text-truncate"
                style="max-width: 250px;"
                >{{ toText(item.content) }}</span
              >
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>{{
            dateFilter(item.createTime)
          }}</v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { getBlog } from "../api/blog";

export default {
  name: "Home",
  data: () => ({
    blogs: [
      {
        _id: "5e7ac87070dd753019bd62c8",
        authorId: "123",
        picUrl: "123",
        title: "weq",
        content: "asddas",
        createTime: "2020-03-25T02:56:48.945+0000"
      },
      {
        _id: "5e7ac87370dd753019bd62c9",
        authorId: "123",
        picUrl: "123",
        title: "weq2",
        content: "asddas",
        createTime: "2020-03-25T02:56:51.692+0000"
      }
    ]
  }),
  methods: {
    list() {
      getBlog()
        .then(res => {
          this.blogs = res;
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleBlogClick(item) {
      this.$store.dispatch("changeBlogItem", item);
      this.$router.push("/blogDetailed");
    },
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
    },
    toText(HTML) {
      var input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    }
  },
  created() {
    // 获取所有博客
    this.list();
  },
  components: {
    //About: () => import('@/components/home/About')
  }
};
</script>
