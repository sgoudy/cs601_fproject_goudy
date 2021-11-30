import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Portfolio from "../pages/Portfolio.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Skills from "../pages/Skills.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/skills",
    name: "skills",
    component: Skills
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;