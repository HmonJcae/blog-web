import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import BlogDetailed from "../views/BlogDetailed";
import Creative from "../views/Creative";
import Boot from "../views/Boot";

import Login from "../views/Login";
import Logging from "../components/Login";
import Register from "../components/Register";

// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    //name: "Boot",
    component: Boot,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/blogDetailed",
        name: "BlogDetailed",
        component: BlogDetailed
      },
      {
        path: "/creative",
        name: "Creative",
        component: Creative
      }
    ]
  },
  {
    path: "/login",
    //name: "Login",
    component: Login,
    children: [
      {
        path: "/",
        name: "Logging",
        component: Logging
      },
      {
        path: "/register",
        name: "Register",
        component: Register
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404")
  },
  { path: "*", redirect: "/404", hidden: true }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
