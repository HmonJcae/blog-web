import {
  getToken,
  setToken,
  removeToken,
  setLStorage,
  getLStorage,
  removeLStorage
} from "../utils/authToken";
import { login } from "../api/login";

const user = {
  state: {
    token: getToken(),
    name: getLStorage("name")
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    }
  },
  actions: {
    Login({ commit }, formInfo) {
      const userName = formInfo.email.trim();
      return new Promise((resolve, reject) => {
        login(userName, formInfo.passWord)
          .then(response => {
            const tokenStr = response.head + response.header;
            setToken(tokenStr);
            commit("SET_NAME", userName);
            setLStorage("name", userName);
            commit("SET_TOKEN", tokenStr);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    LogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        commit("SET_NAME", "");
        removeToken();
        removeLStorage("name");
        resolve();
      });
    }
  }
};

export default user;
