<template>
  <div>
    <v-card class="flex-row d-flex mx-auto" flat tile max-width="1000">
      <v-card class max-width="400">
        <v-container style="max-height: 680px" class="overflow-y-auto">
          <v-list>
            <v-list-item-group
              v-model="model"
              :mandatory="mandatory"
              color="indigo"
            >
              <v-list-item @click="handleNewClick">
                <v-list-item-icon>new </v-list-item-icon>
                <v-list-item-content>article</v-list-item-content>
              </v-list-item>
              <v-list-item
                v-for="item in blogs"
                :key="item._id"
                @click="hadleBlog(item)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group> </v-list
        ></v-container>
      </v-card>

      <v-card class>
        <v-card>
          <v-text-field
            v-model="blog.title"
            :rules="titleRules"
            label="Title"
            required
            :counter="50"
            ref="form"
          ></v-text-field
        ></v-card>
        <editor-bar v-model="blog.content" ref="myEditor"></editor-bar>
        <v-btn class height="48" @click="upload">upload</v-btn>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { getUserBlog, addBlog, updataBlog } from "../api/blog";
export default {
  name: "Creative",
  data: () => ({
    blogs: [
      // {
      //   _id: "5e7ac87070dd753019bd62c8",
      //   authorId: "123",
      //   picUrl: "123",
      //   title: "",
      //   content: "asddas",
      //   createTime: "2020-03-25T02:56:48.945+0000"
      // }
    ],
    blog: {
      _id: "",
      authorId: "",
      title: "",
      content: ""
    },
    titleRules: [
      v => !!v || "Title is required",
      v =>
        (v && v.length >= 3 && v.length <= 50) ||
        "Title must be more than 3 but less than 50 characters"
    ],
    model: 0,
    mandatory: true
  }),
  created() {
    this.getBlog();
  },
  methods: {
    handleNewClick() {
      this.blog._id = "";
      this.blog.title = "";
      this.$refs.form.reset();
      this.$refs.myEditor.isClear();
    },
    hadleBlog(item) {
      this.blog._id = item._id;
      this.blog.title = item.title;
      this.$refs.myEditor.toValue(item.content);
    },
    upload() {
      if (this.validate()) {
        this.blog.authorId = this.blogName;
        if (this.blog._id === "") {
          addBlog(this.blog).then(() => {
            this.getBlog();
          });
        } else {
          updataBlog(this.blog).then(() => {
            this.getBlog();
          });
        }
      } else {
        this.$store.commit("showSnackBar", {
          text: "标题不符合要求",
          color: "error"
        });
      }
    },
    getBlog() {
      //console.log(this.blogName);
      getUserBlog(this.blogName).then(response => {
        this.blogs = response;
      });
    },
    validate() {
      var valid = this.$refs.form.validate();
      return valid;
    }
  },
  computed: {
    blogName: function() {
      return this.$store.state.user.name;
    }
  },
  components: {
    editorBar: () => import("../components/WangEnduit")
  }
};
</script>
