import { createWebHistory, createRouter } from "vue-router";
// auth
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

import {
  DASHBOARD_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../utils/Constants";
import { toRefs } from "vue";
import { useUserSessionStore } from "@/stores/userSessionStore";

const routes = [
  {
    path: LOGIN_ROUTE,
    name: "Login",
    component: Login,
    meta: {
      layout: "AUTH",
      authRequired: false,
    },
  },
  {
    path: REGISTER_ROUTE,
    name: "Register",
    component: Register,
    meta: {
      layout: "AUTH",
      authRequired: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to: any, from: any, next: any) => {
  const userSessionStore = useUserSessionStore();
  const { getAccessToken } = toRefs(userSessionStore);

  if (to.meta.authRequired) {
    console.log("AUTH IS  REQUIRED", getAccessToken.value);

    if (getAccessToken.value) {
      // console.log("AUTHENTICATED")
      next();
    } else {
      // console.log("UNAUTHENTICATED")
      next(LOGIN_ROUTE).catch((error: any) => {
        console.log(error);
      });
    }
  } else {
    //    console.log( "AUTH IS NOT REQUIRED")
    // console.log("AUTH IS NOT REQUIRED", getAccessToken.value);

    if (getAccessToken.value) {
      // console.log("AUTH IS NOT REQUIRED BUT AUTHENTICATED")
      next(DASHBOARD_ROUTE);
    } else {
      // console.log("UNAUTHENTICATED")

      if (to.meta.path !== LOGIN_ROUTE) {
        next();
      } else {
        next(LOGIN_ROUTE).catch((error: any) => {
          console.log(error);
        });
      }
    }
  }
});

export default router;
