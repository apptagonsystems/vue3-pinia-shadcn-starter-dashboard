import {
  AUTH_TOKEN,
  DASHBOARD_ROUTE,
  LOADING,
  LOADING_TOAST_ID,
  LOGIN_ADMIN_URL,
  REGISTER_ADMIN_URL,
  USER_SESSION_STORE,
} from "@/utils/Constants";
import { defineStore } from "pinia";
import { UserSessionState } from "@/utils/types";

import axios, { AxiosResponse } from "axios";
import { toast } from "vue3-toastify";

import router from "../router/index";

export const useUserSessionStore = defineStore(USER_SESSION_STORE, {
  state: (): UserSessionState => ({
    user: null,
    accessToken: null,
    isLoading: false,
    hasError: false,
    errorMessage: null,
  }),
  getters: {
    getUser: (state) => state.user,
    getAccessToken: (state) => state.accessToken,
    getIsLoading: (state) => state.isLoading,
    getHasError: (state) => state.hasError,
    getErrorMessage: (state) => state.errorMessage,
  },
  actions: {
    async fetchAccessToken() {
      try {
        const data = localStorage.getItem(AUTH_TOKEN);
        this.accessToken = data;
        console.log("fetchAccessToken data");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     *  REGISTER ADMIN
     */

    async registerAdmin(phone: string, email: string, name: string) {
      try {
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },

    /**
     *  LOGIN ADMIN
     */

    async loginAdmin(phone: string, email: string, password: string) {
      try {
      } catch (error) {
        console.log(error);
        this.hasError = true;
        this.isLoading = false;
        this.errorMessage = `${error}` ?? "";

        toast.remove(LOADING_TOAST_ID);

        toast.error(this.errorMessage ?? "", {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
  },
  persist: {
    enabled: true,
  },
});
