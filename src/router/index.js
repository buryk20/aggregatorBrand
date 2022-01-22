import exportMargin from "../components/exportMargin.vue";
import test2 from "../components/test2.vue";
import navBrand from "../components/navBrand.vue";

import { createRouter, createWebHistory } from "vue-router";

// eslint-disable-next-line no-unused-vars
const routesWithPrefix = (prefix, routes) => {
  return routes.map((route) => {
    route.path = `${prefix}${route.path}`;

    return route;
  });
};

const routes = [
  {
    path: "/",
    name: "exportMargin",
    component: exportMargin,
  },
  {
    path: "/test2",
    name: "test2",
    component: test2,
  },
  {
    path: "/test/:id",
    name: "navBrand",
    component: navBrand,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routesWithPrefix("", routes),
});

export default router;
