import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogItem: {
      _id: "5e7ac87070dd753019bd62c8",
      authorId: "123",
      picUrl: "123",
      title: "weq",
      content: "asddas",
      createTime: "2020-03-25T02:56:48.945+0000"
    },
    showSnackBar: {
      show: 0,
      text: "默认提示文本",
      color: "info"
    }
  },
  mutations: {
    changeBlogItem(state, item) {
      state.blogItem = item;
    },
    showSnackBar(state, bar) {
      //'success', 'info', 'error', 'cyan darken-2'
      state.showSnackBar.text = bar.text;
      state.showSnackBar.color = bar.color;
      if (state.showSnackBar.show == 1) {
        state.showSnackBar.show = 0;
      } else {
        state.showSnackBar.show = 1;
      }
    }
  },
  actions: {
    changeBlogItem(ctx, item) {
      ctx.commit("changeBlogItem", item);
    }
    // showSnackBar(){
    //   return this.state.showSnackBar
    // }
  },
  modules: { user }
});
